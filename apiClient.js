// lib/apiClient.js

import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const apiClient = axios.create({
  baseURL: publicRuntimeConfig.API_BASE_URL,
});

export default apiClient;
