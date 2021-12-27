/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Listing, ListingInterface } from "../Listing";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_listingId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_optionId",
        type: "uint256",
      },
    ],
    name: "claimReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dailyPayment",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "extendOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "listingId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "options",
    outputs: [
      {
        internalType: "uint256",
        name: "_totalStake",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isSet",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ownership",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_optionId",
        type: "uint256",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardPool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_optionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reward",
        type: "uint256",
      },
    ],
    name: "setupOptionReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakings",
    outputs: [
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_active",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalStake",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_optionId",
        type: "uint256",
      },
    ],
    name: "unregister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_dailyPayment",
        type: "uint256",
      },
    ],
    name: "updateDailyPayment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "updateOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_validator",
        type: "address",
      },
    ],
    name: "updateValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "updateValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_worker",
        type: "address",
      },
    ],
    name: "updateWorker",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_listingId",
        type: "uint256",
      },
    ],
    name: "updatelistingId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "validator",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "workers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051620016dd380380620016dd83398101604081905261003191610095565b600080546001600160a01b039384166001600160a01b0319918216179091556002805494909316938116939093179091556001554260045560038054909116331790556100d1565b80516001600160a01b038116811461009057600080fd5b919050565b6000806000606084860312156100aa57600080fd5b6100b384610079565b92506100c160208501610079565b9150604084015190509250925092565b6115fc80620000e16000396000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80635d03147a116100c35780638da5cb5b1161007c5780638da5cb5b146103345780639405dfdd14610347578063a02b161e14610350578063a5edfb5314610363578063ae169a5014610376578063d66d6c101461038957600080fd5b80635d03147a146102e0578063635b2770146102e957806366666aa9146102fc57806380e4cc9d14610305578063880cdc31146103185780638b0e9f3f1461032b57600080fd5b8063409e220511610115578063409e2205146102595780634338fbaa1461028b578063506f50bc1461029457806354a49902146102a757806355a373d6146102ba578063573c0bd3146102cd57600080fd5b8063103a62ba1461015d5780632a421332146101725780632e1a7d4d146101d15780633a5381b5146101e45780633fa4f2451461020f5780634048a25714610226575b600080fd5b61017061016b3660046113d3565b61039c565b005b6101af610180366004611408565b600960209081526000928352604080842090915290825290208054600182015460029092015490919060ff1683565b6040805193845260208401929092521515908201526060015b60405180910390f35b6101706101df3660046113d3565b6103d4565b6002546101f7906001600160a01b031681565b6040516001600160a01b0390911681526020016101c8565b61021860055481565b6040519081526020016101c8565b610249610234366004611434565b60076020526000908152604090205460ff1681565b60405190151581526020016101c8565b6101af6102673660046113d3565b60086020526000908152604090208054600182015460029092015490919060ff1683565b61021860065481565b6101706102a23660046113d3565b610609565b6101706102b536600461144f565b610638565b6003546101f7906001600160a01b031681565b6101706102db3660046113d3565b6106db565b61021860045481565b6101706102f7366004611434565b61070a565b610218600a5481565b610170610313366004611434565b610756565b610170610326366004611434565b610861565b610218600b5481565b6000546101f7906001600160a01b031681565b61021860015481565b61017061035e3660046113d3565b6108f7565b6101706103713660046113d3565b610adb565b6101706103843660046113d3565b610cdf565b61017061039736600461144f565b610f44565b6002546001600160a01b031633146103cf5760405162461bcd60e51b81526004016103c690611471565b60405180910390fd5b600655565b6000546001600160a01b031633146103fe5760405162461bcd60e51b81526004016103c690611471565b4260045410156104505760405162461bcd60e51b815260206004820152601b60248201527f4c697374696e673a204f776e657273686970206578706972656421000000000060448201526064016103c6565b60065460009061046d90610467846201518061129b565b906112ae565b90506000610486826004546112ba90919063ffffffff16565b9050428110156104d85760405162461bcd60e51b815260206004820152601860248201527f4c697374696e673a20496e76616c696420616d6f756e7421000000000000000060448201526064016103c6565b60035460405163e9dc65bb60e01b815233600482015260248101859052600060448201819052916001600160a01b03169063e9dc65bb906064016020604051808303816000875af1158015610531573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061055591906114ab565b9050806105745760405162461bcd60e51b81526004016103c6906114c6565b600a5461058190856112ba565b600a5560035460005460048054604051637602f0f160e01b81526001600160a01b039384169281019290925260248201889052604482015260648101859052911690637602f0f190608401600060405180830381600087803b1580156105e657600080fd5b505af11580156105fa573d6000803e3d6000fd5b50505060049290925550505050565b6002546001600160a01b031633146106335760405162461bcd60e51b81526004016103c690611471565b600155565b6002546001600160a01b031633146106625760405162461bcd60e51b81526004016103c690611471565b60648111156106b35760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e76616c6964207265776172642076616c756500000060448201526064016103c6565b600091825260086020526040909120600180820192909255600201805460ff19169091179055565b6002546001600160a01b031633146107055760405162461bcd60e51b81526004016103c690611471565b600555565b6002546001600160a01b031633146107345760405162461bcd60e51b81526004016103c690611471565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031633146107805760405162461bcd60e51b81526004016103c690611471565b4260045410156107d25760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a204f776e657273686970206578706972656400000000000060448201526064016103c6565b6001600160a01b0381811660008181526007602052604090819020805460ff8082161560ff19909216821790925560035492516333be8f3d60e21b8152600481019490945216151560248301529091169063cefa3cf490604401600060405180830381600087803b15801561084657600080fd5b505af115801561085a573d6000803e3d6000fd5b5050505050565b6002546001600160a01b0316331461088b5760405162461bcd60e51b81526004016103c690611471565b42600454106108d55760405162461bcd60e51b81526020600482015260166024820152754f776e657273686970206e6f7420657870697265642160501b60448201526064016103c6565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b60035460405163e6d50cd760e01b81523060048201526000916001600160a01b03169063e6d50cd7906024016040805180830381865afa15801561093f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096391906114fd565b915050806109b35760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a20496e616374697665206c697374696e672100000000000060448201526064016103c6565b60008281526009602090815260408083203384529091529020600281015460ff16610a1b5760405162461bcd60e51b81526020600482015260186024820152774c697374696e673a2052656769737465722066697273742160401b60448201526064016103c6565b6001810154600084815260086020526040902054610a38916112ba565b6000848152600860205260409020556001810154600b54610a58916112ba565b600b5560006001820181905560028201805460ff1916905581556003546040516387d4535160e01b8152336004820152602481018590526001600160a01b03909116906387d4535190604401600060405180830381600087803b158015610abe57600080fd5b505af1158015610ad2573d6000803e3d6000fd5b50505050505050565b6000546001600160a01b0316331480610af5575042600454105b610b115760405162461bcd60e51b81526004016103c690611471565b60035460405163e9dc65bb60e01b815233600482015260248101839052600160448201526000916001600160a01b03169063e9dc65bb906064016020604051808303816000875af1158015610b6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b8e91906114ab565b905080610bad5760405162461bcd60e51b81526004016103c6906114c6565b600654821015610bff5760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a20496e73756666696369656e7420616d6f756e742100000060448201526064016103c6565b6004546000546001600160a01b031642821015610c2c57600080546001600160a01b031916331790554291505b600a54610c3990856112c6565b600a55600654610c5b90610c5490610467876201518061129b565b83906112c6565b600481815560035460005460405163373b49cb60e11b81526001600160a01b038681169482019490945290831660248201526044810186905260648101939093521690636e76939690608401600060405180830381600087803b158015610cc157600080fd5b505af1158015610cd5573d6000803e3d6000fd5b5050505050505050565b60008181526009602090815260408083203384529091529020600281015460ff16610d475760405162461bcd60e51b81526020600482015260186024820152774c697374696e673a2052656769737465722066697273742160401b60448201526064016103c6565b6003546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610d90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610db49190611527565b90508160010154811015610e0a5760405162461bcd60e51b815260206004820152601e60248201527f4c697374696e673a20496e73756666696369656e742062616c616e636521000060448201526064016103c6565b6000610e1684846112d2565b60035460405163e9dc65bb60e01b8152336004820152602481018390526000604482018190529293506001600160a01b039091169063e9dc65bb906064016020604051808303816000875af1158015610e73573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e9791906114ab565b905080610eb65760405162461bcd60e51b81526004016103c6906114c6565b600354845460405163a9ae143160e01b81523360048201526024810185905260448101919091524260648201526001600160a01b039091169063a9ae143190608401600060405180830381600087803b158015610f1257600080fd5b505af1158015610f26573d6000803e3d6000fd5b50504286555050600a54610f3a90836112ba565b600a555050505050565b60035460405163e6d50cd760e01b81523060048201526000916001600160a01b03169063e6d50cd7906024016040805180830381865afa158015610f8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb091906114fd565b915050806110005760405162461bcd60e51b815260206004820152601a60248201527f4c697374696e673a20496e616374697665206c697374696e672100000000000060448201526064016103c6565b60008281526008602052604090206002015460ff166110615760405162461bcd60e51b815260206004820152601d60248201527f4c697374696e673a204f7074696f6e206e6f7420617661696c61626c6500000060448201526064016103c6565b6000828152600960209081526040808320338452909152902060018101548414156110ce5760405162461bcd60e51b815260206004820152601960248201527f4c697374696e673a205374616b6520756e6368616e676564210000000000000060448201526064016103c6565b6003546040516370a0823160e01b81523360048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015611117573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061113b9190611527565b90506001820154851160008161115f57600184015461115a90886112ba565b61116f565b600184015461116f9088906112ba565b905081156111c857600184015461118690826112c6565b60018501556000868152600860205260409020546111a490826112c6565b600087815260086020526040902055600b546111c090826112c6565b600b55611215565b60018401546111d790826112ba565b60018501556000868152600860205260409020546111f590826112ba565b600087815260086020526040902055600b5461121190826112ba565b600b555b42845560028401805460ff19166001179055600354604051634c2a207560e01b815233600482015260248101899052604481018890526001600160a01b0390911690634c2a207590606401600060405180830381600087803b15801561127a57600080fd5b505af115801561128e573d6000803e3d6000fd5b5050505050505050505050565b60006112a78284611556565b9392505050565b60006112a78284611575565b60006112a78284611597565b60006112a782846115ae565b6000806112f16005546104676064600b5461129b90919063ffffffff16565b90506056811115611300575060565b426004541080156113115750603281115b1561131a575060325b600061133660646104678460065461129b90919063ffffffff16565b60008681526008602090815260408083208151606081018352815480825260018084015495830186905260029093015460ff1615159382019390935290890154949550936113999261046791906113939060649084908a9061129b565b9061129b565b90506000620151808760000154426113b19190611597565b6113bb9190611575565b90506113c7828261129b565b98975050505050505050565b6000602082840312156113e557600080fd5b5035919050565b80356001600160a01b038116811461140357600080fd5b919050565b6000806040838503121561141b57600080fd5b8235915061142b602084016113ec565b90509250929050565b60006020828403121561144657600080fd5b6112a7826113ec565b6000806040838503121561146257600080fd5b50508035926020909101359150565b60208082526010908201526f4c697374696e673a20556e617574682160801b604082015260600190565b8051801515811461140357600080fd5b6000602082840312156114bd57600080fd5b6112a78261149b565b6020808252601e908201527f4c697374696e673a20556e7375636365737366756c20617474656d7074210000604082015260600190565b6000806040838503121561151057600080fd5b6115198361149b565b915061142b6020840161149b565b60006020828403121561153957600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561157057611570611540565b500290565b60008261159257634e487b7160e01b600052601260045260246000fd5b500490565b6000828210156115a9576115a9611540565b500390565b600082198211156115c1576115c1611540565b50019056fea2646970667358221220fa551e3226f58bbf9c54618623b2a76544061716f9abeb9659e3cd77e47e495064736f6c634300080a0033";

export class Listing__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _validator: string,
    _owner: string,
    _listingId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Listing> {
    return super.deploy(
      _validator,
      _owner,
      _listingId,
      overrides || {}
    ) as Promise<Listing>;
  }
  getDeployTransaction(
    _validator: string,
    _owner: string,
    _listingId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _validator,
      _owner,
      _listingId,
      overrides || {}
    );
  }
  attach(address: string): Listing {
    return super.attach(address) as Listing;
  }
  connect(signer: Signer): Listing__factory {
    return super.connect(signer) as Listing__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ListingInterface {
    return new utils.Interface(_abi) as ListingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Listing {
    return new Contract(address, _abi, signerOrProvider) as Listing;
  }
}
