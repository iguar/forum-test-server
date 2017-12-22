import React from 'react';
import MessagesListContainer from '../containers/MessagesListContainer'
import AddMessage from '../containers/AddMessage'
import CounterContainer from '../containers/CounterContainer'

const App = () => (
    <div>
        <h1>Супер тема.</h1>
        <div>
            <AddMessage/>
            <MessagesListContainer/>
            <CounterContainer/>
        </div>
    </div>
);

export default App;