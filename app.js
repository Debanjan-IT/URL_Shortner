const server = require('./config/server');
const routes = require('./routes/routes');
require('dotenv').config();


const init = async () => {
    await server.start();
    console.log(`Server started at ${server.info.uri}`)

    server.route(routes.get_code)
    server.route(routes.get_url)
}

init()