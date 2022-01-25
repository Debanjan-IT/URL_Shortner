const model = require('../models/url_model')

const get_url_from_code = async (request, reply) => {
    const url = request.payload.URL
    const code = url.split('/').pop()
    const count = await model.count({
        where: {
            code: code
        }
    })
    if (count > 0){
        const url_data = await model.findOne({
            raw: true,
            where: {
                code: code
            }
        })
        return {
            url: url_data.link
        }
    }
    else {
        return {
            status: "No url found Check the url provided."
        }
    }
}
module.exports = get_url_from_code