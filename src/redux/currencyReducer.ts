import {ACTIONS_TYPE, CurrencyReducersTypes, CurrencyWithKeyType} from "./actions";

const initialState: InitialStateType = {
    valutes: null
}

export const currencyReducer =
    (state = initialState, action: CurrencyReducersTypes): InitialStateType => {
        switch (action.type) {
            case ACTIONS_TYPE.SET_CURRENCY: {
                return {
                    ...state,
                    valutes: action.payload.valutes
                }
            }
            default:
                return state
        }
    }

//----------types-----------
type InitialStateType = {
    valutes: CurrencyWithKeyType | null
}