const hapi = require('@hapi/hapi');
const server = new hapi.Server({
    "host": process.env.HOST_SERVER || "localhost",
    "port": process.env.PORT_SERVER || 4040
});

module.exports = server