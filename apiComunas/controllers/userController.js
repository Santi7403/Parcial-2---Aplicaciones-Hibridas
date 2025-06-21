import User from '../models/User.js'; 
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'El usuario ya existe con este email.' });
        }
        const newUser = await User.create({ username, email, password }); 

        if (newUser) {
            res.status(201).json({
                _id: newUser._id,
                username: newUser.username,
                email: newUser.email,
                role: newUser.role, 
                message: 'Registro exitoso'
            });
        } else {
            res.status(400).json({ message: 'Datos de usuario inválidos.' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Credenciales inválidas.' }); 
        }

        const isMatch = await user.comparePassword(password); 
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciales inválidas.' }); 
        }

        const token = generateToken(user._id); 
        res.status(200).json({
            token,
            user: { id: user._id, username: user.username, email: user.email, role: user.role }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const userController = {
    register,
    login
};

export default userController; 