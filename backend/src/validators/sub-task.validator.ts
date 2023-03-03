import * as Joi from 'joi';
// prettier-ignore

export const SubTaskSchema = Joi.object({
  title: Joi.string().min(2).trim().required(),
  isDone: Joi.boolean().required(),
  todoId: Joi.string().min(2).optional()
});
