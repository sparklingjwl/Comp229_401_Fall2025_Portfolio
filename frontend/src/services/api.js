// API service - Controlled service for all backend API calls
// Handles authentication, headers, and error hadling consistently
// Base URL: http://localhost:5000/api

const API_BASE_URL = 'http://localhost:5000/api';

// Helper function for API requests
// Automatically handles JWT tokens and request formatting
const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: { // Set headers for the request
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }), 
    }, 
    ...options,
};

// Stringify body if it's an object  (for POST/PUT requests)
if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body);
}

try {  // Make the API request
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {  // Handle HTTP errors
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return data;
} catch (error) {  // Handle network or other errors
    console.error('API request error:', error);
    throw error;
    }
};

// Contact Services - Handles contact-related API calls
export const contactService = {

  // Create new contact - used by contact form
  create: async (contactData) => {
    return await apiRequest('/contacts', {
      method: 'POST',
      body: contactData,
    });
  },
};

// Export all services for easy importing
export default {
  contact: contactService,
};