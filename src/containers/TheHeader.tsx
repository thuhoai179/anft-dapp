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
import { faAngleDown, faBars, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TheHeader = () => {
  return (
    <CHeader className="header-container d-block" withSubheader>
      <CHeaderNav>
        <CHeaderBrand className="header-brand mx-auto">
          <p className="m-0 content-title text-white">WEBVIEW</p>
        </CHeaderBrand>
      </CHeaderNav>
      <CHeaderNav className="justify-content-between bg-white">
        <CHeaderNavItem>
          <CButton className="text-primary">
            <FontAwesomeIcon icon={faBars} size="2x" />
          </CButton>
        </CHeaderNavItem>
        <CHeaderNavItem>
          <CLink to="/dashboard">
            <p className="header-title content-title mb-0">Dashboard</p>
          </CLink>
        </CHeaderNavItem>
        <CHeaderNavItem>
          <CButton className="btn-link-wallet content-title btn-radius-50">Liên kết ví</CButton>
        </CHeaderNavItem>
        <CHeaderNavItem>
          <CDropdown>
            <CDropdownToggle caret={false} className="text-primary">
              <FontAwesomeIcon icon={faSlidersH} size="2x" />
            </CDropdownToggle>
            <CDropdownMenu className="dr-menu-filter">
              <CDropdownHeader className="text-center modal-title-style">Filter</CDropdownHeader>
              <CRow className="mx-0">
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-2">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      City <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-2">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Dist <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-2">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Loại sản phẩm <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-2">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Phân khúc <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-2">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Diện tích <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-2">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Hướng <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-2">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Phí khai thác <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-0 text-center py-2">
                  <CDropdown className="mx-2">
                    <CDropdownToggle
                      color="white"
                      className="dt-filter content-title btn-radius-50 text-dark"
                      caret={false}
                    >
                      Chất lượng <FontAwesomeIcon icon={faAngleDown} />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      <CDropdownItem href="#">Action</CDropdownItem>
                      <CDropdownItem href="#">Another action</CDropdownItem>
                      <CDropdownItem href="#">Something else here</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                </CCol>
                <CCol xs={6} className="px-3 text-center py-2">
                  <CInputCheckbox id="owned" name="owned" className="form-check-input" />
                  <CLabel className="content-title">Sở hữu bởi tôi</CLabel>
                </CCol>
                <CCol xs={12} className="d-flex justify-content-center">
                  <CButton className="btn btn-primary btn-radius-50">ÁP DỤNG</CButton>
                </CCol>
              </CRow>
            </CDropdownMenu>
          </CDropdown>
        </CHeaderNavItem>
      </CHeaderNav>
      {/* <CSubheader className="sub-header mt-0 justify-content-center align-items-center">
        <CRow className="w-100 px-1">
          <CCol xs={4} className="px-0 text-center">
            <CDropdown className="mx-2">
              <CDropdownToggle
                color="white"
                className="dt-filter content-title btn-radius-50 w-100 px-0 text-dark"
                caret={false}
              >
                Loại <FontAwesomeIcon icon={faAngleDown} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CCol>
          <CCol xs={4} className="px-0 text-center">
            <CDropdown className="mx-2">
              <CDropdownToggle
                color="white"
                className="dt-filter content-title btn-radius-50 w-100 px-0 text-dark"
                caret={false}
              >
                State <FontAwesomeIcon icon={faAngleDown} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CCol>
          <CCol xs={4} className="px-0 text-center">
            <CDropdown className="mx-2">
              <CDropdownToggle
                color="white"
                className="dt-filter content-title btn-radius-50 w-100 px-0 text-dark"
                caret={false}
              >
                Services <FontAwesomeIcon icon={faAngleDown} />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CCol>
        </CRow>
      </CSubheader> */}
    </CHeader>
  );
};

export default TheHeader;
