import React from 'react';
import { connect } from 'react-redux';
import { incrementDosCounter, decrementDosCounter } from '../redux/actions';
import CardBody from "./CardBody";

const DosCounter = ({ dosCount, dosIncrement, dosDecrement }) => {
    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">
                Dos Counter!
            </div>
            <CardBody
            count={dosCount}
            handleIncrement={dosIncrement}
            handleDecrement={dosDecrement}
            />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        dosIncrement: () => dispatch(incrementDosCounter()),
        dosDecrement: () => dispatch(decrementDosCounter()) 
    };
};

const mapStateToProps = state => ({
    dosCount: state.dosCounterReducer.dosCount
});

export default connect(mapStateToProps, mapDispatchToProps)(DosCounter);