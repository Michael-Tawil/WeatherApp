import { create } from "zustand";
import axios from "axios";

const API_KEY = '9d5ca831ac58467db48104040230808';
const BASE_URL = 'https://api.weatherapi.com/v1';

const useWeatherStore = create((set, get) => ({
    currentWeather: null,
    forecast: null,
    loading: false,
    error: null,
    searchHistory: [],
    unit: 'celsius',

    getCurrentWeather: async (city) => {
        set({ loading: true, error: null })

        try {
            const resposne = await axios.get(
                `${BASE_URL}/current.jsoon?key=-${API_KEY}&q=${city}&aqi=no`
            )
            set({
                currentWeather: resposne.data,
                loading: false,
                error: null
            })

            const { searchHistory } = get();
            const newHistory = [city, ...searchHistory.filter(item => item !== city)].slice(0, 5)
            set({ searchHistory: newHistory })

        } catch (error) {
            set({
                loading: false,
                error: error.resposne?.data?.error?.messaage || 'City not found. Please try again.',
                currentWeather: null
            })

        }
    },

    getForecast: async (city, days = 5) => {
        set({ loding: true, error: null })

        try {

            const response = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=no`)

            set({
                forecast: response.data,
                loading: false,
                error: null
            })

        } catch (error) {
            set({
                loading: false,
                error: error.response?.data?.error?.messaage || 'Failedd to load forecast',
                forecast: null
            })

        }
    },

    toggleUnit: ()=>{
        const {unit} = get();
        set({
            unit:unit === 'celsius' ? 'fahrenheit' : 'celsius'
        })
    },

    clearError: () => {
        set({ error: null });
    },

    clearWeatherData: () => {
        set({
            currentWeather: null,
            forecast: null,
            error: null
        });
    }

}))