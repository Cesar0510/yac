
from app import app,socketio
from flask_socketio import send,emit
from flask_socketio import join_room, leave_room

from flask import render_template

users = set()

@socketio.on('connect')
def connectHandler(m=''):
    print('connect message => {0}'.format(m) )

@socketio.on('message')
def handle_message(message):
    print('received message: ' + str(message))

@socketio.on('chat message')
def chatHandler(message):
    users.add(message['users'])
    if len(message['data']) > 0:
        emit('chat message',message)
    print('received message: ' + str(message))

@socketio.on('echo')
def echoHanlder(message):
    emit('echo',message)





@app.route('/')
def homepage():
    return render_template('index.html')
