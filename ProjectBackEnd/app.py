from flask import Flask, render_template, request, redirect

app = Flask(__name__)


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


if __name__ == '__main__':
    app.run(debug=True)