import axios from "axios";
import { API, API_KEY } from "../config/constants";


export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`${API}/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return {
                error: error.response.data.message || `Oops! We couldn't find the weather data". Please check the city name and try again.`
            };
        } else if (error.request) {
            return { error: 'Network error! Please check your internet connection and try again.' };
        } else {
            return { error: 'An unexpected error occurred. Please try again later.' };
        }
    }
};

export const fiveDayForcast = async (city) => {
    try {
        const response = await axios.get(`${API}/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        if (error.response) {
            return {
                error: error.response.data.message
            };
        } else if (error.request) {
            return { error: 'Network error! Please check your internet connection and try again.' };
        } else {
            return { error: 'An unexpected error occurred. Please try again later.' };
        }
    }
}