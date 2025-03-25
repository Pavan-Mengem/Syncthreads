import jwt from 'jsonwebtoken';
dotenv.config();
import {asyncHandler} from '../utils/asyncHandler.js';

import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

import User from '../models/user.model.js'; 

const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    // Find the user by username
    const user = await User.findOne({ username });
    console.log('User:', user);

    //console.log('Password Match:', await bcrypt.compare(password, user.password));
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(403).json({ message: "Invalid username or password" });
    }

    // Generate JWT token
    const Token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });

    // Add access token to user details
    const response = {
        ...user.toJSON(),
        Token
    };

    return res.status(200).json({ message: 'Logged in successfully', response });
});

const register = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (user) {
        return res.status(403).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create a new user
    const newUser = new User({
        username,
        password: hashedPassword,
    });
    await newUser.save();
    const Token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    }); 
    const response = {
        ...newUser.toJSON(),
        Token
    };
    return res.status(200).json({ message: 'User registered successfully', response });
})

export { login , register };





