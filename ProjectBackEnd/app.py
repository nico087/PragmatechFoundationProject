from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config ['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///products.sqlite3'

db = SQLAlchemy(app)

class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    product_title = db.Column(db.String(80), nullable=False)
    image = db.Column(db.String(80), nullable=False)




@app.route('/')
def index():
    return render_template('index.html')
    

@app.route('/account')
def account():
    return render_template('account.html')


@app.route('/products')
def products():
    return render_template('products.html')

@app.route('/product_details')
def product_details():
    return render_template('product_details.html')


@app.route('/shop_cart')
def shop_cart():
    return render_template('shop_cart.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')


if __name__ == '__main__':
    app.run(debug=True)