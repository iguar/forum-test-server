import React from 'react'

const Message = ({title, body}) => (
    <div className='message'>
        <p className='title'>{title}</p>
        <p className='body'>{body}</p>
    </div>
);

export default Message;