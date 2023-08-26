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
    "Unfortunately, today's session didn't go well. My tutee seemed disengaged.",
    "I had a great session with my tutee. They seemed interested and is willing to go the extra step to learn how differentiation actually works.",
    "I had a fine session with my tutee. He seemed to be somewhat engaged and puts is some effort to really understand the steps needed to do the math problem that he was struggling in.",
    "I'm ecstatic about my tutee's progress in Organic Chemistry. As after a week of guidance, she is finally able to understand alkenes, alkanes, and carboxylic acids."
    # ... (more training examples)
]
    d = model.predict(input_text)
    print(d)
    return "asdf"
