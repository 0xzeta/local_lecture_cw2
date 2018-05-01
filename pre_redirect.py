from flask import Flask, redirect, url_for, abort, request
app = Flask (__name__)

@app.route("/")
def private():
   return "Hello Napier"

@app.route("/force404")
def force404():
   abort(404)
   
@app.errorhandler(404)
def page_not_found(error):
   return "404 error",404

@app.route('/static-example/img')
def static_example_img():
    start = '<img src="'
    url = url_for('static', filename='vmask.jpg')
    end = '">'
    return start+url+end, 200

@app.route("/account/", methods=['GET', 'POST'])
def account():
    if request.method == 'POST':
       return "POST'ed to /account root\n"
    else:
       return "GET /account root"

#Request form data
@app.route("/user/", methods=['GET', 'POST'])
def user():
    if request.method == 'POST':
       print(request.form) #wil show in server side
       name = request.form['name'] #will show in website
       return "Hello %s" % name
    else:
       page = '''
    <html ><body >
    <form action="" method="post" name="form">
    <label for="name">Name:</label >
    <input type="text" name="name" id="name"/>
    <input type="submit" name="submit" id="submit"/>
    </form >
    </body ><html >'''
       return page

#URL parameters
@app.route("/hello/a/")
def parameter():
    name = request.args.get('name', '')
    if name == '':
      return "no param supplied"
    else:
      return "Hello %s" % name

      
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
