


from app import app
from flask import jsonify,request


users = set()


### Apirest
@app.route('/api/login',  methods=['POST'])
def loginHandler():
    data = request.get_json(force=True)

    if not data['username'] in users:
        users.add(data['username'])
        return jsonify(dict(register='true'))
    return jsonify(dict(register='false'))


@app.route('/')
def homepage():
    return jsonify({'data':'ok'}),200

