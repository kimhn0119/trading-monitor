import {combineReducers} from 'redux';
import сurrenciesReducer from './сurrenciesReducer';
import realTimeChartReducer from './realTimeChartReducer';
import screenOptionReducer from './screenOptionReducer';
import economicCalendarReducer from './economicCalendarReducer';
import marketsReducer from './marketsReducer';

const rootReducers = combineReducers({
    currencies: сurrenciesReducer,
    realTimeChart: realTimeChartReducer,
    screenOption: screenOptionReducer,
    economicCalendar: economicCalendarReducer,
    markets: marketsReducer,
});

export default rootReducers;
