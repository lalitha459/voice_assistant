const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.lang = "hi-IN";
    text_speak.rate = 0.5;
    text_speak.pitch = 0.5;
    text_speak.volume = 1;

    window.speechSynthesis.getVoices();
    window.speechSynthesis.speak(text_speak);
    window.speechSynthesis.volume(text_speak);

}

function wishMe() {
    var day = new Date();
    var hour = day.getHours;
    text_wishMe.lang = "hi-IN";
    if (hour >= 0 && hour < 12) {
        speak("शुभ प्रभात");
        speak("हैलो, मैं टिलर हूं, मैं आपकी कैसे मदद कर सकता हूं?");
    }
    else if (hour >= 12 && hour < 16) {
        speak("शुभ दोपहर ");
        speak("हैलो, मैं टिलर हूं, मैं आपकी कैसे मदद कर सकता हूं?");
    }
    else {
        speak("शुभ संध्या");
        speak("हैलो, मैं टिलर हूं, मैं आपकी कैसे मदद कर सकता हूं?");
    }
}
window.addEventListener('load', () => {
    speak("टिलर शुरू होता है ऑनलाइन जा रहा है");
    // speak("ऑनलाइन जा रहा है");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', () => {
    recognition.start();
    recognition.lang = 'hi-IN';
})
function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "मुझे आपकी बात समझ में नहीं आई, कृपया फिर से कोशिश करें या कृपया अपना माइक जांचें";

    if (message.includes('हाय टिलर')){
        const finalText = "हेलो बॉस आपका दिन शुभ हो";
        speech.text = finalText;

    }
    else if (message.includes('नमस्ते')) {
        const finalText = "हेलो बॉस आपका दिन शुभ हो";
        speech.text = finalText;

    }
    else if (message.includes('आप कैसे हैं')) {
        const finalText = "मेरे बारे में पूछने के लिए धन्यवाद। मुझे बहुत अच्छा लग रहा है";
        speech.text = finalText;
    }
    else if (message.includes('आपका नाम क्या है')) {
        const finalText = "ओह, मेरा नाम टिलर है। टिलर का मतलब किसान होता है";
        speech.text = finalText;
    }
    else if (message.includes('आपको किसने बनाया')) {
        const finalText = "मुझे मिस ललिता ने बनाया था।";
        speech.text = finalText;
    }
    else if (message.includes('गूगल खोलें')) {
        window.open("https://google.com", "_blank");
        const finalText = "गूगल खोल रहा हूँ";
        speech.text = finalText;
    }

    else if (message.includes('फ़ेसबुक खोलो')) {
        window.open("https://www.facebook.com/", "_blank");
        const finalText = "अभी फेसबुक खोल रहा हूँ";
        speech.text = finalText;
    }
    else if (message.includes('ट्विटर खोलें')) {
        window.open("https://www.twitter.com/", "_blank");
        const finalText = "अब ट्विटर खोल रहा हूँ";
        speech.text = finalText;
    }
    else if (message.includes('मुझे एक जोक बताओ')) {
        const finalText = "खैर मैं और नहीं जानता लेकिन मैं आपको एक चुटकुला सुनाता हूँ। यहाँ। एक आदमी भगवान से बात कर रहा है। आदमी: भगवान, एक लाख साल कितने होते हैं? भगवान: मेरे लिए, यह एक मिनट है। आदमी: भगवान, एक मिलियन डॉलर कितने का होता है। भगवान: मेरे लिए वह एक पैसा है। आदमी: भगवान, मुझे एक पैसा दे दो। भगवान: एक मिनट रुको।";
        speech.text = finalText;
    }
    else if (message.includes('प्यार')) {
        const finalText = "हां, एक इंसान के तौर पर मैं आपकी बहुत इज्जत करता हूं";
        speech.text = finalText;
    }
    else if (message.includes('क्या आप शादीशुदा है') || message.includes('शादी')) {
        const finalText = "नहीं, मैं अपने कर्तव्य का पालन कर रहा हूं";
        speech.text = finalText;
    }
    else if (message.includes('ऑनलाइन खरीदारी')) {
        window.open("https://www.amazon.in/");
        const finalText = "शीर्ष ऑनलाइन शॉपिंग साइटों में से एक खोलना ";
        speech.text = finalText;
    }
    else if (message.includes('समय')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric", })
        const finalText = time;
        speech.text = finalText;
    }
    else if (message.includes('तारीख')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric", year: "numeric", weekday: "long" })
        const finalText = date;
        speech.text = finalText;
    }
    else if (message.includes('मौसम')) {
        const weather = new weather().toLocaleString(undefined, { weather: "" })
        const finalText = date;
        speech.text = finalText;
    }

    else if (message.includes('यूट्यूब')) {
        console.log(message)
        window.open('https://www.youtube.com//search?q= ' + message, "_blank");
        const finalText = "मुझे कुछ जानकारी मिली" + message + "यूट्यूब पर";
        speech.text = finalText;

    }

    else if (message.includes('विकिपीडिया')) {
        console.log(message)
        window.open('https://en.wikipedia.org//wiki/' + message.replace("विकिपीडिया", ""), "_blank");
        const finalText = "मुझे इसके लिए कुछ जानकारी मिली" + message + "विकिपीडिया पर";
        speech.text = finalText;

    }
    else if (message.includes('कौन है')) {
        console.log(message)
        window.open('https://en.wikipedia.org//wiki/' + message.replace("कौन है", ""), "_blank");
        const finalText = "मुझे इसके लिए कुछ जानकारी मिली" + message + "विकिपीडिया पर";
        speech.text = finalText;

    }
    else if (message.includes('खुले नक्शे')) {
        console.log(message)
        window.open('https://www.google.com/maps/@17.5931392,78.4728064,13z');
        const finalText = "नक्शे खोलना";
        speech.text = finalText;
    }
    else if (message.includes('अर्थ')) {
        console.log(message)
        window.open('https://www.merriam-webster.com/dictionary/' + message.replace("अर्थ ", " "), "_blank");
        const finalText = "मैंने पाया " + message + "शब्दकोश में";
        speech.text = finalText;
    }
    else if (message.includes('किधर है')) {
        console.log(message)
        window.open('https://www.google.com/maps/@17.5931392,78.4728064,13z/search?q=' + message.replace("किधर है", " "), "_blank");
        const finalText = "मुझे इसके लिए कुछ जगह मिली" + message + "नक्शों में";
        speech.text = finalText;
    }
    else if (message.includes('कहां है')) {
        console.log(message)
        window.open('https://www.google.com/maps/@17.5931392,78.4728064,13z/search?q=' + message.replace("कहां है", " "), "_blank");
        const finalText = "मुझे इसके लिए कुछ जगह मिली" + message + "नक्शों में";
        speech.text = finalText;
    }

    else if (message.includes('कैसे पहुंचा जाये ')) {
        console.log(message)
        window.open('https://www.google.com/maps/dir/Bhimavaram,+Andhra+Pradesh/Chennai,+Tamil+Nadu/@16.5085981,80.7892556,10z' + message.replace("कैसे पहुंचा जाये ", " "), "_blank");
        const finalText = "मुझे कुछ दिशाएँ मिलीं" + message + "नक्शों में";
        // const finalText="opening maps";
        speech.text = finalText;
    }

    else if (message.includes('दिशाओं')) {
        console.log(message)
        window.open('https://www.google.com/maps/dir/+dir?q=+/@16.5085981,80.7892556,10z/+dir?q=+' + message.replace("दिशाओं", " ", " "), "_blank");
        const finalText = "मैंने पाया" + message + "नक्शों में";
        // const finalText="opening maps";
        speech.text = finalText;
    }

    else {
        console.log(message)
        window.open('https://www.google.com/search?q= ' + message, "_blank");
        const finalText = "मुझे इसके लिए कुछ जानकारी मिली" + message + "गूगल पर";
        speech.text = finalText;
    }
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    speech.lang = "hi-IN";

    window.speechSynthesis.speak(speech);

    // else if(message.includes('you')){
    //     console.log(message)
    //     window.open('https://www.youtube.com/wat ch?v= '+ message.replace("play "," ") ,"_blank");    
    //     const finalText="I found some vedio on "+ message + "on youtube";
    //     speech.text=finalText;
    // }
    // else if (message.includes('play happy birthday song')) {
    //     console.log(a = (b = "Happy Birthday ") + "to You\n", a, b + "Dear\n", a)

    // }


    // else if(message.includes('calculate')){console.log(message)

    //     const calculate= new calculate().
    //     const finalText=calculate;
    //     speech.text=finalText;
    // }
}


function getLocalStream() {
    navigator.mediaDevices
        .getUserMedia({ video: false, audio: true })
        .then((stream) => {
            window.localStream = stream;
            window.localAudio.srcObject = stream;
            window.localAudio.autoplay = true;
        })
        .catch((err) => {
            console.error(`you got an error: ${err}`);
        });
}
getLocalStream();