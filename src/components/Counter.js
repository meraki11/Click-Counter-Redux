import React from 'react';
import { connect } from 'react-redux';
import CardBody from "./CardBody";

const Counter = ({ count, dispatch }) => {
    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });
     };

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" });
     };

    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                Click Counter!
            </div>
            <CardBody
            count={count}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            />
        </div>
    )
}

const mapStateToProps = state => ({
    count: state.count
});

// const connectCounter = connect(); 
// const ReduxCounter = connectCounter(Counter);
// export default ReduxCounter;
// above lines are the same as below single line:

export default connect(mapStateToProps)(Counter);