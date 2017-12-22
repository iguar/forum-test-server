import * as constants from '../constants'
import axios from 'axios'
import querystring from 'querystring'

export const addMessage = (title, body) => {
    return function (dispatch, getState) {
         let data = querystring.stringify({
            title: title,
             body : body
        });

        axios.post('message', data)
            .then((response)=>{
            dispatch(fetchData())
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

// Get messages from server.
export function fetchData(){
    return function (dispatch, getState) {
        axios.get('message')
            .then((response)=>{
            dispatch(messagesFetched(response.data))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

// We got messages from server.
export function messagesFetched(data){
    return function(dispatch, getState){
        dispatch({
            type: constants.MESSAGES_FETCHED,
            payload: {
                messages: data
            }
        });
    }
}
