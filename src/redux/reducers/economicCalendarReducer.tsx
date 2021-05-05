const defaultState = {
    timeLineData: [
        {
            id: 0,
            name: 'BTCUSD',
            source: 'BITSTAMP:BTCUSD',
            description: 'the price of Bitcoin'
        },
        {
            id: 1,
            name: 'AAPL',
            source: 'NASDAQ:AAPL',
            description: 'the price of Apple'

        },
        {
            id: 2,
            name: 'GOOGL',
            source: 'NASDAQ:GOOGL',
            description: 'the price of Google'

        },
    ],
};
export default function economicCalendarReducer(store = defaultState, action: {type: string, payload: string}) {
    switch (action.type) {
        default:
            return store;
    }
}
