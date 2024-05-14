from flask import Flask, request, jsonify
from Img2text import img2text
from solver import solve
import os
from werkzeug.utils import secure_filename
from flask_cors import CORS
import random
def GetRandomWord(filename="words.txt"):
    words = []
    try:
        with open(filename, "r") as file:
            words = file.readlines()
    except FileNotFoundError:
        print(f"File '{filename}' not found.")
    words = [word.strip() for word in words]

    arr = []
    for i in [1, 2, 3, 4, 5]:
        # Call insert method with index and value
        arr.insert(i - 1, f"{str(i)} {random.choice(words)}")  # Adjust index for 0-based indexing

    return arr

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER



def proccessRequest(path):
    text = img2text(path)
    solution = solve(text)
    #os.remove(path)
    return solution



@app.route('/upload', methods=['POST'])
def upload_image():
    if 'image' not in request.files:
        return jsonify({'error': 'Missing message or image'}), 400

    image = request.files['image']
    #filename = secure_filename(image.filename)
    #image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)

    try:
        #image.save(image_path)
        solved = proccessRequest(image)
        print(solved)
        print("image processed done")
        
        print("returning it")
        return solved
       
    except Exception as e:
        return str(e), 500
@app.route('/word', methods=['POST'])
def word():
    word=GetRandomWord()
    return jsonify(word)

@app.route('/message', methods=['POST'])
def message():
    if 'message' not in request.form:
        return 'Missing message', 400

    message = request.form['message']
    print(message)

    try:
        print(message)
        solved = solve(message)
        print("message processed done")

        return solved

    except Exception as e:
        print(f"Error : {e}")
        return str(e)



if __name__ == '__main__':
    app.run(debug=True)
