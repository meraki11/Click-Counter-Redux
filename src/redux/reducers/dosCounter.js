import { DOS_INCREMENT, DOS_DECREMENT  } from '../actions';

const initialState = {
    dosCount: 0
};

const dosCounter = (state = initialState, action) => {
  switch (action.type) {
    case DOS_INCREMENT:
      return {
        dosCount: state.dosCount + 2
      };

    case DOS_DECREMENT:
      return {
        dosCount: state.dosCount - 2
      };
    
    default:
      return state;
  }
}

export default dosCounter;   