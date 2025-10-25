
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '.env') });

import connectDB from './server/config/db.js';
import app from './server/express.js';


import contactRoutes from './server/routes/contactRoutes.js';
import projectRoutes from './server/routes/projectRoutes.js';
import qualificationRoutes from './server/routes/qualificationRoutes.js'; 
import userRoutes from './server/routes/userRoutes.js';
import authRoutes from './server/routes/authRoutes.js';
app.use('/api/auth', authRoutes);


app.use('/api/contacts',       contactRoutes);
app.use('/api/projects',       projectRoutes);
app.use('/api/qualifications', qualificationRoutes); 
app.use('/api/users',          userRoutes);


app.get('/', (_req, res) => res.send('Portfolio API is running'));


await connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/`));
