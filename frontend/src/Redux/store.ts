import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import thunk from "redux-thunk";
import { loginReducer } from "./AuthLogin/login.reducer";
import { signupReducer } from "./AuthSignup/signup.reducer";

const rootReducer = combineReducers({ loginReducer, signupReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
