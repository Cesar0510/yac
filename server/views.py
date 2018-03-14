
from app import app,socketio
from flask_socketio import send,emit
from flask_socketio import join_room, leave_room

from flask import render_template

users = set()


@socketio.on('connect')
def handler_connect():
    print('ON => connect')


@socketio.on('disconnect')
def handler_disconnect():
    print('OFF => disconnect')

@socketio.on('register')
def handler_register(message):
    print('on register\nreceived message:' + str(message))

@socketio.on('message')
def handler_message(message):
    print(users)
    print('==> message\n\t' + str(message))
    user = message.get('username','')
    if not user in users:
        users.add(user)
        message.setdefault('register',True)

    if len(message) > 0:
        emit('chat message', message, broadcast=True)
        print('==> message\n\treceived message:' + str(message))

@app.route('/')
def homepage():
    return render_template('index.html')
