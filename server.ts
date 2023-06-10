import express from 'express';
import 'dotenv/config'
import attendanceRouter from './routes/attendance';
import studentRouter from './routes/student';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/serverHealth', (_req, res) => res.send("Server is working fine"));

app.use('/attendance', attendanceRouter);

app.use('/student', studentRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));