import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const signToken = (user) =>
  jwt.sign(
    { id: user._id, email: user.email, name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

const cookieOpts = {
  httpOnly: true,
  sameSite: 'lax',   // 本地调试
  secure: false,     // 部署到 https 要改成 true
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: 'name, email, password are required' });

  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: 'Email already registered' });

  const now = new Date();
  const user = await User.create({ name, email, password, created: now, updated: now });

  const token = signToken(user);
  res.cookie('token', token, cookieOpts);
  res.status(201).json({ id: user._id, name: user.name, email: user.email });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'email and password are required' });

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const ok = await user.comparePassword(password);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

  const token = signToken(user);
  res.cookie('token', token, cookieOpts);
  res.json({ id: user._id, name: user.name, email: user.email });
};

export const me = async (req, res) => {
  const user = await User.findById(req.user.id).select('_id name email');
  res.json(user);
};

export const logout = async (_req, res) => {
  res.clearCookie('token', { ...cookieOpts, maxAge: 0 });
  res.json({ ok: true });
};
