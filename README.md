# AI Legal Awareness Assistant with Machine Learning

## Project Overview

AI Legal Awareness Assistant is a voice-enabled web application that helps users identify relevant Bharatiya Nyaya Sanhita (BNS) sections based on legal complaints. Users can describe an incident through voice input, and the system predicts the crime category using a Machine Learning model and displays the corresponding legal information.

The project was developed to improve legal awareness and provide quick access to relevant legal sections in a simple and interactive manner.

---

## Features

* Voice-based complaint input
* Speech-to-text conversion using browser Speech Recognition
* Machine Learning-based crime prediction
* Displays relevant BNS sections
* Provides legal description and guidance
* Voice response using Text-to-Speech
* User-friendly web interface
* Deployed online using Render

---

## Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Python
* Flask

### Machine Learning

* Scikit-learn
* TF-IDF Vectorizer
* Logistic Regression

### Deployment

* Git
* GitHub
* Render

---

## Project Workflow

1. User clicks the "Start Speaking" button.
2. Browser captures voice input using Speech Recognition.
3. JavaScript sends the complaint to the Flask backend using a POST API request.
4. Flask receives the complaint text.
5. TF-IDF Vectorizer converts complaint text into numerical features.
6. The trained Logistic Regression model predicts the crime category.
7. Flask retrieves the corresponding BNS information from the JSON dataset.
8. The response is returned to the frontend in JSON format.
9. The legal information is displayed and spoken back to the user.

---

## Machine Learning Model

Machine Learning Model

- Algorithm: Logistic Regression
- Text Vectorization: TF-IDF Vectorizer
- Library: Scikit-learn
- Purpose: Classifies legal complaints into predefined crime categories.

  * Theft
  * Robbery
  * Assault
  * Chain Snatching
  * Acid Attack
  * Domestic Violence
  * Kidnapping
  * Murder
  * Harassing Witness

---

## API Endpoint

### Predict Legal Section

POST /get_section

Request:

```json
{
  "query": "Someone stole my mobile phone"
}
```

Response:

```json
{
  "response": "Relevant BNS Sections..."
}
```

---

## Project Structure

```text
AI-Legal-Awareness-Assistant/
│
├── app.py
├── model.pkl
├── vectorizer.pkl
├── bns_sections.json
├── requirements.txt
│
├── templates/
│   └── index.html
│
├── static/
│   ├── script.js
│   └── style.css
│
└── README.md
```

---

## Future Enhancements

* Improve prediction accuracy with larger datasets
* Add multilingual support
* Integrate advanced NLP models
* Provide downloadable legal reports
* Add user authentication and case history

---

## Author

S. VijayBaskar

B.Sc. Computer Science

PSG College of Arts and Science

GitHub: https://github.com/vijaybaskar2005

Click the Website Link To Experience the website. Say crime query like "Someone steal my phone,someone beats him,The person snatched her chain,He Killed him,he throws acid on his face,etc" to know The Relevent BNS Sections for those crimes. Then Say "bye" to end the Conversation
Website Link: https://artificial-intelligence-voice-assistant.onrender.com/
