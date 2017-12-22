import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import App from './components/App'
import forumApp from './reducers'
import {fetchData} from "./actions";
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

const logger = createLogger();
const middleware =  applyMiddleware(promise(), thunk, logger);

let store = createStore(
    forumApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    middleware
);

store.dispatch(fetchData());

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);