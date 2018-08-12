import app from './app';
import http from 'http';

var port = process.env.PORT || 3000;
app.set('port', port);

var server = http.createServer(app);

server.listen(port, () => {
    console.log("Server on running at port " , port);
});
