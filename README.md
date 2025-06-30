# 🌤️ Weather App

A modern, responsive weather application built with React that provides real-time weather information with dynamic backgrounds and dark mode support.

## ✨ Features

### Core Functionality
- **Real-time Weather Data** - Get current weather for any city worldwide
- **Dynamic Search** - Intelligent city search with auto-suggestions
- **Comprehensive Weather Info** - Temperature, humidity, wind speed, visibility, and more
- **Search History** - Quick access to recently searched cities
- **Unit Toggle** - Switch between Celsius and Fahrenheit

### Visual Experience
- **Dynamic Weather Backgrounds** - Background changes based on current weather conditions
  - Sunny weather: Warm yellow/orange gradients
  - Rainy weather: Cool blue/gray storm colors
  - Cloudy weather: Soft gray gradients
  - Night mode: Dark purple/indigo themes
- **Dark Mode Support** - Toggle between light and dark themes
  - Smart background switching (black when no data, weather-appropriate when loaded)
  - Persistent theme preferences
- **Smooth Animations** - Weather-based animations and transitions
- **Professional UI** - Clean, modern design with glassmorphism effects

### Technical Features
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Error Handling** - User-friendly error messages and fallback states
- **Loading States** - Smooth loading indicators
- **Data Persistence** - Settings and search history saved locally

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with Hooks
- **Build Tool**: Vite (fast development and building)
- **State Management**: Zustand with localStorage persistence
- **Styling**: Tailwind CSS with custom gradients
- **HTTP Client**: Axios for API requests
- **Icons**: Lucide React (consistent, scalable icons)
- **Weather API**: WeatherAPI.com

## 🎨 Key Features Breakdown

### Dynamic Weather Backgrounds
The app automatically changes its background based on current weather conditions:
- **Sunny/Clear**: Bright gradients (yellow to orange)
- **Cloudy**: Neutral gray gradients
- **Rainy**: Cool blue and gray storm colors
- **Night**: Dark purple and indigo themes

### Intelligent Dark Mode
- **No weather data**: Full black background for better UX
- **With weather data**: Maintains weather-appropriate background with dark cards

## 📱 Mobile Responsiveness

- **Mobile-first design** approach
- **Touch-friendly interface** with appropriate button sizes
- **Responsive layouts** that work on all screen sizes
- **Optimized performance** for mobile devices

## 🎯 Performance Optimizations

- **Vite bundling** for fast development and optimized builds
- **Zustand state management** for minimal re-renders
- **Axios interceptors** for efficient API calls
- **Tailwind CSS** for minimal CSS bundle size
- **React optimization** with proper state management

## 🔮 Future Enhancements

- [ ] 5-day weather forecast
- [ ] Hourly weather predictions
- [ ] Weather maps integration
- [ ] Severe weather alerts
- [ ] Weather comparison between cities
- [ ] Geolocation-based weather
- [ ] Progressive Web App (PWA) features
- [ ] Weather widgets for embedding

## 👤 Author

**Michael Tawil**

## Live Deployment

<>
