import pickle
from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Load JSON data once at the start
with open('bns_sections.json', 'r', encoding='utf-8') as file:
    bns_data = json.load(file)

# Load ML model
with open("model.pkl", "rb") as file:
    model = pickle.load(file)

with open("vectorizer.pkl", "rb") as file:
    vectorizer = pickle.load(file)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/get_section', methods=['POST'])
def get_section():
    user_input = request.json.get('query', '').lower()

    # Handle bye case
    if "bye" in user_input:
        return jsonify({"response": "If things go wrong, remember - Better Call Saul."})

    # Convert text → numbers
    input_vector = vectorizer.transform([user_input])

    # Predict crime label using ML model
    predicted_label = model.predict(input_vector)[0]

    # Fetch data from JSON
    if predicted_label in bns_data:
        data = bns_data[predicted_label]

        description = data.get("description", "")
        sections = "\n".join(data.get("sections", []))
        advice = "\n".join(data.get("what_to_do", [])) if "what_to_do" in data else ""

        full_response = f"{description}\n\n{sections}"

        if advice:
            full_response += f"\n\nWhat to do:\n{advice}"

        return jsonify({"response": full_response})

    return jsonify({"response": "Sorry, no legal section found."})

if __name__ == '__main__':
    app.run(debug=True)








"""from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

ipc_data = {
    "theft": "Section 379 IPC - Punishment: up to 3 years imprisonment or fine or both.",
    "acid attack": "Section 326A IPC - Punishment: Minimum 10 years to life imprisonment.",
    "murder": "Section 302 IPC - Punishment: Death or life imprisonment and fine.",
    "not filing fir": "BNSS Section 173(3) - Complain to SP or Magistrate if FIR is refused.",
    "ok bye": "If things go wrong, remember — Better Call Saul."
}

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/get_section', methods=['POST'])
def get_section():
    data = request.json
    query = data.get("query", "").lower()
    response = "Sorry, I could not find any legal section for that."

    for key in ipc_data:
        if key in query:
            response = ipc_data[key]
            break

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)"""
"""from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

# Load data from JSON file
with open("bns_sections.json", "r", encoding="utf-8") as file:
    bns_data = json.load(file)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/get_section', methods=['POST'])
def get_section():
    data = request.json
    query = data.get("query", "").lower()
    response = "Sorry, I could not find any legal section for that."

    for key in bns_data:
        if key in query:
            response = bns_data[key]
            break
    
    print("User query:", query)
    print("Response:", response)

    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)"""





