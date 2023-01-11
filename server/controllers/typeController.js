const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

class TypeController {
    async create(reg, res){
        const{name}=reg.body
        const type = await Type.create({name})
        return res.json(type)

    }
    async getAll(reg, res){
        const types = await Type.findAll()
        return res.json(types)

    }
}
module.exports = new TypeController()