import {applyMiddleware, combineReducers, createStore} from "redux";
import {currencyReducer} from "./currencyReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";
import {CurrencyReducersTypes} from "./actions";


const reducers = combineReducers({
    currency: currencyReducer,
});

export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, GlobalState, unknown, CurrencyReducersTypes>

export type GlobalState = ReturnType<typeof reducers>
export const store = createStore(reducers, composeWithDevTools((applyMiddleware(thunkMiddleware))))