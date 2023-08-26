from flask import Flask, render_template, request

app = Flask(__name__)

# Run "flask run --debug" to start server at port 5000

@app.route("/api/tutees")
def home():
    return "Hello, world!"

@app.route("/predict")
def modelPredict():
    input_text = [
    "Today's tutoring session was truly rewarding. ... a resounding success.",
    "I'm thrilled by my tutee's progress in essay structuring. ... promising step forward.",
    "The chemistry review session was a pleasant surprise. ... truly motivating.",
    "I had a terrible session today with my tutee. Their progress is inspiring.",
    "Unfortunately, today's session didn't go well. My tutee seemed disengaged."
    # ... (more training examples)
]
    d = model.predict(input_text)
    print(d)
    return "asdf"