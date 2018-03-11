#! /usr/bin/env python3
# -*- coding: utf-8 -*-
#---------------------------------------------
# Copyright:   (c) Cesar Herdenez 2018
# Licence:     BSD 3-Clause License
#---------------------------------------------

from flask import Flask, render_template
from flask_socketio import SocketIO, emit

from config import Development

app = Flask(__name__)
app.config.from_object(Development)
socketio = SocketIO(app)

