const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.lang = "te-IN";
    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.getVoices();
    window.speechSynthesis.speak(text_speak);
    window.speechSynthesis.volume(text_speak);

}

function wishMe() {
    var day = new Date();
    var hour = day.getHours;
    if (hour >= 0 && hour < 12) {
        speak("శుభోదయం");
        speak("హలో, నేను టిల్లర్, నేను మీకు ఎలా సహాయం చేయగలను");
    }
    else if (hour >= 12 && hour < 16) {
        speak("శుభ మద్యాహ్నం ");
        speak("హలో, నేను టిల్లర్, నేను మీకు ఎలా సహాయం చేయగలను");
    }
    else {
        speak("శుభ సాయంత్రం");
        speak("హలో, నేను టిల్లర్, నేను మీకు ఎలా సహాయం చేయగలను");
    }
}
window.addEventListener('load', () => {
    speak("వెన్నెల ప్రారంభమవుతుంది");
    speak("ఆన్‌లైన్‌లో వెళుతున్నాను");
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
    recognition.lang = 'te-IN';
})
function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "మీరు ఏమి చెప్పారో నాకు అర్థం కాలేదు, దయచేసి మళ్లీ ప్రయత్నించండి లేదా దయచేసి మీ మైక్‌ని తనిఖీ చేయండి";

    if (message.includes('నమస్కారం') || message.includes('హలో')) {
        const finalText = "హలో బాస్, ఈ రోజు మీకు అద్భుతమైన రోజు";
        speech.text = finalText;

    }
    else if (message.includes('మీరు ఎలా ఉన్నారు')) {
        const finalText = "నా గురించి అడిగినందుకు ధన్యవాదాలు. నేను చాలా బాగున్నాను ";
        speech.text = finalText;
    }
    else if (message.includes('నీ పేరు ఏమిటి')) {
        const finalText = "ఓహ్, నా పేరు టిల్లర్. టిల్లర్ అంటే రైతు అని అర్థం";
        speech.text = finalText;
    }
    else if (message.includes('నిన్ను ఎవరు సృష్టించారు')) {
        const finalText = "నేను మిస్ లలిత చేత సృష్టించబడ్డాను.";
        speech.text = finalText;
    }
    else if (message.includes('గూగుల్ తెరవండి')) {
        window.open("https://google.com", "_blank");
        const finalText = "గూగుల్‌ని తెరుస్తోంది";
        speech.text = finalText;
    }

    else if (message.includes('ఫేస్బుక్ తెరవండి')) {
        window.open("https://www.facebook.com/", "_blank");
        const finalText = "ఇప్పుడు ఫేస్‌బుక్‌ని తెరుస్తున్నాను";
        speech.text = finalText;
    }
    else if (message.includes('ట్విట్టర్ తెరవండి')) {
        window.open("https://www.twitter.com/", "_blank");
        const finalText = "ఇప్పుడు ట్విట్టర్‌ని తెరుస్తున్నాను";
        speech.text = finalText;
    }
    else if (message.includes('నాకు ఒక జోక్ చెప్పండి')) {
        const finalText = "సరే నాకు మరింత తెలియదు కానీ నేను మీకు ఒక జోక్ చెబుతాను.ఇదిగో. ఒక వ్యక్తి దేవునితో మాట్లాడుతున్నాడు. మనిషి: దేవుడా లక్ష సంవత్సరాలు అంటే ఎంత . దేవుడు: నాకు, ఇది ఒక నిమిషం. మనిషి: దేవా, మిలియన్ డాలర్లు ఎంత. దేవుడు: నాకు అది ఒక పైసా. మనిషి: దేవా, నాకు ఒక పైసా ఇవ్వండి. దేవుడు: ఒక్క నిమిషం ఆగండి.";
        speech.text = finalText;
    }
    else if (message.includes('ప్రేమ')) {
        const finalText = "అవును, ఒక వ్యక్తిగా నేను నిన్ను చాలా గౌరవిస్తాను";
        speech.text = finalText;
    }
    else if (message.includes('నీకు పెళ్లి అయ్యిందా') || message.includes('పెళ్లి')) {
        const finalText = "no, i am abide of my duty";
        speech.text = finalText;
    }
    else if (message.includes('ఆన్లైన్ షాపింగ్')) {
        window.open("https://www.amazon.in/");
        const finalText = "అగ్ర ఆన్‌లైన్ షాపింగ్ సైట్‌లలో ఒకదాన్ని తెరుస్తున్నాను ";
        speech.text = finalText;
    }
    else if (message.includes('టైం')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric", })
        const finalText = time;
        speech.text = finalText;
    }
    else if (message.includes('తేదీ')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric", year: "numeric", weekday: "long" })
        const finalText = date;
        speech.text = finalText;
    }
    else if (message.includes('వాతావరణం')) {
        const weather = new weather().toLocaleString(undefined, { weather: "" })
        const finalText = date;
        speech.text = finalText;
    }

    else if (message.includes('యూట్యూబ్')) {
        console.log(message)
        window.open('https://www.youtube.com//search?q= ' + message.replace("యూట్యూబ్ లో ప్లే చేయండి", ""), "_blank");
        const finalText = "నేను కొంత సమాచారాన్ని కనుగొన్నాను" + message + "యూట్యూబ్‌లో";
        speech.text = finalText; 

    }
    // else if(message.includes('you')){
    //     console.log(message)
    //     window.open('https://www.youtube.com/wat ch?v= '+ message.replace("play "," ") ,"_blank");    
    //     const finalText="I found some vedio on "+ message + "on youtube";
    //     speech.text=finalText;
    // }
    // else if (message.includes('play happy birthday song')) {
    //     console.log(a = (b = "Happy Birthday ") + "to You\n", a, b + "Dear\n", a)

    // }

    else if (message.includes('wikipedia about')) {
        console.log(message)
        window.open('https://en.wikipedia.org//wiki/' + message.replace("wikipedia about ", ""), "_blank");
        const finalText = "I found some information for" + message + "on wikipedia";
        speech.text = finalText;

    }
    else if (message.includes('ఎవరు')) {
        console.log(message)
        window.open('https://en.wikipedia.org//wiki/' + message.replace("ఎవరు", ""), "_blank");
        const finalText = "నేను మీరు అడిగిన సమాచారం వెతికాను" + message + "వికీపీడియా లో";
        speech.text = finalText;

    }
    else if (message.includes('మ్యాప్‌ తెరవండి')) {
        console.log(message)
        window.open('https://www.google.com/maps/@17.5931392,78.4728064,13z');
        const finalText = "మ్యాప్‌ను తెరుస్తున్నాను";
        speech.text = finalText;
    }
    else if (message.includes('అర్థం ')) {
        console.log(message)
        window.open(' https://www.merriam-webster.com/dictionary/' + message.replace("meaning of", " "), "_blank");
        const finalText = "I found " + message + "in dictionary";
        speech.text = finalText;
    }
    else if (message.includes('ఎక్కడ')) {
        console.log(message)
        window.open('https://www.google.com/maps/@17.5931392,78.4728064,13z/search?q=' + message.replace("ఎక్కడ", " "), "_blank");
        const finalText = "నేను మీరు అడిగిన సమాచారం వెతికాను" + message + "మప్స్ లో ";

        speech.text = finalText;
    }

    else if (message.includes('how to reach ')) {
        console.log(message)
        window.open('https://www.google.com/maps/dir/Bhimavaram,+Andhra+Pradesh/Chennai,+Tamil+Nadu/@16.5085981,80.7892556,10z' + message.replace("how to reach", " "), "_blank");
        const finalText = "I found some directions" + message + "in maps";
        // const finalText="opening maps";
        speech.text = finalText;
    }

    else if (message.includes('directions')) {
        console.log(message)
        window.open('https://www.google.com/maps/dir/+dir?q=+/@16.5085981,80.7892556,10z/+dir?q=+' + message.replace("directions ", " ", " "), "_blank");
        const finalText = "I found " + message + "in maps";
        // const finalText="opening maps";
        speech.text = finalText;
    }


    // else if(message.includes('calculate')){console.log(message)

    //     const calculate= new calculate().
    //     const finalText=calculate;
    //     speech.text=finalText;
    // }
    else {
        console.log(message)
        window.open('https://www.google.com/search?q= ' + message, "_blank");
        const finalText = "నేను మీరు అడిగిన సమాచారం వెతికాను" + message + "గూగుల్‌లో";
        speech.text = finalText;
    }
    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    speech.lang = "te-IN";

    window.speechSynthesis.speak(speech);
}