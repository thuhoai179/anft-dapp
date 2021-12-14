import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAsset } from "../../shared/models/assets.model";
import { assetsApi } from "./assets.api";

interface IInitialState {
  assets: IAsset[];
  asset: IAsset | null;
  errorMessage: string;
  totalItems: number;
}

const initialState: IInitialState = {
  assets: [],
  asset: null,
  errorMessage: "",
  totalItems: 0,
};

export const exchangeRateAdapter = createEntityAdapter<any>({
    selectId: ({ id }) => id,
  });

// Config slice
const { actions, reducer } = createSlice({
  name: "assetsApi",
  initialState,
  reducers: {
    reset: (state) => {
      state.assets = [];
      state.errorMessage = "";
      state.totalItems = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(assetsApi.endpoints.getAssets.matchFulfilled, (state, { payload }: PayloadAction<IAsset[]>) => {
      state.assets = payload;
      state.totalItems = payload.length;
    });
    builder.addMatcher(assetsApi.endpoints.getAssets.matchRejected, (state, { payload }: PayloadAction<any>) => {
      state.errorMessage = payload?.message;
    });
    builder.addMatcher(assetsApi.endpoints.getAsset.matchFulfilled, (state, { payload }: PayloadAction<IAsset>) => {
      state.asset = payload;
    });
    builder.addMatcher(assetsApi.endpoints.getAsset.matchRejected, (state, { payload }: PayloadAction<any>) => {
      state.errorMessage = payload?.message;
    });
  },
});

// Export actions
export const { reset } = actions;

// Select state currentdummy from slice

// Export reducer
export default reducer;

