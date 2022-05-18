#!/bin/sh
export FLASK_APP=./backend/index.py
source venv/bin/activate
flask run -h 0.0.0.0
