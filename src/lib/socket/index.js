import io from 'socket.io-client';

const chanel = "notify";

let socket;

export const connect = (address, subcriber) => {
    socket = io.connect(window.APP.API_HOST);

    socket.on("connect", () => {
      socket.emit("onConnect", address, Math.random());    
    })
  
    socket.on(chanel, (obj) => {
        subcriber(obj);
    })
}

export const disconnect = () => {
    if(socket) {
        socket.disconnect();
        socket = null;
    }
}