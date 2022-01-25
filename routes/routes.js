const controller = require('../controller/index')

const get_code = {
    method: "POST",
    path: "/get_code",
    handler: controller.get_code
}

const get_url = {
    method: "POST",
    path: "/get_url",
    handler: controller.get_url
}

module.exports = {
    get_code: get_code,
    get_url: get_url
}