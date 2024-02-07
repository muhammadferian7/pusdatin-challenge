const model = require('../../../models')
const { genSalt, hash, compareSync } = require('bcrypt')

const cryptPassword = async (password) => {
    const salt = await genSalt(12)
    
    return hash(password, salt)
}


module.exports = {
    register: async (req, res) => {
        try {
            const isEmailExist = await model.user.findOne({
				where: {
					email: req.body.email,
				}
			})

			if (isEmailExist) throw new Error("Email already registered!")

            const data = await model.user.create({
                FirstName : req.body.FirstName,
                LastName : req.body.LastName,
                email : req.body.email,
                username: req.body.username,
                password : await cryptPassword(req.body.password),
            })

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "user successfully registered",
                "data" : data
            })

        } catch (error) {
            return res.status(500).json({
                "success" : false,
                "error" : error.code,
                "message" : error,
                "data" : null
            })
        }
    },
    login: async (req, res) => {
        try {
            const userExists = await model.user.findOne({
                where: {
                    username : req.body.username
                }
            })
        
            if(!userExists)
                return res.status(404).json({
                    "success" : false,
                    "error" : 404,
                    "message" : 'user not found',
                    "data" : null
                })
            
            if (compareSync(req.body.password, userExists.password)) {
                
                return res.status(200).json({
                    "success" : true,
                    "error" : 0,
                    "message" : "user successfully login",
                    "data" : userExists
                })
            }
            
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                "success" : false,
                "error" : error.code,
                "message" : error,
                "data" : null
            })
        }
    },
    update: async (req, res) => {
        try {
            const data = await model.user.update(req.body,
            {
                where: {
                    id: req.params.id
                }
            })

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "data success update",
                "data" : data
            })

        } catch (error) {
            return res.status(500).json({
                "success" : false,
                "error" : error.code,
                "message" : error,
                "data" : null
            })
        }
    },
    destroy:  async (req, res) => {
        try {
            const data = await model.user.destroy({
                where: {
                    id: req.params.id
                }
            })

            return res.status(200).json({
                "success" : true,
                "error" : 0,
                "message" : "data success delete",
                "data" : data
            })
            
        } catch (error) {
            return res.status(500).json({
                "success" : false,
                "error" : error.code,
                "message" : error,
                "data" : null
            })
        }
    }
}