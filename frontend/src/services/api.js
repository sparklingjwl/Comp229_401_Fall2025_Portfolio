const API_BASE_URL = 'http://localhost:5000/api';

// Helper function for API requests
const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  
  const config = {
    headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }), 
    }, 
    ...options,
};

if (config.body && typeof config.body === 'object') {
    config.body = JSON.stringify(config.body);
}

try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }

    return data;
} catch (error) {
    console.error('API request error:', error);
    throw error;
    }
};

// Contact Services
export const contactService = {
  create: async (contactData) => {
    return await apiRequest('/contacts', {
      method: 'POST',
      body: contactData,
    });
  },
};

export default {
  contact: contactService,
};