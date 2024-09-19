import { WebsocketContext } from "./SocketProvider";
import { useContext, useEffect } from "react";

export const useWebSocket = () => {
    const {isReady, data, sendRpcMessage} = useContext(WebsocketContext);
    
    return {isReady, data, sendRpcMessage};
};