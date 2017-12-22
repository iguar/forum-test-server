import {connect} from 'react-redux'
import Counter from '../components/Counter'

const mapStateToProps = state => {
    return {
        messagesNumber: state.messagesList.length
    }
};

const CounterContainer = connect(
    mapStateToProps
)(Counter);

export default CounterContainer;