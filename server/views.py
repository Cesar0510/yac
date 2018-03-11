
from app import app,socketio
from flask_socketio import send,emit
from flask_socketio import join_room, leave_room

from flask import render_template

users = set()


@socketio.on('connect')
def connectHandler(message="Client on"):
    print('connect message: ' + str(message))


@socketio.on('message')
def handle_message(message):
    print('received message: ' + str(message))

@socketio.on('chat message')
def chatHandler(message):
    users.add(message['users'])
    if len(message['data']) > 0:
        emit('chat message',message)
    print('received message: ' + str(message))

@socketio.on('join')
def on_join(data):
    username = data['username']
    room = data['room']
    join_room(room)
    send(username + ' has entered the room.', room=room)

@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)
    send(username + ' has left the room.', room=room)


@app.route('/')
def homepage():
    return render_template('index.html')
