// What is Redux Thunk used for?

// Redux Thunk is a middleware library used in Redux, a state management library for React applications. It allows you to return functions from action creators, which can then be used to delay the dispatch of an action or to dispatch only if certain conditions are met.

// Example of React Thunk
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const fetchUser = () => {
    return dispatch => {
        fetch('https://api.example.com/user')
            .then(response => response.json())
            .then(data => dispatch({ type: 'FETCH_USER_SUCCESS', data }));
    };
};

store.dispatch(fetchUser());