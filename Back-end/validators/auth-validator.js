const { z } = require("zod");
const User = require("../models/user-models");

//creting signup scheme
const signupSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least 3 Characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),

    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "Invalid Email address" })
        .min(3, { message: "email must be at least 3 Characters" })
        .max(255, { message: "email must not be more than 255 characters" }),

    phone: z
        .string({ required_error: "phone is required" })
        .trim()
        .min(10, { message: "phone must be at least 10 Characters" })
        .max(20, { message: "phone must not be more than 20 characters" }),

    password: z
        .string({ required_error: "password is required" })
        .trim()
        .min(7, { message: "password must be at least 7 Characters" })
        .max(1024, { message: "password must not be more than 1024 characters" }),
});

const loginSchema = z.object({
    email: z
        .string({ required_error: "email is required" })
        .trim()
        .email({ message: "Invalid Email address" })
        .min(3, { message: "email must be at least 3 Characters" })
        .max(255, { message: "email must not be more than 255 characters" }),

    password: z
        .string({ required_error: "password is required" })
        .trim()
        .min(7, { message: "password must be at least 7 Characters" })
        .max(1024, { message: "password must not be more than 1024 characters" }),

})

module.exports = {signupSchema, loginSchema};