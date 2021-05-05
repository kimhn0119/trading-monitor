import { GET_CURRENCIES_DATA } from "../constants";

const defaultState = {
    // TODO: this data
    data: [
        'FX:AUDJPY',
        'FX:AUDUSD',
        'FX:CADJPY',
        'FX:CHFJPY',
        'FX:EURAUD',
        'FX:EURCAD',
        'FX:EURCHF',
        'FX:EURGBP',
        'FX:EURJPY',
        'FX:EURUSD',
        'FX:GBPCHF',
        'FX:GBPJPY',
        'FX:GBPUSD',
        'FX:USDCAD',
        'FX:USDCHF',
        'FX:USDJPY',
    ],
};

export default function сurrenciesReducer(store = defaultState, action: { type: string }) {
    switch (action.type) {
        case GET_CURRENCIES_DATA:
            return store.data;
        default:
            return store;
    }
}
