import axios from 'axios'

export const axiosInstance = axios.create({
    headers : {
        authorization : `Bearer ${localStorage.getItem('token')}` //once the log in is successfull will receive the token from backend , putt the token in the local storage , after every request sned these headers in the authorization
            
    },
})