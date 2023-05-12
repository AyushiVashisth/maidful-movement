import {legacy_createStore,combineReducers,applyMiddleware} from "redux";
import { useSelector,useDispatch,TypedUseSelectorHook } from "react-redux";
import thunk from "redux-thunk";



import { ThunkAction } from 'redux-thunk';



import {reducer as AuthReducer} from './AuthLogin/login.reducer'

const rootReducer=combineReducers({AuthReducer});
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));



export type AppDispatch=typeof store.dispatch;
export type RootState= typeof store.getState

export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector



