const btn = document.querySelector('.talk');
const content=document.querySelector('.content');
function speak(sentence){
    const text_speak=new SpeechSynthesisUtterance(sentence);

    text_speak.rate=1;
    text_speak.pitch=1;

    window.speechSynthesis.speak(text_speak);

}

function wishMe() { 
    var day =new Date(); 
    var hour=day.getHours;
    if (hour>=0 && hour<12){  
        speak("Good Morning");
        speak("Hello ,I am Tiller ,How may i help you");
    }
    else if (hour>=12 && hour<16){ 
        speak("Good Afternoon ");
        speak("Hello ,I am Tiller ,How may i help you");
    }
    else{  
        speak("Good Evening");
        speak("Hello ,I am Tiller ,How may i help you");
        }
}
window.addEventListener('load',()=>{
    speak("Activating Tiller");
    speak("Going Online");
    wishMe();
})

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult=(event) => {
    const current=event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent=transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click',()=>{
    recognition.start();
})
function speakThis(message){
    const speech=new SpeechSynthesisUtterance();

    speech.text="I didn't understand what you said please try again or pleasee check your mic";

    if(message.includes('hai') || message.includes('hello')){
        const finalText="Hello Boss , have a nice day ";
        speech.text=finalText;

    }
    else if(message.includes('how are you')){
        const finalText="thank you for asking about me.I am super fine and how are you ?";
        speech.text=finalText;
    }
    else if(message.includes('what is your name')){
        const finalText="oh, my name is tiller. the meaning of tiller means a farmer";
        speech.text=finalText;
    }
    else if(message.includes('who created you')){
        const finalText="i am created by miss lalitha.";
        speech.text=finalText;
    }
    else if(message.includes('open google')){
        window.open("https://google.com","_blank");
        const finalText="Opening google";
        speech.text=finalText;
    }

    else if(message.includes('open facebook')){
        window.open("https://www.facebook.com/","_blank");
        const finalText="Opening facebook";
        speech.text=finalText;
    }
    else if(message.includes('open twitter')){
        window.open("https://www.twitter.com/","_blank");
        const finalText="Opening twitter";
        speech.text=finalText;
    }
    else if(message.includes('tell me a joke')){
        const finalText="ok i dont know more but i will tell you a joke.here is it.   A man is talking to God.  The man: God how long is a million years. God: To me, it's about a minute. The man: God, how much is a million dollars. God: To me it's a penny. The man: God, may I have a penny. God: Wait a minute.";
        speech.text=finalText;
    }
    else if(message.includes('love')){
        const finalText="yes, as a person i really respect you very much";
        speech.text=finalText;
    }
    else if(message.includes('married')||message.includes('marry') ){
        const finalText="no, i am abide of my duty";
        speech.text=finalText;
    }
    else if(message.includes('online shopping')){
        window.open("https://www.amazon.in/");
        const finalText="Opening one of the top online shopping site";
        speech.text=finalText;
    }
    else if(message.includes('time')){
        const time= new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric",})
        const finalText=time;
        speech.text=finalText;
    }
    else if(message.includes('date')){
        const date= new Date().toLocaleString(undefined,{month:"short",day:"numeric",year:"numeric",weekday:"long"})
        const finalText=date;
        speech.text=finalText;
    }
    else if(message.includes('weather')){
        const weather=new weather().toLocaleString(undefined,{weather:""})
        const finalText=date;
        speech.text=finalText;
    }

    else if(message.includes('youtube')){
        console.log(message)
        window.open('https://www.youtube.com//search?q= '+ message ,"_blank");    
        const finalText="I found some information for"+ message + "on youtube";
        speech.text=finalText;

    }
    // else if(message.includes('you')){
    //     console.log(message)
    //     window.open('https://www.youtube.com/watch?v= '+ message.replace("play "," ") ,"_blank");    
    //     const finalText="I found some vedio on "+ message + "on youtube";
    //     speech.text=finalText;
    // }
    else if(message.includes('play happy birthday song')){
        console.log(a=(b="Happy Birthday ")+"to You\n",a,b+"Dear\n",a)
        
    }
            
    else if(message.includes('wikipedia about')){
        console.log(message)
        window.open('https://en.wikipedia.org//wiki/'+ message.replace("wikipedia about ",""),"_blank");    
        const finalText="I found some information for"+ message + "on wikipedia";
        speech.text=finalText;

    }
    else if(message.includes('who is')){
        console.log(message)
        window.open('https://en.wikipedia.org//wiki/'+ message.replace("who is ",""),"_blank");    
        const finalText="I found some information for"+ message + "on wikipedia";
        speech.text=finalText;

    }
    else if(message.includes('open maps')){
        console.log(message)
        window.open('https://www.google.com/maps/@17.5931392,78.4728064,13z');    
        const finalText="opening maps";
        speech.text=finalText;
    }
    else if(message.includes('meaning')){
        console.log(message)
        window.open(' https://www.merriam-webster.com/dictionary/'+message.replace("meaning of"," "),"_blank");    
        const finalText="I found "+ message + "in dictionary";
        speech.text=finalText;
    }
    else if(message.includes('where is ')){
        console.log(message)
        window.open('https://www.google.com/maps/@17.5931392,78.4728064,13z/search?q='+message.replace("where is"," "),"_blank"); 
        const finalText="I found some place for"+ message + "in maps";  

        speech.text=finalText;
    }

    else if(message.includes('how to reach ')){
        console.log(message)
        window.open('https://www.google.com/maps/dir/Bhimavaram,+Andhra+Pradesh/Chennai,+Tamil+Nadu/@16.5085981,80.7892556,10z'+message.replace("how to reach"," "),"_blank"); 
        const finalText="I found some directions"+ message + "in maps"; 
        // const finalText="opening maps";
        speech.text=finalText;
    }
    
    else if(message.includes('directions')){
        console.log(message)
        window.open('https://www.google.com/maps/dir/+dir?q=+/@16.5085981,80.7892556,10z/+dir?q=+'+message.replace("directions "," "," "),"_blank"); 
        const finalText="I found "+ message + "in maps"; 
        // const finalText="opening maps";
        speech.text=finalText;
    }
    

    // else if(message.includes('calculate')){console.log(message)

    //     const calculate= new calculate().
    //     const finalText=calculate;
    //     speech.text=finalText;
    // }
    else{
        console.log(message)
        window.open('https://www.google.com/search?q= '+ message ,"_blank");    
        const finalText="I found some information for"+ message + "on google";
        speech.text=finalText;
    }
    speech.volume=1;
    speech.pitch=1;
    speech.rate=1;

    window.speechSynthesis.speak(speech);
}