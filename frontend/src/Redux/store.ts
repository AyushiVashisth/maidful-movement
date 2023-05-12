import {legacy_createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import usersignupreducer, { Actionobj } from "./usersignup/usersignupreducer"
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { ThunkAction } from 'redux-thunk';
import { useSelector } from "react-redux";

const rootReducer=combineReducers({usersignupreducer});
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));



export type AppDispatch=typeof store.dispatch;
export type RootState= typeof store.getState

export const useAppDispatch:()=>AppDispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<RootState> =useSelector


// export const someThunkAction = (): ThunkAction<
//   void,
//   RootState,
//   null,
//   Actionobj
// > => {
//   return (dispatch, getState) => {
//     // perform some async operation here
//     dispatch(someAction());
//   };
// }