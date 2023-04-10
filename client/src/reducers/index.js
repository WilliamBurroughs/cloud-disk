// import { applyMiddleware, combineReducers, createStore } from "redux"; // createStore
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import fileReducer from "./fileReducer";
// import userReducer from "./userReducer";

// const rootReducer = combineReducers({
//   user: userReducer,
//   file: fileReducer,
// });

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import userReducer from "./userReducer";
import fileReducer from "./fileReducer";

const rootReducer = combineReducers({
  user: userReducer,
  file: fileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});
