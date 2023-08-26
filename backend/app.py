from flask import Flask

import joblib

app = Flask(__name__)
model = joblib.load("../model.sav")

# Run "flask run --debug" to start server at port 5000

@app.route("/")
def home():
    return "Hello, world!"

@app.route("/predict")
def modelPredict():
    d = model.get_params()['features']
    print(d)
    return ""

if __name__ == "__main__":
    app.run(debug=True)