const model = require('../models/url_model')

const get_code_from_url = async (request, reply) => {
    const url = request.payload.URL;
    var cnt = await model.count({
        raw: true,
        where: {
            link: url
        }
    });
    if (cnt == 0) {
        const code = await get_code()
        await model.create({
            code: code,
            link: url
        })
        return {
            shortened_url: `${process.env.FRONT_END_URL}/${code}`
        }
    }
    else {
        const url_data = await model.findOne({
            raw: true,
            where: {
                link: url
            }
        })
        return {
            shortened_url: `${process.env.FRONT_END_URL}/${url_data.code}`
        }
    }
    return {
        url: url,
        count: cnt
    };
}

async function get_code() {
    let r = require('crypto').randomBytes(6).toString('hex')
    let count = await model.count({
        where: {
            code: r
        }
    })
    if (count > 0) {
        get_code()
    }
    else {
        return r
    }
}

module.exports = get_code_from_url