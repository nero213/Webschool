import { body } from "express-validator";

export const registerValidators = [
  body("username").isString().isLength({ min: 3 }),
  body("email").isString().isEmail().normalizeEmail().isLength({ min: 6 }),
  body("password")
    .isLength({ min: 6 })
    .withMessage("please input yout password"),
];

export const loginValidators = [
  body("email").isString().isEmail().normalizeEmail().isLength({ min: 6 }),
  body("password").isLength({ min: 6 }).notEmpty(),
];
