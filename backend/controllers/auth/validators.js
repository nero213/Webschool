import { body } from "express-validator";

export const validators = [
  body("username").isString().isLength({ min: 3 }),
  body("email").isString().isEmail().normalizeEmail().isLength({ min: 6 }),
  body("password").isLength({ min: 6 }).withMessage("please input yout password"),
];
