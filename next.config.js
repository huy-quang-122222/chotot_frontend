require('dotenv').config();

module.exports = {
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL || 'http://localhost:8000/api/',
  },
};
