class Speech{
    constructor(){

    }
    speak(content){
        this.speechInstance=new SpeechSynthesisUtterance(content);
    }
}
export default Speech;
