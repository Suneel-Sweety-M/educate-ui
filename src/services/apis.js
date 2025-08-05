import axios from "axios";

const { REACT_APP_API_URL } = process.env;

export const API = axios.create({
  baseURL: REACT_APP_API_URL,
  responseType: "json",
  withCredentials: true, // Include cookies in requests
});

export const apiRequest = async ({ url, data, method }) => {
  try {
    const result = await API(url, {
      method: method || "GET",
      data: data || {},
    });

    return result?.data;
  } catch (error) {
    const err = error.response.data;
    console.log(err);
    return { status: "fail", message: err.message };
  }
};

// ================================

// Authentication API calls - Sujatha & Vamsi

// Course-related API calls - Krishna Priya & Venky

// Lecture-related API calls - Muni

// Payment-related API calls - Satish 

// Career-related API calls - Bhargavi & Suneel

// User-related API calls - 

// Notification-related API calls - 

// Feedback-related API calls -

// Analytics-related API calls -

// Admin-related API calls -

