/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface ListingStorageInterface extends ethers.utils.Interface {
  functions: {
    "dailyPayment()": FunctionFragment;
    "listingId()": FunctionFragment;
    "options(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "ownership()": FunctionFragment;
    "setupOptionReward(uint256,uint256)": FunctionFragment;
    "tokenContract()": FunctionFragment;
    "updateDailyPayment(uint256)": FunctionFragment;
    "updateOwner(address)": FunctionFragment;
    "updateValidator(address)": FunctionFragment;
    "updateValue(uint256)": FunctionFragment;
    "updatelistingId(uint256)": FunctionFragment;
    "validator()": FunctionFragment;
    "value()": FunctionFragment;
    "workers(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "dailyPayment",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "listingId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "options",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "ownership", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setupOptionReward",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateDailyPayment",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "updateOwner", values: [string]): string;
  encodeFunctionData(
    functionFragment: "updateValidator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updatelistingId",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "validator", values?: undefined): string;
  encodeFunctionData(functionFragment: "value", values?: undefined): string;
  encodeFunctionData(functionFragment: "workers", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "dailyPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "listingId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "options", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownership", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setupOptionReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDailyPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatelistingId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validator", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "value", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "workers", data: BytesLike): Result;

  events: {};
}

export class ListingStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ListingStorageInterface;

  functions: {
    dailyPayment(overrides?: CallOverrides): Promise<[BigNumber]>;

    listingId(overrides?: CallOverrides): Promise<[BigNumber]>;

    options(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        _totalStake: BigNumber;
        _reward: BigNumber;
        _isSet: boolean;
      }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    ownership(overrides?: CallOverrides): Promise<[BigNumber]>;

    setupOptionReward(
      _optionId: BigNumberish,
      _reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenContract(overrides?: CallOverrides): Promise<[string]>;

    updateDailyPayment(
      _dailyPayment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateValidator(
      _validator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateValue(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updatelistingId(
      _listingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    validator(overrides?: CallOverrides): Promise<[string]>;

    value(overrides?: CallOverrides): Promise<[BigNumber]>;

    workers(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  dailyPayment(overrides?: CallOverrides): Promise<BigNumber>;

  listingId(overrides?: CallOverrides): Promise<BigNumber>;

  options(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, boolean] & {
      _totalStake: BigNumber;
      _reward: BigNumber;
      _isSet: boolean;
    }
  >;

  owner(overrides?: CallOverrides): Promise<string>;

  ownership(overrides?: CallOverrides): Promise<BigNumber>;

  setupOptionReward(
    _optionId: BigNumberish,
    _reward: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenContract(overrides?: CallOverrides): Promise<string>;

  updateDailyPayment(
    _dailyPayment: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateOwner(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateValidator(
    _validator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateValue(
    _value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updatelistingId(
    _listingId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  validator(overrides?: CallOverrides): Promise<string>;

  value(overrides?: CallOverrides): Promise<BigNumber>;

  workers(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    dailyPayment(overrides?: CallOverrides): Promise<BigNumber>;

    listingId(overrides?: CallOverrides): Promise<BigNumber>;

    options(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        _totalStake: BigNumber;
        _reward: BigNumber;
        _isSet: boolean;
      }
    >;

    owner(overrides?: CallOverrides): Promise<string>;

    ownership(overrides?: CallOverrides): Promise<BigNumber>;

    setupOptionReward(
      _optionId: BigNumberish,
      _reward: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenContract(overrides?: CallOverrides): Promise<string>;

    updateDailyPayment(
      _dailyPayment: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;

    updateValidator(
      _validator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateValue(_value: BigNumberish, overrides?: CallOverrides): Promise<void>;

    updatelistingId(
      _listingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    validator(overrides?: CallOverrides): Promise<string>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    workers(arg0: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    dailyPayment(overrides?: CallOverrides): Promise<BigNumber>;

    listingId(overrides?: CallOverrides): Promise<BigNumber>;

    options(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    ownership(overrides?: CallOverrides): Promise<BigNumber>;

    setupOptionReward(
      _optionId: BigNumberish,
      _reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenContract(overrides?: CallOverrides): Promise<BigNumber>;

    updateDailyPayment(
      _dailyPayment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateValidator(
      _validator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateValue(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updatelistingId(
      _listingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    validator(overrides?: CallOverrides): Promise<BigNumber>;

    value(overrides?: CallOverrides): Promise<BigNumber>;

    workers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    dailyPayment(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listingId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    options(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownership(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setupOptionReward(
      _optionId: BigNumberish,
      _reward: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateDailyPayment(
      _dailyPayment: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateValidator(
      _validator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateValue(
      _value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updatelistingId(
      _listingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    validator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    value(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    workers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}