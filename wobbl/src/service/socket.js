import io from "socket.io-client";
const ENDPOINT = "http://localhost:5050";
export const socket = io(ENDPOINT);