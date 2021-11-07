import {GlobalState} from "./state";
import {CurrencyWithKeyType} from "./actions";

export const selectValutes = (state: GlobalState): CurrencyWithKeyType | null => state.currency.valutes