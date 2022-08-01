import { createAction } from "@reduxjs/toolkit";

export const utilsInitialDataLoad = createAction("Utilities initial data load");

export const utilsUpdateActiveBlogId = createAction(
  "Utilities update active blog id"
);
