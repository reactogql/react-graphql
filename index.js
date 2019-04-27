const app = require("./server/server");
var port = normalizePort(process.env.PORT || 4000);

app.listen(port, () => {
  console.log("Listening port: " + port);
});

function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}
