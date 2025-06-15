
import { CHANGE_SEARCH_FIELD,
         REQUEST_ROBOTS_PENDING, 
         REQUEST_ROBOTS_SUCCESS, 
         REQUEST_ROBOTS_FAILED } from './constants';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text  
})

export const requestRobots = () => (dispatch) =>  {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicod.com/users')
        .then(response => response.json())

        // 2 new lines to dispatch the success or failure actions using payload 
        // which contains the data or error through redux 
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }));
}