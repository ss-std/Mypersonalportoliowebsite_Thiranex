// ==========================================
// 🎨 API CLIENT & HTTP SERVICE LAYER
// Developer: Shahbaz Shafi
// Description: Centralized Axios instance for 
// communicating with the backend Express server.
// ==========================================

import axios from 'axios';

// Detect base API URL: In production, points to deployed backend URL.
// In local dev, defaults to '/api' which Vite proxies to http://localhost:5000.
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 10 seconds timeout
});

/**
 * Fetch all projects from the backend database.
 * Supports optional ?featured=true query parameter.
 */
export const getProjects = async (featured = false) => {
  const endpoint = featured ? '/projects?featured=true' : '/projects';
  return await apiClient.get(endpoint);
};

/**
 * Fetch all skills from the backend database.
 */
export const getSkills = async () => {
  return await apiClient.get('/skills');
};

/**
 * Submit contact message to the backend.
 * @param {Object} messageData - { name, email, subject, message }
 */
export const submitContact = async (messageData) => {
  return await apiClient.post('/contact', messageData);
};

export default apiClient;
