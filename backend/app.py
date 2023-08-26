from flask import Flask

app = Flask(__name__)

# Run "flask run --debug" to start server at port 5000

@app.route("/")
def home():
    return "Hello, world!"