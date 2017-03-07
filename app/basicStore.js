import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Forms from 'ikanedo/react-redux-simple-validate/src/forms/formReducer';

const basicFormReducer = combineReducers({
  Forms
});

export const store = createStore(
  basicFormReducer,
  compose(
    applyMiddleware(thunk)
  )
);
