const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.lang = "ta-IN";
    text_speak.rate = 1;
    text_speak.pitch = 1;
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
        speak("காலை வணக்கம்!");
        speak("வணக்கம் நான் உழவன் நான் உனக்கு எப்படி உதவ முடியும்");
    }
    else if (hour >= 12 && hour < 16) {
        speak("மதிய வணக்கம் ");
        speak("வணக்கம் நான் உழவன் நான் உனக்கு எப்படி உதவ முடியும்?");
    }
    else {
        speak("மாலை வணக்கம்");
        speak("வணக்கம் நான் உழவன் நான் உனக்கு எப்படி உதவ முடியும்?");
    }
}
window.addEventListener('load', () => {
    speak("டில்லர் ஆன்லைனில் செல்லத் தொடங்குகிறது");
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
    recognition.lang = 'ta-IN';
})
function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "எனக்கு புரியவில்லை நீங்கள் மீண்டும் முயற்சிக்கவும் அல்லது உங்கள் மைக்கை சரிபார்க்கவும்";

    if (message.includes('வணக்கம்')){
        const finalText = "வணக்கம் முதலாளி உங்களுக்கு இனிய நாள்";
        speech.text = finalText;

    }
    else if (message.includes('வாழ்த்துக்கள்!')) {
        const finalText = "வணக்கம் முதலாளி உங்களுக்கு இனிய நாள்";
        speech.text = finalText;

    }
    else if (message.includes('நீங்கள் எப்படி இருக்கிறீர்கள்')) {
        const finalText = "என்னை பற்றி கேட்டதற்கு நன்றி. நான் பெருமையாக நினைக்கிறேன்";
        speech.text = finalText;
    }
    else if (message.includes('உங்கள் பெயர் என்ன')) {
        const finalText = "ஓ, என் பெயர் டில்லர். உழவன் என்றால் விவசாயி";
        speech.text = finalText;
    }
    else if (message.includes('உன்னை உருவாக்கியவர்')) {
        const finalText = "நான் மிஸ் லலிதாவால் உருவாக்கப்பட்டது";
        speech.text = finalText;
    }
    else if (message.includes('கூகுளை திறக்கவும்')) {
        window.open("https://google.com", "_blank");
        const finalText = "கூகுளை திறக்கிறது";
        speech.text = finalText;
    }

    else if (message.includes('முகநூலை திறக்கவும்')) {
        window.open("https://www.facebook.com/", "_blank");
        const finalText = "முகநூலைத் திறக்கிறேன்";
        speech.text = finalText;
    }
    else if (message.includes('திறந்த ட்விட்டர்')) {
        window.open("https://www.twitter.com/", "_blank");
        const finalText = "இப்போது ட்விட்டர் திறக்கிறது";
        speech.text = finalText;
    }
    else if (message.includes('ஒரு ஜோக் சொல்லு')) {
        const finalText = "சரி இனி எனக்கு தெரியாது ஆனால் ஒரு ஜோக் சொல்கிறேன். இங்கே. ஒரு மனிதன் கடவுளிடம் பேசுகிறான். மனிதன்: கடவுளே, ஒரு மில்லியன் ஆண்டுகள் எவ்வளவு காலம்? கடவுள்: எனக்கு இது ஒரு நிமிடம். மனிதன்: கடவுளே, ஒரு மில்லியன் டாலர் எவ்வளவு? பகவான்: எனக்கு அது ஒரு பைசா. மனிதன்: கடவுளே, எனக்கு ஒரு பைசா கொடுங்கள். பகவான்: கொஞ்சம் பொறு.";
        speech.text = finalText;
    }
    else if (message.includes('காதல்')) {
        const finalText = "ஹாம், எக் இன்சான் கே டௌர் பர் நான் ஆபகி பல இஜ்ஜத் கராதா ஹூம்";
        speech.text = finalText;
    }
    else if (message.includes('நீங்கள் திருமணமானவரா?') || message.includes('திருமணம்')) {
        const finalText = "இல்லை நான் என் கடமையை செய்கிறேன்";
        speech.text = finalText;
    }
    else if (message.includes('ஆன்லைன் ஷாப்பிங்')) {
        window.open("https://www.amazon.in/");
        const finalText = "சிறந்த ஆன்லைன் ஷாப்பிங் தளங்களில் ஒன்றைத் திறக்கிறது";
        speech.text = finalText;
    }
    else if (message.includes('நேரம்')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric", })
        const finalText = time;
        speech.text = finalText;
    }
    else if (message.includes('தேதி')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric", year: "numeric", weekday: "long" })
        const finalText = date;
        speech.text = finalText;
    }
    else if (message.includes('வானிலை')) {
        const weather = new weather().toLocaleString(undefined, { weather: "" })
        const finalText = date;
        speech.text = finalText;
    }

    else if (message.includes('வீடியோக்கள்')) {
        console.log(message)
        window.open('https://www.youtube.com//search?q= ' + message, "_blank");
        const finalText = "எனக்கு சில தகவல் கிடைத்தது" + message + "Youtube இல்";
        speech.text = finalText;

    }

    else if (message.includes('விக்கிபீடியா')) {
        console.log(message)
        window.open('https://en.wikipedia.org//wiki/' + message.replace("विकिपीडिया", ""), "_blank");
        const finalText = "எனக்கு சில தகவல் கிடைத்தது" + message + "விக்கிபீடியாவில்";
        speech.text = finalText;

    }
    else if (message.includes('யார் அங்கே')) {
        console.log(message)
        window.open('https://en.wikipedia.org//wiki/' + message.replace("कौन है", ""), "_blank");
        const finalText = "எனக்கு சில தகவல் கிடைத்தது" + message + "விக்கிபீடியாவில்";
        speech.text = finalText;

    }
    else if (message.includes('திறந்த வரைபடம்')) {
        console.log(message)
        window.open('https://www.google.com/maps/@17.5931392,78.4728064,13z');
        const finalText = "திறந்த வரைபடங்கள்";
        speech.text = finalText;
    }
    else if (message.includes('பொருள்')) {
        console.log(message)
        window.open('https://www.merriam-webster.com/dictionary/' + message.replace("अर्थ ", " "), "_blank");
        const finalText = "நான் கண்டுபிடித்தேன்" + message + "அகராதியில்";
        speech.text = finalText;
    }
    else if (message.includes('எங்கே உள்ளது')) {
        console.log(message)
        window.open('https://www.google.com/maps/@17.5931392,78.4728064,13z/search?q=' + message.replace("कहाँ है", " "), "_blank");
        const finalText = "அதற்கு எனக்கு இடம் கிடைத்தது" + message + "வரைபடங்களில்";
        speech.text = finalText;
    }

    else if (message.includes('எப்படி அடைவது')) {
        console.log(message)
        window.open('https://www.google.com/maps/dir/Bhimavaram,+Andhra+Pradesh/Chennai,+Tamil+Nadu/@16.5085981,80.7892556,10z' + message.replace("कैसे पहुंचा जाये ", " "), "_blank");
        const finalText = "எனக்கு சில வழிகள் கிடைத்தன" + message + "வரைபடங்களில்";
        // const finalText="opening maps";
        speech.text = finalText;
    }

    else if (message.includes('திசைகள்')) {
        console.log(message)
        window.open('https://www.google.com/maps/dir/+dir?q=+/@16.5085981,80.7892556,10z/+dir?q=+' + message.replace("दिशाओं", " ", " "), "_blank");
        const finalText = "நான் கண்டுபிடித்தேன்" + message + "வரைபடங்களில்";
        // const finalText="opening maps";
        speech.text = finalText;
    }

    else {
        console.log(message)
        window.open('https://www.google.com/search?q= ' + message, "_blank");
        const finalText = "எனக்கு சில தகவல் கிடைத்தது" + message + "கூகுளில்";
        speech.text = finalText;
    }
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    speech.lang = "ta-IN";

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