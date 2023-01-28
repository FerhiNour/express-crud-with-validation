const isEmpty = require("./isEmpty")
const validator= require('validator')

module.exports= function validateUser(data){
    let errors= {}
    data.email= !isEmpty(data.email)? data.email: ""
    data.firstName= !isEmpty(data.firstName)? data.firstName: ""
    data.lastName= !isEmpty(data.lastName)? data.lastName: ""
    data.age= !isEmpty(data.age)? data.age: ""

    if(!validator.isEmail(data.email)){
        errors.email= "Format Email Required"
    }

    if(validator.isEmpty(data.email)){
        errors.email= "Required Email"
    }
    
    if(validator.isEmpty(data.firstName)){
        errors.firstName= "Required firstName"
    }

    if(validator.isEmpty(data.lastName)){
        errors.lastName= "Required lastName"
    }

    if(validator.isEmpty(data.age)){
        errors.age= "Required age"
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}