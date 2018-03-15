#! /usr/bin/env python3
# -*- coding: utf-8 -*-
#---------------------------------------------
# Copyright:   (c) Cesar Herdenez 2018
# Licence:     BSD 3-Clause License
#---------------------------------------------

from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS

from config import Development

app = Flask(__name__)
# cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
CORS(app)
app.config.from_object(Development)
socketio = SocketIO(app)

