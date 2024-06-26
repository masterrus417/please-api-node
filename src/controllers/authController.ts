import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { jwtSecret, jwtExpiry } from "../config/JWTconf";
import UserRequestBody from "../interface/bodyAuth";
import { modelsAuth } from "../config/database";

const { auth_user } = modelsAuth;

// Регистрация нового пользователя
export const registerUser = async (
  req: Request<UserRequestBody>,
  res: Response
): Promise<void> => {
  const { username, password, email, first_name, last_name } = req.body;
  try {
    // Проверка наличия пользователя с таким же именем пользователя или email
    const existingUser = await auth_user.findOne({ where: { username } });
    const existingEmail = await auth_user.findOne({ where: { email } });

    if (!username || !password || !email) {
      res
        .status(400)
        .json({ error: "Username, password, and email are required" });
      return;
    }

    if (existingUser) {
      res.status(400).json({ error: "Username already exists" });
      return;
    }

    if (existingEmail) {
      res.status(400).json({ error: "Email already exists" });
      return;
    }
    // Создание нового пользователя
    const newUser = await auth_user.create({
      username,
      password,
      email,
      first_name,
      last_name,
      is_superuser: false,
      is_staff: false,
      is_active: true,
      date_joined: new Date(),
      where_come: "node js backend",
    });

    const customResponse = {
      username: newUser.username,
      email: newUser.email,
      state: "Registred success",
    };

    res.status(201).json(customResponse);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
    console.log(error);
  }
};

// Аутентификация пользователя
export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const user = await auth_user.findOne({ where: { username } });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      jwtSecret,
      { expiresIn: jwtExpiry }
    );

    res.json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
