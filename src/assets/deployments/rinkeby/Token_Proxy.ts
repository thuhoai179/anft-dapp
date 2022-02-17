export default {
  "address": "0xffAed760156D8C815F9071F4655E2eC816639fE5",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "previousAdmin",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "newAdmin",
          "type": "address"
        }
      ],
      "name": "AdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "beacon",
          "type": "address"
        }
      ],
      "name": "BeaconUpgraded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "implementation",
          "type": "address"
        }
      ],
      "name": "Upgraded",
      "type": "event"
    },
    {
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    }
  ],
  "transactionHash": "0xabeb86250cfb0e4a5fe68538859f6a24d26cb2d889b288862e0088a606c950e6",
  "receipt": {
    "to": null,
    "from": "0x0F488C370708b4250A253df57193df2ff731ca3D",
    "contractAddress": "0xffAed760156D8C815F9071F4655E2eC816639fE5",
    "transactionIndex": 13,
    "gasUsed": "624704",
    "logsBloom": "0x00000004000000004000000000000000400000000000000000000000000000000000000010000100000000000000000000000800000000000000000040000000000000008000000000000008000002a00000000000000000000000000000000000000000020000000000000000000800000000000104000000000010000008000000020000000000000000000000000000000000000000000010000008000040000000080008000000000004000000000000000000000000001000000000000000000022080000000000000000000000020000000000000100000000000020000000000008000000000081000000000000000000000000010000000000000000",
    "blockHash": "0x6bde50d5f994528200e9b6d1c5dc7f2dd828b33bbeeb054005e68e1ba2ccf014",
    "transactionHash": "0xabeb86250cfb0e4a5fe68538859f6a24d26cb2d889b288862e0088a606c950e6",
    "logs": [
      {
        "transactionIndex": 13,
        "blockNumber": 10147906,
        "transactionHash": "0xabeb86250cfb0e4a5fe68538859f6a24d26cb2d889b288862e0088a606c950e6",
        "address": "0xffAed760156D8C815F9071F4655E2eC816639fE5",
        "topics": [
          "0xbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b",
          "0x000000000000000000000000d586442b20b00dfcb0e2476c0bb260f123189288"
        ],
        "data": "0x",
        "logIndex": 23,
        "blockHash": "0x6bde50d5f994528200e9b6d1c5dc7f2dd828b33bbeeb054005e68e1ba2ccf014"
      },
      {
        "transactionIndex": 13,
        "blockNumber": 10147906,
        "transactionHash": "0xabeb86250cfb0e4a5fe68538859f6a24d26cb2d889b288862e0088a606c950e6",
        "address": "0xffAed760156D8C815F9071F4655E2eC816639fE5",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x000000000000000000000000b3f5e20db0167d4a5b5c5daad6f1c76cc40cc52d"
        ],
        "data": "0x0000000000000000000000000000000000000000008eac0f891782a998000000",
        "logIndex": 24,
        "blockHash": "0x6bde50d5f994528200e9b6d1c5dc7f2dd828b33bbeeb054005e68e1ba2ccf014"
      },
      {
        "transactionIndex": 13,
        "blockNumber": 10147906,
        "transactionHash": "0xabeb86250cfb0e4a5fe68538859f6a24d26cb2d889b288862e0088a606c950e6",
        "address": "0xffAed760156D8C815F9071F4655E2eC816639fE5",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x0000000000000000000000006b3887eb6091cc705ffa6e32e22b5524b3a9bea4"
        ],
        "data": "0x0000000000000000000000000000000000000000015a7d4a4ceff42e28000000",
        "logIndex": 25,
        "blockHash": "0x6bde50d5f994528200e9b6d1c5dc7f2dd828b33bbeeb054005e68e1ba2ccf014"
      },
      {
        "transactionIndex": 13,
        "blockNumber": 10147906,
        "transactionHash": "0xabeb86250cfb0e4a5fe68538859f6a24d26cb2d889b288862e0088a606c950e6",
        "address": "0xffAed760156D8C815F9071F4655E2eC816639fE5",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x00000000000000000000000033ae0695fb3250f0788510b289d26309d4b8f939"
        ],
        "data": "0x000000000000000000000000000000000000000001461b91395a4f3a80000000",
        "logIndex": 26,
        "blockHash": "0x6bde50d5f994528200e9b6d1c5dc7f2dd828b33bbeeb054005e68e1ba2ccf014"
      },
      {
        "transactionIndex": 13,
        "blockNumber": 10147906,
        "transactionHash": "0xabeb86250cfb0e4a5fe68538859f6a24d26cb2d889b288862e0088a606c950e6",
        "address": "0xffAed760156D8C815F9071F4655E2eC816639fE5",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x000000000000000000000000f5d2f60663d83abf28969f2a5f501178d8d64baa"
        ],
        "data": "0x0000000000000000000000000000000000000000005186e44e5693cea0000000",
        "logIndex": 27,
        "blockHash": "0x6bde50d5f994528200e9b6d1c5dc7f2dd828b33bbeeb054005e68e1ba2ccf014"
      },
      {
        "transactionIndex": 13,
        "blockNumber": 10147906,
        "transactionHash": "0xabeb86250cfb0e4a5fe68538859f6a24d26cb2d889b288862e0088a606c950e6",
        "address": "0xffAed760156D8C815F9071F4655E2eC816639fE5",
        "topics": [
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x0000000000000000000000009f1660b7184bde8b8973c6618ac3d7d306e8a796"
        ],
        "data": "0x0000000000000000000000000000000000000000007a4a567581ddb5f0000000",
        "logIndex": 28,
        "blockHash": "0x6bde50d5f994528200e9b6d1c5dc7f2dd828b33bbeeb054005e68e1ba2ccf014"
      },
      {
        "transactionIndex": 13,
        "blockNumber": 10147906,
        "transactionHash": "0xabeb86250cfb0e4a5fe68538859f6a24d26cb2d889b288862e0088a606c950e6",
        "address": "0xffAed760156D8C815F9071F4655E2eC816639fE5",
        "topics": [
          "0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d",
          "0x0000000000000000000000000000000000000000000000000000000000000000",
          "0x0000000000000000000000000f488c370708b4250a253df57193df2ff731ca3d",
          "0x0000000000000000000000000f488c370708b4250a253df57193df2ff731ca3d"
        ],
        "data": "0x",
        "logIndex": 29,
        "blockHash": "0x6bde50d5f994528200e9b6d1c5dc7f2dd828b33bbeeb054005e68e1ba2ccf014"
      }
    ],
    "blockNumber": 10147906,
    "cumulativeGasUsed": "6945417",
    "status": 1,
    "byzantium": true
  },
  "args": [
    "0xD586442b20b00DFcb0E2476C0bB260F123189288",
    "0x0F488C370708b4250A253df57193df2ff731ca3D",
    "0xc4d66de8000000000000000000000000bb16550010ca6e7648a065a3da7ccff39cefcac5"
  ],
  "solcInputHash": "6ebfa7d59a7c02441dd7da44cc6ec8d6",
  "metadata": "{\"compiler\":{\"version\":\"0.8.11+commit.d7f03943\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"previousAdmin\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"newAdmin\",\"type\":\"address\"}],\"name\":\"AdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"beacon\",\"type\":\"address\"}],\"name\":\"BeaconUpgraded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"implementation\",\"type\":\"address\"}],\"name\":\"Upgraded\",\"type\":\"event\"},{\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"stateMutability\":\"payable\",\"type\":\"receive\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/TokenProxy.sol\":\"TokenProxy\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\nimport \\\"../Proxy.sol\\\";\\nimport \\\"./ERC1967Upgrade.sol\\\";\\n\\n/**\\n * @dev This contract implements an upgradeable proxy. It is upgradeable because calls are delegated to an\\n * implementation address that can be changed. This address is stored in storage in the location specified by\\n * https://eips.ethereum.org/EIPS/eip-1967[EIP1967], so that it doesn't conflict with the storage layout of the\\n * implementation behind the proxy.\\n */\\ncontract ERC1967Proxy is Proxy, ERC1967Upgrade {\\n    /**\\n     * @dev Initializes the upgradeable proxy with an initial implementation specified by `_logic`.\\n     *\\n     * If `_data` is nonempty, it's used as data in a delegate call to `_logic`. This will typically be an encoded\\n     * function call, and allows initializating the storage of the proxy like a Solidity constructor.\\n     */\\n    constructor(address _logic, bytes memory _data) payable {\\n        assert(_IMPLEMENTATION_SLOT == bytes32(uint256(keccak256(\\\"eip1967.proxy.implementation\\\")) - 1));\\n        _upgradeToAndCall(_logic, _data, false);\\n    }\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     */\\n    function _implementation() internal view virtual override returns (address impl) {\\n        return ERC1967Upgrade._getImplementation();\\n    }\\n}\\n\",\"keccak256\":\"0xca2eb23a188f213d914fad982985d07e491dbc9960a387d4469bfce5c48911b1\",\"license\":\"MIT\"},\"@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.2;\\n\\nimport \\\"../beacon/IBeacon.sol\\\";\\nimport \\\"../../utils/Address.sol\\\";\\nimport \\\"../../utils/StorageSlot.sol\\\";\\n\\n/**\\n * @dev This abstract contract provides getters and event emitting update functions for\\n * https://eips.ethereum.org/EIPS/eip-1967[EIP1967] slots.\\n *\\n * _Available since v4.1._\\n *\\n * @custom:oz-upgrades-unsafe-allow delegatecall\\n */\\nabstract contract ERC1967Upgrade {\\n    // This is the keccak-256 hash of \\\"eip1967.proxy.rollback\\\" subtracted by 1\\n    bytes32 private constant _ROLLBACK_SLOT = 0x4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143;\\n\\n    /**\\n     * @dev Storage slot with the address of the current implementation.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.implementation\\\" subtracted by 1, and is\\n     * validated in the constructor.\\n     */\\n    bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n\\n    /**\\n     * @dev Emitted when the implementation is upgraded.\\n     */\\n    event Upgraded(address indexed implementation);\\n\\n    /**\\n     * @dev Returns the current implementation address.\\n     */\\n    function _getImplementation() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the EIP1967 implementation slot.\\n     */\\n    function _setImplementation(address newImplementation) private {\\n        require(Address.isContract(newImplementation), \\\"ERC1967: new implementation is not a contract\\\");\\n        StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\\n    }\\n\\n    /**\\n     * @dev Perform implementation upgrade\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function _upgradeTo(address newImplementation) internal {\\n        _setImplementation(newImplementation);\\n        emit Upgraded(newImplementation);\\n    }\\n\\n    /**\\n     * @dev Perform implementation upgrade with additional setup call.\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function _upgradeToAndCall(\\n        address newImplementation,\\n        bytes memory data,\\n        bool forceCall\\n    ) internal {\\n        _upgradeTo(newImplementation);\\n        if (data.length > 0 || forceCall) {\\n            Address.functionDelegateCall(newImplementation, data);\\n        }\\n    }\\n\\n    /**\\n     * @dev Perform implementation upgrade with security checks for UUPS proxies, and additional setup call.\\n     *\\n     * Emits an {Upgraded} event.\\n     */\\n    function _upgradeToAndCallSecure(\\n        address newImplementation,\\n        bytes memory data,\\n        bool forceCall\\n    ) internal {\\n        address oldImplementation = _getImplementation();\\n\\n        // Initial upgrade and setup call\\n        _setImplementation(newImplementation);\\n        if (data.length > 0 || forceCall) {\\n            Address.functionDelegateCall(newImplementation, data);\\n        }\\n\\n        // Perform rollback test if not already in progress\\n        StorageSlot.BooleanSlot storage rollbackTesting = StorageSlot.getBooleanSlot(_ROLLBACK_SLOT);\\n        if (!rollbackTesting.value) {\\n            // Trigger rollback using upgradeTo from the new implementation\\n            rollbackTesting.value = true;\\n            Address.functionDelegateCall(\\n                newImplementation,\\n                abi.encodeWithSignature(\\\"upgradeTo(address)\\\", oldImplementation)\\n            );\\n            rollbackTesting.value = false;\\n            // Check rollback was effective\\n            require(oldImplementation == _getImplementation(), \\\"ERC1967Upgrade: upgrade breaks further upgrades\\\");\\n            // Finally reset to the new implementation and log the upgrade\\n            _upgradeTo(newImplementation);\\n        }\\n    }\\n\\n    /**\\n     * @dev Storage slot with the admin of the contract.\\n     * This is the keccak-256 hash of \\\"eip1967.proxy.admin\\\" subtracted by 1, and is\\n     * validated in the constructor.\\n     */\\n    bytes32 internal constant _ADMIN_SLOT = 0xb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103;\\n\\n    /**\\n     * @dev Emitted when the admin account has changed.\\n     */\\n    event AdminChanged(address previousAdmin, address newAdmin);\\n\\n    /**\\n     * @dev Returns the current admin.\\n     */\\n    function _getAdmin() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(_ADMIN_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new address in the EIP1967 admin slot.\\n     */\\n    function _setAdmin(address newAdmin) private {\\n        require(newAdmin != address(0), \\\"ERC1967: new admin is the zero address\\\");\\n        StorageSlot.getAddressSlot(_ADMIN_SLOT).value = newAdmin;\\n    }\\n\\n    /**\\n     * @dev Changes the admin of the proxy.\\n     *\\n     * Emits an {AdminChanged} event.\\n     */\\n    function _changeAdmin(address newAdmin) internal {\\n        emit AdminChanged(_getAdmin(), newAdmin);\\n        _setAdmin(newAdmin);\\n    }\\n\\n    /**\\n     * @dev The storage slot of the UpgradeableBeacon contract which defines the implementation for this proxy.\\n     * This is bytes32(uint256(keccak256('eip1967.proxy.beacon')) - 1)) and is validated in the constructor.\\n     */\\n    bytes32 internal constant _BEACON_SLOT = 0xa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d50;\\n\\n    /**\\n     * @dev Emitted when the beacon is upgraded.\\n     */\\n    event BeaconUpgraded(address indexed beacon);\\n\\n    /**\\n     * @dev Returns the current beacon.\\n     */\\n    function _getBeacon() internal view returns (address) {\\n        return StorageSlot.getAddressSlot(_BEACON_SLOT).value;\\n    }\\n\\n    /**\\n     * @dev Stores a new beacon in the EIP1967 beacon slot.\\n     */\\n    function _setBeacon(address newBeacon) private {\\n        require(Address.isContract(newBeacon), \\\"ERC1967: new beacon is not a contract\\\");\\n        require(\\n            Address.isContract(IBeacon(newBeacon).implementation()),\\n            \\\"ERC1967: beacon implementation is not a contract\\\"\\n        );\\n        StorageSlot.getAddressSlot(_BEACON_SLOT).value = newBeacon;\\n    }\\n\\n    /**\\n     * @dev Perform beacon upgrade with additional setup call. Note: This upgrades the address of the beacon, it does\\n     * not upgrade the implementation contained in the beacon (see {UpgradeableBeacon-_setImplementation} for that).\\n     *\\n     * Emits a {BeaconUpgraded} event.\\n     */\\n    function _upgradeBeaconToAndCall(\\n        address newBeacon,\\n        bytes memory data,\\n        bool forceCall\\n    ) internal {\\n        _setBeacon(newBeacon);\\n        emit BeaconUpgraded(newBeacon);\\n        if (data.length > 0 || forceCall) {\\n            Address.functionDelegateCall(IBeacon(newBeacon).implementation(), data);\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xcbccf806d646bd9e2594650917208245d45998b887d5fc914de424247f5f9f9d\",\"license\":\"MIT\"},\"@openzeppelin/contracts/proxy/Proxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev This abstract contract provides a fallback function that delegates all calls to another contract using the EVM\\n * instruction `delegatecall`. We refer to the second contract as the _implementation_ behind the proxy, and it has to\\n * be specified by overriding the virtual {_implementation} function.\\n *\\n * Additionally, delegation to the implementation can be triggered manually through the {_fallback} function, or to a\\n * different contract through the {_delegate} function.\\n *\\n * The success and return data of the delegated call will be returned back to the caller of the proxy.\\n */\\nabstract contract Proxy {\\n    /**\\n     * @dev Delegates the current call to `implementation`.\\n     *\\n     * This function does not return to its internall call site, it will return directly to the external caller.\\n     */\\n    function _delegate(address implementation) internal virtual {\\n        assembly {\\n            // Copy msg.data. We take full control of memory in this inline assembly\\n            // block because it will not return to Solidity code. We overwrite the\\n            // Solidity scratch pad at memory position 0.\\n            calldatacopy(0, 0, calldatasize())\\n\\n            // Call the implementation.\\n            // out and outsize are 0 because we don't know the size yet.\\n            let result := delegatecall(gas(), implementation, 0, calldatasize(), 0, 0)\\n\\n            // Copy the returned data.\\n            returndatacopy(0, 0, returndatasize())\\n\\n            switch result\\n            // delegatecall returns 0 on error.\\n            case 0 {\\n                revert(0, returndatasize())\\n            }\\n            default {\\n                return(0, returndatasize())\\n            }\\n        }\\n    }\\n\\n    /**\\n     * @dev This is a virtual function that should be overriden so it returns the address to which the fallback function\\n     * and {_fallback} should delegate.\\n     */\\n    function _implementation() internal view virtual returns (address);\\n\\n    /**\\n     * @dev Delegates the current call to the address returned by `_implementation()`.\\n     *\\n     * This function does not return to its internall call site, it will return directly to the external caller.\\n     */\\n    function _fallback() internal virtual {\\n        _beforeFallback();\\n        _delegate(_implementation());\\n    }\\n\\n    /**\\n     * @dev Fallback function that delegates calls to the address returned by `_implementation()`. Will run if no other\\n     * function in the contract matches the call data.\\n     */\\n    fallback() external payable virtual {\\n        _fallback();\\n    }\\n\\n    /**\\n     * @dev Fallback function that delegates calls to the address returned by `_implementation()`. Will run if call data\\n     * is empty.\\n     */\\n    receive() external payable virtual {\\n        _fallback();\\n    }\\n\\n    /**\\n     * @dev Hook that is called before falling back to the implementation. Can happen as part of a manual `_fallback`\\n     * call, or as part of the Solidity `fallback` or `receive` functions.\\n     *\\n     * If overriden should call `super._beforeFallback()`.\\n     */\\n    function _beforeFallback() internal virtual {}\\n}\\n\",\"keccak256\":\"0x8ddea9f930f26e588ea606f44c90d2623560c908e38614a03a4ca78aea8f9202\",\"license\":\"MIT\"},\"@openzeppelin/contracts/proxy/beacon/IBeacon.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev This is the interface that {BeaconProxy} expects of its beacon.\\n */\\ninterface IBeacon {\\n    /**\\n     * @dev Must return an address that can be used as a delegate call target.\\n     *\\n     * {BeaconProxy} will check that this address is a contract.\\n     */\\n    function implementation() external view returns (address);\\n}\\n\",\"keccak256\":\"0x5615339d191e77be7e46319b67856f9355786f705b7b3c4a7237ab70c1864ab1\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize, which returns 0 for contracts in\\n        // construction, since the code is only stored at the end of the\\n        // constructor execution.\\n\\n        uint256 size;\\n        assembly {\\n            size := extcodesize(account)\\n        }\\n        return size > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\\"\\\");\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCall(target, data, \\\"Address: low-level call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\n        require(isContract(target), \\\"Address: call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        require(isContract(target), \\\"Address: static call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\\"Address: low-level delegate call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(isContract(target), \\\"Address: delegate call to non-contract\\\");\\n\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verifies that a low level call was successful, and revert if it wasn't, either by bubbling the\\n     * revert reason using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x3336baae5cf23e94274d75336e2d412193be508504aee185e61dc7d58cd05c8a\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/StorageSlot.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Library for reading and writing primitive types to specific storage slots.\\n *\\n * Storage slots are often used to avoid storage conflict when dealing with upgradeable contracts.\\n * This library helps with reading and writing to such slots without the need for inline assembly.\\n *\\n * The functions in this library return Slot structs that contain a `value` member that can be used to read or write.\\n *\\n * Example usage to set ERC1967 implementation slot:\\n * ```\\n * contract ERC1967 {\\n *     bytes32 internal constant _IMPLEMENTATION_SLOT = 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc;\\n *\\n *     function _getImplementation() internal view returns (address) {\\n *         return StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value;\\n *     }\\n *\\n *     function _setImplementation(address newImplementation) internal {\\n *         require(Address.isContract(newImplementation), \\\"ERC1967: new implementation is not a contract\\\");\\n *         StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value = newImplementation;\\n *     }\\n * }\\n * ```\\n *\\n * _Available since v4.1 for `address`, `bool`, `bytes32`, and `uint256`._\\n */\\nlibrary StorageSlot {\\n    struct AddressSlot {\\n        address value;\\n    }\\n\\n    struct BooleanSlot {\\n        bool value;\\n    }\\n\\n    struct Bytes32Slot {\\n        bytes32 value;\\n    }\\n\\n    struct Uint256Slot {\\n        uint256 value;\\n    }\\n\\n    /**\\n     * @dev Returns an `AddressSlot` with member `value` located at `slot`.\\n     */\\n    function getAddressSlot(bytes32 slot) internal pure returns (AddressSlot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `BooleanSlot` with member `value` located at `slot`.\\n     */\\n    function getBooleanSlot(bytes32 slot) internal pure returns (BooleanSlot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `Bytes32Slot` with member `value` located at `slot`.\\n     */\\n    function getBytes32Slot(bytes32 slot) internal pure returns (Bytes32Slot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n\\n    /**\\n     * @dev Returns an `Uint256Slot` with member `value` located at `slot`.\\n     */\\n    function getUint256Slot(bytes32 slot) internal pure returns (Uint256Slot storage r) {\\n        assembly {\\n            r.slot := slot\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x5d15d280d1f868f59a8264dc73f7ea8c51f10d78aac864b2f2ad29412d187ff5\",\"license\":\"MIT\"},\"contracts/TokenProxy.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity 0.8.11;\\n\\nimport \\\"@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol\\\";\\n\\n/*\\n*********   \\u2591\\u2588\\u2588\\u2588\\u2588\\u2588\\u2557\\u2591\\u2003\\u2003\\u2588\\u2588\\u2588\\u2557\\u2591\\u2591\\u2588\\u2588\\u2557\\u2003\\u2003\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2557\\u2003\\u2003\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2557   *********\\n*********   \\u2588\\u2588\\u2554\\u2550\\u2550\\u2588\\u2588\\u2557\\u2003\\u2003\\u2588\\u2588\\u2588\\u2588\\u2557\\u2591\\u2588\\u2588\\u2551\\u2003\\u2003\\u2588\\u2588\\u2554\\u2550\\u2550\\u2550\\u2550\\u255d\\u2003\\u2003\\u255a\\u2550\\u2550\\u2588\\u2588\\u2554\\u2550\\u2550\\u255d   *********\\n*********   \\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2588\\u2551\\u2003\\u2003\\u2588\\u2588\\u2554\\u2588\\u2588\\u2557\\u2588\\u2588\\u2551\\u2003\\u2003\\u2588\\u2588\\u2588\\u2588\\u2588\\u2557\\u2591\\u2591\\u2003\\u2003\\u2591\\u2591\\u2591\\u2588\\u2588\\u2551\\u2591\\u2591\\u2591   *********\\n*********   \\u2588\\u2588\\u2554\\u2550\\u2550\\u2588\\u2588\\u2551\\u2003\\u2003\\u2588\\u2588\\u2551\\u255a\\u2588\\u2588\\u2588\\u2588\\u2551\\u2003\\u2003\\u2588\\u2588\\u2554\\u2550\\u2550\\u255d\\u2591\\u2591\\u2003\\u2003\\u2591\\u2591\\u2591\\u2588\\u2588\\u2551\\u2591\\u2591\\u2591   *********\\n*********   \\u2588\\u2588\\u2551\\u2591\\u2591\\u2588\\u2588\\u2551\\u2003\\u2003\\u2588\\u2588\\u2551\\u2591\\u255a\\u2588\\u2588\\u2588\\u2551\\u2003\\u2003\\u2588\\u2588\\u2551\\u2591\\u2591\\u2591\\u2591\\u2591\\u2003\\u2003\\u2591\\u2591\\u2591\\u2588\\u2588\\u2551\\u2591\\u2591\\u2591   *********\\n*********   \\u255a\\u2550\\u255d\\u2591\\u2591\\u255a\\u2550\\u255d\\u2003\\u2003\\u255a\\u2550\\u255d\\u2591\\u2591\\u255a\\u2550\\u2550\\u255d\\u2003\\u2003\\u255a\\u2550\\u255d\\u2591\\u2591\\u2591\\u2591\\u2591\\u2003\\u2003\\u2591\\u2591\\u2591\\u255a\\u2550\\u255d\\u2591\\u2591\\u2591   *********\\n*/ \\n\\n\\ncontract TokenProxy is ERC1967Proxy {\\n    constructor(\\n        address implementation,\\n        address owner,\\n        bytes memory data\\n    ) ERC1967Proxy(implementation, data) {}\\n}\",\"keccak256\":\"0xb03a8610bd5d4b7adb20d1397e07298925fcbced45309c70dbae5bff5a6bf2ce\",\"license\":\"MIT\"}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b506040516107bd3803806107bd83398101604081905261002f91610365565b828161005c60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd610435565b600080516020610776833981519152146100785761007861045a565b6100848282600061008e565b50505050506104bf565b610097836100c4565b6000825111806100a45750805b156100bf576100bd838361010460201b6100291760201c565b505b505050565b6100cd81610130565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606101298383604051806060016040528060278152602001610796602791396101f0565b9392505050565b610143816102c560201b6100551760201c565b6101aa5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084015b60405180910390fd5b806101cf60008051602061077683398151915260001b6102cb60201b61005b1760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6060833b61024f5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016101a1565b600080856001600160a01b03168560405161026a9190610470565b600060405180830381855af49150503d80600081146102a5576040519150601f19603f3d011682016040523d82523d6000602084013e6102aa565b606091505b5090925090506102bb8282866102ce565b9695505050505050565b3b151590565b90565b606083156102dd575081610129565b8251156102ed5782518084602001fd5b8160405162461bcd60e51b81526004016101a1919061048c565b80516001600160a01b038116811461031e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561035457818101518382015260200161033c565b838111156100bd5750506000910152565b60008060006060848603121561037a57600080fd5b61038384610307565b925061039160208501610307565b60408501519092506001600160401b03808211156103ae57600080fd5b818601915086601f8301126103c257600080fd5b8151818111156103d4576103d4610323565b604051601f8201601f19908116603f011681019083821181831017156103fc576103fc610323565b8160405282815289602084870101111561041557600080fd5b610426836020830160208801610339565b80955050505050509250925092565b60008282101561045557634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052600160045260246000fd5b60008251610482818460208701610339565b9190910192915050565b60208152600082518060208401526104ab816040850160208701610339565b601f01601f19169190910160400192915050565b6102a8806104ce6000396000f3fe60806040523661001357610011610017565b005b6100115b61002761002261005e565b610096565b565b606061004e838360405180606001604052806027815260200161024c602791396100ba565b9392505050565b3b151590565b90565b60006100917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100b5573d6000f35b3d6000fd5b6060833b61011e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013991906101fc565b600060405180830381855af49150503d8060008114610174576040519150601f19603f3d011682016040523d82523d6000602084013e610179565b606091505b5091509150610189828286610193565b9695505050505050565b606083156101a257508161004e565b8251156101b25782518084602001fd5b8160405162461bcd60e51b81526004016101159190610218565b60005b838110156101e75781810151838201526020016101cf565b838111156101f6576000848401525b50505050565b6000825161020e8184602087016101cc565b9190910192915050565b60208152600082518060208401526102378160408501602087016101cc565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a9dc5af696aa3770cad2e6f2df9d772a09fe97f92dbfa5e38467851b7761323d64736f6c634300080b0033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564",
  "deployedBytecode": "0x60806040523661001357610011610017565b005b6100115b61002761002261005e565b610096565b565b606061004e838360405180606001604052806027815260200161024c602791396100ba565b9392505050565b3b151590565b90565b60006100917f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b905090565b3660008037600080366000845af43d6000803e8080156100b5573d6000f35b3d6000fd5b6060833b61011e5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161013991906101fc565b600060405180830381855af49150503d8060008114610174576040519150601f19603f3d011682016040523d82523d6000602084013e610179565b606091505b5091509150610189828286610193565b9695505050505050565b606083156101a257508161004e565b8251156101b25782518084602001fd5b8160405162461bcd60e51b81526004016101159190610218565b60005b838110156101e75781810151838201526020016101cf565b838111156101f6576000848401525b50505050565b6000825161020e8184602087016101cc565b9190910192915050565b60208152600082518060208401526102378160408501602087016101cc565b601f01601f1916919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220a9dc5af696aa3770cad2e6f2df9d772a09fe97f92dbfa5e38467851b7761323d64736f6c634300080b0033",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  },
  "storageLayout": {
    "storage": [],
    "types": null
  }
}