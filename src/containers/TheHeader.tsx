import CIcon from '@coreui/icons-react';
import {
  CButton,
  CCol,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CInputCheckbox,
  CLabel,
  CLink,
  CRow
} from '@coreui/react';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProvider, TOKEN_INSTANCE } from '../shared/blockchain-helpers';
import { getEllipsisTxt } from '../shared/casual-helpers';
import { ToastError, ToastInfo } from '../shared/components/Toast';
import { RootState } from '../shared/reducers';
import { softReset as assetsSoftReset } from '../views/assets/assets.reducer';
import { softReset as eventsSoftReset } from '../views/events/events.reducer';
import { softReset as transactionsSoftReset } from '../views/transactions/transactions.reducer';
import { getAddress, getContractWithSigner, getProviderLogin, getSigner } from '../views/wallet/wallet.api';
import { softReset as walletSoftReset } from '../views/wallet/wallet.reducer';

declare let window: any;
const TheHeader = () => {
  const dispatch = useDispatch();
  const provider = getProvider();
  const {
    getProviderLoginSuccess,
    getSignerSuccess,
    signer,
    signerAddress,
    errorMessage: walletErrorMessage,
  } = useSelector((state: RootState) => state.wallet);
  const { initialState: assetsInitialState } = useSelector((state: RootState) => state.assets);
  const { errorMessage: assetErrorMessage } = assetsInitialState;

  const { initialState: eventsInitialState } = useSelector((state: RootState) => state.events);
  const { errorMessage: eventErrorMessage } = eventsInitialState;

  const { errorMessage: transactionErrorMessage } = useSelector((state: RootState) => state.transactions);

  const onConnectWallet = () => () => {
    if (window.ethereum) {
      dispatch(getProviderLogin(provider));
    } else {
      ToastInfo('No provider found');
    }
  };

  useEffect(() => {
    if (transactionErrorMessage) {
      ToastError(transactionErrorMessage);
      dispatch(transactionsSoftReset());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionErrorMessage]);

  useEffect(() => {
    if (eventErrorMessage) {
      ToastError(eventErrorMessage);
      dispatch(eventsSoftReset());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventErrorMessage]);

  useEffect(() => {
    if (assetErrorMessage) {
      ToastError(assetErrorMessage);
      dispatch(assetsSoftReset());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [assetErrorMessage]);

  useEffect(() => {
    if (walletErrorMessage) {
      ToastError(walletErrorMessage);
      dispatch(walletSoftReset());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletErrorMessage]);

  useEffect(() => {
    if (getProviderLoginSuccess) {
      dispatch(getSigner(provider));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getProviderLoginSuccess]);

  useEffect(() => {
    if (getSignerSuccess && signer !== null) {
      const TokenContract = TOKEN_INSTANCE();
      if (!TokenContract) return;
      const body = { contract: TokenContract, signer };
      dispatch(getAddress(signer));
      dispatch(getContractWithSigner(body));
      dispatch(walletSoftReset());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getSignerSuccess]);

  return (
    <CHeader className="header-container d-block" withSubheader>
      <CHeaderNav>
        <CHeaderBrand className="header-brand mx-auto">
          <p className="m-0 content-title text-white">WEBVIEW</p>
        </CHeaderBrand>
      </CHeaderNav>
      <CHeaderNav className="justify-content-between bg-white">
        <CHeaderNavItem>
          <CButton className="text-primary pr-0 border-0 pl-2">
            <CIcon name="cil-menu" size="xl" />
          </CButton>
        </CHeaderNavItem>
        <CHeaderNavItem>
          <CLink to="/listings">
            <p className="header-title content-title mb-0">Dashboard</p>
          </CLink>
        </CHeaderNavItem>
        <CHeaderNavItem>
          <CButton className="btn-link-wallet content-title btn-radius-50 px-1" onClick={onConnectWallet()}>
            {signerAddress ? getEllipsisTxt(signerAddress) : 'Liên kết ví'}
          </CButton>
        </CHeaderNavItem>
        <CHeaderNavItem>
          <CDropdown>
            <CDropdownToggle caret={false} className="text-primary pl-0 border-0 pr-2">
              <CIcon name="cil-filter" size="xl" />
            </CDropdownToggle>
            <CDropdownMenu className="dr-menu-filter m-0">
              <CDropdownHeader className="text-center modal-title-style">Filter</CDropdownHeader>
              <CRow className="mx-0">
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-1">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      City <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu className="m-0">
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-1">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Dist <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu className="m-0">
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-1">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Loại sản phẩm <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu className="m-0">
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-1">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Phân khúc <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu className="m-0">
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-1">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Diện tích <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu className="m-0">
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-1">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Hướng <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu className="m-0">
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-1">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Phí khai thác <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu className="m-0">
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-1">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Chất lượng <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu className="m-0">
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={12} className="px-3 text-left py-2 d-flex align-items-center">
                  <CInputCheckbox id="owned" name="owned" className="form-check-input m-0" />
                  <CLabel className="content-title pl-2 m-0">Sở hữu bởi tôi</CLabel>
                </CCol>
                <CCol xs={12} className="d-flex justify-content-center my-2">
                  <CButton className="btn btn-primary btn-radius-50">ÁP DỤNG</CButton>
                </CCol>
              </CRow>
            </CDropdownMenu>
          </CDropdown>
        </CHeaderNavItem>
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
