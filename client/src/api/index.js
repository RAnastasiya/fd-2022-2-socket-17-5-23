import axios from 'axios';
import io from 'socket.io-client';
import store from '../store'
import CONSTANTS from '../constants';
import { addMassage, errorMassage } from '../store/chatSlice';
const { SOCET_EVENTS: { NEW_MESSAGE, NEW_MESSAGE_ERROR } } = CONSTANTS;
const mainURL = '127.0.0.1:3000';

const httpClient = axios.create({
    baseURL: `http://${mainURL}`
});

const socket = io(`ws://${mainURL}`, { 
    transports: ['websocket', 'polling'],
});

export const getMessages = (params={}) => httpClient.get('/');

export const sendMessage = (data) => socket.emit(NEW_MESSAGE, data)

socket.on(NEW_MESSAGE, (savedMassage) => {
    store.dispatch(addMassage(savedMassage))
});
socket.on(NEW_MESSAGE_ERROR, (savedMassage) => {
    store.dispatch(errorMassage(savedMassage))
});
