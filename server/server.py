from flask import Flask, jsonify, render_template,request

import webbrowser
import time
import random


app = Flask(__name__)

@app.route('/_stuff', methods = ['GET'])

def stuff():
    response = jsonify(result = random.randint(0,10))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@app.route('/')
def index():
    return render_template('index.html')

if __name__=='__main__':
    app.run()
