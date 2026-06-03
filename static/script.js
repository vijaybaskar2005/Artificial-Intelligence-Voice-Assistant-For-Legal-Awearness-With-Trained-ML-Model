/** let keepListening = true;

function speak(text, callback = null) {
    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);

    utterThis.onend = () => {
        if (callback) callback();
    };

    // 🟢 Append instead of replacing
    const outputDiv = document.getElementById("output");
    const paragraph = document.createElement("p");
    paragraph.innerText = "🧑‍⚖️ " + text;
    outputDiv.appendChild(paragraph);
}

function listenAndRespond() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-IN';
    recognition.start();

    recognition.onresult = (event) => {
        const query = event.results[0][0].transcript
        document.getElementById("userQuery").innerText += "👤 You said: " + query + "<br> ";
        if (query.toLowerCase().includes("bye")) {
            speak("If things go wrong, remember — Better Call Saul.", () => {
                keepListening = false;
                window.close(); // or redirect
            });
            return; // ❌ Don't send to backend
}

// Send to backend only if not "bye"
fetch('/get_section', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
})
.then(response => response.json())
.then(data => {
    speak(data.response, () => {
        if (keepListening) {
            listenAndRespond(); // 🔁 keep looping
        }
    });
});

    };

    recognition.onerror = () => {
        document.getElementById("output").innerText = "❗ Sorry, I didn't catch that. Please speak again.";
        if (keepListening) listenAndRespond();
        
    };
}

function startListening() {
    keepListening = true;
    speak("Hi I am Saul Goodman, your lawyer. Stay calm and tell me your problem.", () => {
        listenAndRespond();
    });
} */
let keepListening = true;

function speak(text, callback = null) {

    const synth = window.speechSynthesis;
    const utterThis = new SpeechSynthesisUtterance(text);

    synth.speak(utterThis);

    utterThis.onend = () => {
        if (callback) callback();
    };

    // Display spoken response
    const outputDiv = document.getElementById("output");

    const paragraph = document.createElement("p");

    paragraph.innerText = "🧑‍⚖️ " + text;

    outputDiv.appendChild(paragraph);
}

function listenAndRespond() {

    const recognition =
        new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.lang = "en-IN";

    recognition.start();

    recognition.onresult = (event) => {

        const query = event.results[0][0].transcript;

        // Bye command
        if (query.toLowerCase().includes("bye")) {

            speak(
                "If things go wrong, remember — Better Call Saul.",
                () => {
                    keepListening = false;
                }
            );

            return;
        }

        fetch("/get_section", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({ query })

        })

        .then(response => response.json())

        .then(data => {

            const outputDiv =
                document.getElementById("output");

            // User query card
            const crimeDiv =
                document.createElement("div");

            crimeDiv.style.marginTop = "15px";
            crimeDiv.style.padding = "10px";
            crimeDiv.style.border = "1px solid #ccc";
            crimeDiv.style.borderRadius = "8px";
            crimeDiv.style.backgroundColor = "#f9f9f9";

            const queryP =
                document.createElement("p");

            queryP.innerHTML =
                `👤 <strong>You said:</strong> ${query}`;

            crimeDiv.appendChild(queryP);

            outputDiv.appendChild(crimeDiv);

            // Speak + display assistant response
            speak(data.response, () => {

                if (keepListening) {
                    listenAndRespond();
                }

            });

        });
    };

    recognition.onerror = () => {

        if (keepListening) {
            listenAndRespond();
        }
    };
}

function startListening() {

    keepListening = true;

    speak(
        "Hi I am Saul Goodman, your lawyer. Stay calm and tell me your problem.",
        () => {
            listenAndRespond();
        }
    );
}

