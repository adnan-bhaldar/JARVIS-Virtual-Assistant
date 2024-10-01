const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Sir...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Sir...");
    } else {
        speak("Good Evening Sir...");
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open github")) {
        window.open("https://github.com", "_blank");
        speak("Opening Github...");
    } else if (message.includes("open reddit")) {
        window.open("https://reddit.com", "_blank");
        speak("Opening Reddit...");
    } else if (message.includes("open instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Opening Instagram...");
    } else if (message.includes("open twitter")) {
        window.open("https://x.com", "_blank");
        speak("Opening Twitter/X...");
    } else if (message.includes("open my github profile")) {
        window.open("https://github.com/adnan-bhaldar", "_blank");
        speak("Opening Your Github Profile...");
    } else if (message.includes("open netflix")) {
        window.open("https://netflix.com", "_blank");
        speak("Opening Netflix...");
    } else if (message.includes("open crunchyroll")) {
        window.open("https://crunchyroll.com", "_blank");
        speak("Opening Crunchyroll...");
    } else if (message.includes("open whatsapp")) {
        window.open("https://whatsapp.com", "_blank");
        speak("Opening Whatsapp...");
    } else if (message.includes("open hotstar")) {
        window.open("https://hotstar.com", "_blank");
        speak("Opening Hotstar...");
    } else if (message.includes("open amazon prime video")) {
        window.open("https://primevideo.com", "_blank");
        speak("Opening Amazon Prime video...");
    } else if (message.includes("open chat gpt")) {
        window.open("https://chatgpt.com", "_blank");
        speak("Opening Chat GPT...");
    } else if (message.includes("open gemini")) {
        window.open("https://gemini.google.com/app", "_blank");
        speak("Opening Google Gemini...");
    } else if (message.includes("open amazon")) {
        window.open("https://amazon.in", "_blank");
        speak("Opening Amazon...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric", year: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}
