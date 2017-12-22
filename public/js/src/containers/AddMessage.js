import React from 'react'
import {connect} from 'react-redux'
import {addMessage} from '../actions'

let AddMessage = ({dispatch}) => {
    let title, body;

    return (
        <div>
            <form
                className='add-message-form'
                onSubmit={e => {
                    e.preventDefault();
                    if (!title.value.trim() || !body.value.trim()) {
                        return
                    }
                    dispatch(addMessage(title.value, body.value));
                    title.value = '';
                    body.value = '';
                }}
            >
                <input
                    ref={node => {
                        title = node
                    }}
                    defaultValue='Заголовок'
                    onFocus={e => {
                        title.value = '';
                    }}
                />
                <textarea
                    ref={node => {
                        body = node
                    }}
                    defaultValue='Текст сообщения'
                    onFocus={e => {
                        body.value = '';
                    }}
                />
                <button type="submit">
                    Отправить
                </button>
            </form>
        </div>
    )
};

AddMessage = connect()(AddMessage);

export default AddMessage