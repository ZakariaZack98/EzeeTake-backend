const Joi = require('joi');

exports.validateUser = (req) => {
  const schema = Joi.object({
    username: Joi.string()
      .trim()
      .min(2, 'Minimum 2 characters required')
      .required(),
    email: Joi.string()
      .trim()
      .email()
      .required(),
    avatar: Joi.string()
      .trim(),
    password: Joi.string()
      .trim()
      .min(8, 'minimum length of password is 8')
      .max(24, 'maximum length of password is 24')
      .required()
  });

  return schema.validate(req);
};