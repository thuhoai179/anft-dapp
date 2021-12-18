import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { extendOwnership } from "./listing.api";

interface IAuthenticationState {
  extendOwnerShipTHash: string | undefined;
  extendOwnerShipSuccess: boolean;
  loading: boolean;
  errorMessage: string | null;
}

const initialState: IAuthenticationState = {
  extendOwnerShipTHash: "",
  extendOwnerShipSuccess: false,
  loading: false,
  errorMessage: null,
};

// export type IAuthentication = Readonly<typeof initialState>;

const listingSlice = createSlice({
  name: "listingSlice",
  initialState,
  reducers: {
    fetching(state) {
      state.loading = true;
    },
    reset(state) {
      state.extendOwnerShipTHash = "";
      state.extendOwnerShipSuccess = false;
      state.loading = false;
      state.errorMessage = null;
    },
    softReset(state) {
      state.extendOwnerShipSuccess = false;
      state.loading = false;
      state.errorMessage = null;
    },
  },
  extraReducers: {
    [extendOwnership.fulfilled.type]: (state, { payload }: PayloadAction<string>) => {
      state.extendOwnerShipTHash = payload;
      state.extendOwnerShipSuccess = true;
      state.errorMessage = null;
      state.loading = false;
    },
    [extendOwnership.rejected.type]: (state, { payload }) => {
      state.extendOwnerShipSuccess = false;
      state.errorMessage = payload;
      state.loading = false;
    },
  },
});

export default listingSlice.reducer;
export const { fetching, reset, softReset } = listingSlice.actions;
