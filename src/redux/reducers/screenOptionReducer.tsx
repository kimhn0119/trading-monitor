import { GET_SCREEN_OPTION_RENDER, SET_SCREEN_OPTION_RENDER } from '../constants';

const defaultState = {
    // TODO: this data
    data: [
        {
            id: 0,
            item: 'Markets',
        },
        {
            id: 1,
            item: 'Currencies',
        },
        {
            id: 2,
            item: 'Real Time Chart',
        },
        {
            id: 3,
            item: 'Economic Calendar',
        },
    ],
    render: 0,
};

export default function screenOptionReducer(store = defaultState, action: { type: string, payload: number }) {
    switch (action.type) {
        case SET_SCREEN_OPTION_RENDER:
            return { ...store, render: action.payload };
        case GET_SCREEN_OPTION_RENDER:
            return store.data;
        default:
            return store;
    }
}
