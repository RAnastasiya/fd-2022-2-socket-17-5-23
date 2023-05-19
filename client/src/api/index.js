import axios from 'axios';
import io from 'socket.io-client';
import store from '../store';
import CONSTANTS from '../constants';
import { addMessage, errorMessage } from '../store/chatSlice';
const {
  SOCKET_EVENTS: { NEW_MESSAGE, NEW_MESSAGE_ERROR },
} = CONSTANTS;
const mainURL = 'localhost:3000';

const httpClient = axios.create({
  baseURL: `http://${mainURL}`,
});

const socket = io(`ws://${mainURL}`, { transports: ['websocket'] });

export const getMessages = (params = {}) => httpClient.get('/');

export const sendMessage = (data) => socket.emit(NEW_MESSAGE, data);

socket.on(NEW_MESSAGE, (savedMessage) => {
  store.dispatch(addMessage(savedMessage));
});
socket.on(NEW_MESSAGE_ERROR, (error) => {
  store.dispatch(errorMessage(error));
});
