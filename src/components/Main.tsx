import Markets from './Markets';
import Currencies from './Currencies';
import RealTimeChart from './RealTimeChart';
import EconomicCalendar from './EconomicCalendar';
import { connect } from 'react-redux';

type TScreenOption = {
    screenOption: {
        data: {
            id: number;
            item: string;
        },
        render: number;
    }
}

function Main(props: { render: number }) {
    try {
        switch (props.render) {
            case 0:
                return <Markets />;
            case 1:
                return <Currencies />;
            case 2:
                return <RealTimeChart />;
            case 3:
                return <EconomicCalendar />;
            default:
                return <Markets />;
        }
    } catch {
        throw new Error();
    }
}

function mapStateToProps(store: TScreenOption) {
    return store.screenOption;
}

export default connect(mapStateToProps)(Main);
