const textarea = document.querySelector(".text");
const playBtn = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");
const speed = document.querySelector(".speed");

const utterance = new SpeechSynthesisUtterance();

playBtn.addEventListener("click", (e) => {
    let textToSpeech = textarea.value;
    if (!textToSpeech)
        speak("Nothing to speak LOL");
    else
        speak(textToSpeech);
});


stopBtn.addEventListener("click", (e) => {
    speechSynthesis.resume();
    speechSynthesis.cancel();
});

const speak = (message) => {
    utterance.text = message;
    utterance.rate = speed.value || 1;
    textarea.disabled = true;
    speechSynthesis.speak(utterance)
};

utterance.addEventListener("end", (e) => {
    textarea.disabled = false;
});