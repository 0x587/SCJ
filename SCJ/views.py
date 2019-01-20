"""
Routes and views for the flask application.
"""

from datetime import datetime
from flask import render_template, request
from SCJ import app


@app.route(r'/')
@app.route(r'/home_zh')
def home_zh():
    return render_template('Home_zh.html')


@app.route(r'/home_en')
def home_en():
    return render_template('Home_en.html')


@app.route(r'/login_zh')
def login_zh():
    return render_template('Login_zh.html')


@app.route(r'/school_zh')
def school_data_zh():
    name = request.args['name']
    return render_template('School_zh.html', name=name)


@app.route(r'/test')
def test():
    back = request.args
    print(back)
    return '1'


if __name__ == '__main__':
    app.run(debug=True)
