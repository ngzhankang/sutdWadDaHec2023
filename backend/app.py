from flask import Flask, render_template, request

app = Flask(__name__)

# Run "flask run --debug" to start server at port 5000

@app.route("/api/tutees")
def home():
    return "Hello, world!"

if __name__ == "__main__":
    app.run(debug=True)