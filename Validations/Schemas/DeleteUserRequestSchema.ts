import * as Joi from '@hapi/joi'
import {ValidatedRequestSchema,ContainerTypes,} from 'express-joi-validation'

export interface UserDeleteRequestSchema extends ValidatedRequestSchema {
   [ContainerTypes.Body]: {
      id: string,
   }
}

export const DeleteRequestSchema = Joi.object({
    id: Joi.string().required().label('Id Required to Delete a User'),
 })