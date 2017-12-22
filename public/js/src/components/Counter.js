import React from 'react'

const Counter = ({messagesNumber}) => (
    <div>
        <span className={'bold'}>Количество сообщений:</span> {messagesNumber}
    </div>
);

export default Counter;