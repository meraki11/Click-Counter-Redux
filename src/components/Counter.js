import React from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decrementCounter } from '../redux/actions';
import CardBody from "./CardBody";

const Counter = ({ count, increment, decrement }) => {
    // const handleIncrement = () => {
    //     dispatch({ type: "INCREMENT" });
    //  };

    // const handleDecrement = () => {
    //     dispatch({ type: "DECREMENT" });
    //  };
    // do not need above functions because of new code in mapDispatchToProps

    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                Click Counter!
            </div>
            <CardBody
            count={count}
            handleIncrement={increment}
            handleDecrement={decrement}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        increment: () => dispatch(incrementCounter()),
        decrement: () => dispatch(decrementCounter()) 
    };
};

const mapStateToProps = state => ({
    count: state.counterReducer.count
});

// const connectCounter = connect(); 
// const ReduxCounter = connectCounter(Counter);
// export default ReduxCounter;
// above lines are the same as below single line:

export default connect(mapStateToProps, mapDispatchToProps)(Counter);