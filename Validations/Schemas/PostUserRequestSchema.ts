import * as Joi from '@hapi/joi'
import {ValidatedRequestSchema,ContainerTypes,} from 'express-joi-validation'

export interface UserPostRequestSchema extends ValidatedRequestSchema {
    [ContainerTypes.Body]: {
       id: string,
       login: string,
       password: string,
       age: number,
       isDeleted: boolean
    }
 }
 export const PostRequestSchema = Joi.object({
    id: Joi.string().required(),
    login: Joi.string().required().messages({
       'string.base': `"login" should be a type of 'text'`,
       'string.empty': `"login" cannot be an empty field`,
       'any.required': `"login" is a required field`
    }),
    password: Joi.string().regex(RegExp('^[a-zA-Z0-9]*$')).required().label('password must contain letters and numbers'),
    age: Joi.number().min(4).max(130).required().label('user’s age must be between 4 and 130'),
    isDeleted: Joi.bool().required()
 })