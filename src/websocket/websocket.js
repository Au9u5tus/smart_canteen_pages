class Websocket{
    constructor(url,callback) {
       this.createSocket(url,callback)
    }

    createSocket(url,callback){
        this.ws=new WebSocket(url);
        this.ws.onopen=()=>{
            console.log('websocket连接成功');
        }
        this.ws.onerror=(error)=>{
           console.log(error)
        }
        this.ws.onclose=()=>{
            console.log('websocket连接关闭')
        }
        this.ws.onmessage=(data)=>{
            if(callback){
                callback(data)
            }
        }
    }

    sendMessage(message){
        this.ws.send(message);
    }


}
export  default  Websocket;