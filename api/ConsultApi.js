// export default async function getConsultApi() {
//     const axios = require('axios');

//     try {
//         // Fetch location data
//         const locationResponse = await axios.get('https://geolocation-db.com/json/');
//         console.log("Location data:", locationResponse.data);

//         const { latitude, longitude, city, country_code: country } = locationResponse.data;

//         if (!latitude || !longitude) {
//             throw new Error("Invalid latitude or longitude retrieved from geolocation API.");
//         }

//         // Get current date and time
//         const date = new Date();
//         const hours = date.getHours() + ':' + String(date.getMinutes()).padStart(2, '0');

//         // Fetch weather data from WeatherStack
//         const weatherUrl = `http://api.weatherstack.com/current?access_key=d194e0f579aff2691e35ce8b7de17092&query=${latitude},${longitude}`;
//         const weatherResponse = await axios.get(weatherUrl);
//         const data = weatherResponse.data;

//         console.log("Weather data:", data);

//         // Extract current weather details with fallbacks
//         const temperature = data.current?.temperature ?? "N/A"; // Current temperature
//         const humidity = data.current?.humidity ?? "N/A"; // Humidity
//         const weatherIcon = data.current?.weather_icons?.[0] ?? ""; // Icon URL
//         const weatherDescription = data.current?.weather_descriptions?.[0] ?? "No description available"; // Weather condition
//         const windSpeed = data.current?.wind_speed ?? "N/A"; // Wind speed in km/h

//         // Prepare result
//         const result = {
//             country: country ?? "Unknown",
//             city: city ?? "Unknown",
//             hours,
//             temperature,
//             humidity,
//             weatherIcon,
//             weatherDescription,
//             windSpeed,
//         };

//         console.log("Result:", result); // Final result to verify

//         return result;
//     } catch (error) {
//         console.error("Error fetching weather data:", error.message);
//         return null;
//     }
// }

export default async function getConsultApi() {
    const axios = require('axios');

    try {
        // Fetch location data
        const locationResponse = await axios.get('https://geolocation-db.com/json/');
        console.log("Location data:", locationResponse.data);

        const { latitude, longitude, city, country_code: country } = locationResponse.data;

        if (!latitude || !longitude) {
            throw new Error("Invalid latitude or longitude retrieved from geolocation API.");
        }

        // Get current date and time
        const date = new Date();
        const hours = date.getHours() + ':' + String(date.getMinutes()).padStart(2, '0');

        // Fetch weather data from WeatherStack
        const weatherUrl = `http://api.weatherstack.com/current?access_key=d194e0f579aff2691e35ce8b7de17092&query=${latitude},${longitude}`;
        const weatherResponse = await axios.get(weatherUrl);
        const data = weatherResponse.data;

        console.log("Weather data:", data);

        // Extract current weather details with fallbacks
        const temperature = data.current?.temperature ?? "N/A"; // Current temperature
        const humidity = data.current?.humidity ?? "N/A"; // Humidity
        const weatherIcon = data.current?.weather_icons?.[0] ?? ""; // Icon URL
        const weatherDescription = data.current?.weather_descriptions?.[0] ?? "No description available"; // Weather condition
        const windSpeed = data.current?.wind_speed ?? "N/A"; // Wind speed in km/h

        // Prepare result
        const result = {
            country: country ?? "Unknown",
            city: city ?? "Unknown",
            hours,
            temperature,
            humidity,
            weatherIcon,
            weatherDescription,
            windSpeed,
        };

        console.log("Result:", result); // Final result to verify

        return result;
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        return null;
    }
}
