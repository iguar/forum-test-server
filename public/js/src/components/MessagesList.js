import React from 'react';
import Message from './Message'

const MessagesList = ({messages}) => (
    <div className='messages'>
        {messages.map((message, index) => (
            <Message key={index} {...message}/>
        ))}
    </div>
);

export default MessagesList;
