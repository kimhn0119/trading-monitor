import { GET_FOREX_HEAT_MAP_CURRENCIES } from "../constants";

const defaultState = {
    forexHeatMapCurrencies: ['EUR', 'USD', 'JPY', 'GBP', 'CHF', 'AUD', 'CAD', 'NZD', 'CNY'],
};

export default function marketsReducer(store = defaultState, action: { type: string, payload: string }) {
    switch (action.type) {
        case GET_FOREX_HEAT_MAP_CURRENCIES:
            return store.forexHeatMapCurrencies;
        default:
            return store;
    }
}
