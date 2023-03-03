import * as Joi from 'joi';
// prettier-ignore

export const TodoSchema = Joi.object({
  title: Joi.string().min(2).trim().required(),
  isDone: Joi.boolean().required(),
  groupId: Joi.string().min(2).trim().optional(),
});
