import io from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_BACKEND || "http://localhost:5050";
export const socket = io(ENDPOINT);