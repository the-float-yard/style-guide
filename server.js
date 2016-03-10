var express = require('express')
var app = express()
var port = 1234

app.use(require('connect-livereload')())

app.use('/css', express.static(__dirname + '/css'))
app.use('/bower_components', express.static(__dirname + '/bower_components'))
app.use('/js', express.static(__dirname + '/js'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})


app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
