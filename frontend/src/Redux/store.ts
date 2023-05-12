import {legacy_createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import usersignupreducer from "./usersignup/usersignupreducer"
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const rootReducer=combineReducers({usersignupreducer});
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));



export type AppDispatch=typeof store.dispatch;
export type RootState=ReturnType  <typeof store.getState>

export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> =useSelector