import { createReducer } from "@reduxjs/toolkit";

import {
  utilsInitialDataLoad,
  utilsUpdateActiveBlogId,
} from "../../actions/utils/utilsActions";

const initialState = {
  activeBlogId: 0,
  loadInitialData: false,
};

const utilsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(utilsInitialDataLoad, () => {
      return { ...initialState };
    })
    .addCase(utilsUpdateActiveBlogId, (state, action) => {
      state.activeBlogId = action.payload;
    });
});

export default utilsReducer;
