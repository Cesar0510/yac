
from app import app,socketio
from flask_socketio import send,emit
from flask_socketio import join_room, leave_room

from flask import render_template

@socketio.on('connect')
def handler_connect():
    print('ON => connect')

@socketio.on('register')
def handler_message(message):
    print('on register\nreceived message:' + str(message))

@socketio.on('message')
def handler_message(message):
    if len(message) > 0:
        emit('chat message', message)
        print('==> message\nreceived message:' + str(message))

@app.route('/')
def homepage():
    return render_template('index.html')
