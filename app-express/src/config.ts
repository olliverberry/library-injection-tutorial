import * as dotenv from 'dotenv';

dotenv.config();
const config = {
  server: {
    port: parseInt(process.env.PORT!, 10) || 3000,
  },
};

export default config;