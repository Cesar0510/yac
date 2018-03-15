


from app import app,socketio
from flask_socketio import emit
from flask import jsonify,request

## DB
users = set()
messages = list()

def get_all_messages():
    last = len(messages)
    if last < 10:
        return messages
    elif last < 20:
        return messages[10:]
    return messages[:-10]


####
@socketio.on('connect')
def handler_connect():
    print('ON => connect')


@socketio.on('disconnect')
def handler_disconnect():
    print('OFF => disconnect')


@socketio.on('message')
def handler_message(message):
    print('==> message\n\t' + str(message))
    if len(message) > 0:
        messages.append(
            {
                'message':message['username'],
                'username':message['message']
            }
        )
        emit('chat message', message, broadcast=True)
        print('==> message\n\treceived message:' + str(message))


### Apirest
@app.route('/api/login',  methods=['POST'])
def loginHandler():
    data = request.get_json(force=True)

    if not data['username'] in users and data['username'] :
        users.add(data['username'])
        print('registrando a => {}'.format(data['username']))
        return jsonify(
            dict(register='true',
                messages=get_all_messages()
                )
            )
    return jsonify(dict(register='false'))




@app.route('/')
def homepage():
    return jsonify({'data':'ok'}),200

