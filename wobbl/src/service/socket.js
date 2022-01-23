import io from "socket.io-client";
const ENDPOINT = process.env.BACKENDADDRESS || "http://localhost:5050";
export const socket = io(ENDPOINT);