import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;
const isLocal = connectionString?.includes('localhost');

export const pool = new Pool({
  connectionString,
  ssl: isLocal ? undefined : { rejectUnauthorized: false },
  max: 3,
});
