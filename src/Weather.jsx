import { useEffect, useState } from 'react';
import { WiThermometer, WiStrongWind, WiDaySunny } from 'react-icons/wi';
import { FaCity } from 'react-icons/fa';

export default function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);


    const weatherDescriptions = {
        0: { description: "Ciel dégagé", image: "https://static6.depositphotos.com/1011549/559/i/450/depositphotos_5590404-stock-photo-clouds.jpg" },
        1: { description: "Légères nuages", image: "https://img.freepik.com/photos-premium/petits-nuages-legers-dans-ciel-bleu_696657-6144.jpg" },
        2: { description: "Nuages", image: "https://s.w-x.co/fr-nuages-chaleur.jpg" },
        3: { description: "Nuages éparpillés", image: "https://monde.ccdmd.qc.ca/media/image1024/130341.jpg" },
        45: { description: "Brouillard", image: "https://www.meteocontact.fr/uploads/lameteoenbref/brouillard.jpg" },
        48: { description: "Brouillard glacé", image: "https://img.freepik.com/photos-premium/paysage-forestier-enneige-glace-brouillard-froid-vue-aerienne_533998-11134.jpg" },
        61: { description: "Pluie légère", image: "https://cdn.pixabay.com/photo/2018/08/24/23/37/raindrops-3629132_1280.jpg" },
        63: { description: "Pluie", image: "https://images.unsplash.com/photo-1477764847759-5c173174e6f1" },
        65: { description: "Pluie forte", image: "https://www.leparisien.fr/resizer/KIOt7MxnfD7_wK78Q_us269ktAo=/arc-anglerfish-eu-central-1-prod-leparisien/public/NVEYXGDB2BC25AWCKYPENL2CAI.jpg" },
        80: { description: "Averses", image: "https://static.actu.fr/uploads/2024/09/670b1a24fd2667b0b1a24fd264f0b1v-960x640.jpg" },
        81: { description: "Averses fortes", image: "https://www.lavieeco.com/wp-content/uploads/2024/04/averses.jpeg" },
        95: { description: "Orage", image: "https://static.actu.fr/uploads/2023/09/eclairs-orages-meteo-france-960x640.jpeg" },
        99: { description: "Orage avec pluie", image: "https://static.actu.fr/uploads/2020/05/orages-pluies.jpeg" },

    };

    useEffect(() => {
        const latitude = 47.868008;
        const longitude = 2.133515;
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Problème pour récupérer la météo');
                }
                return response.json();
            })
            .then((data) => {
                setWeatherData(data.current_weather);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, []);

    if (error) {
        return <p>Erreur: {error}</p>;
    }

    if (!weatherData) {
        return <p>Chargement...</p>;
    }


    const weatherInfo = weatherDescriptions[weatherData.weathercode] || { description: "Condition inconnue", image: "" };

    return (
        <div
            className="relative w-[80%] pt-4 mt-4 border rounded-md m-2 p-3"
            style={{
                backgroundImage: `url(${weatherInfo.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '180px',
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 0,
            }} />

            <div className="flex items-center space-x-2 pb-2 relative z-10">
                <FaCity size={32} />
                <h2>Saint Denis de l'Hôtel</h2>
            </div>

            <div className="flex items-center space-x-2 relative z-10">
                <WiDaySunny size={32} />
                <p>Weather: {weatherInfo.description}</p>
            </div>

            <div className="flex items-center space-x-2 relative z-10">
                <WiThermometer size={32} />
                <p>Temperature: {weatherData.temperature}°C</p>
            </div>

            <div className="flex items-center space-x-2 relative z-10">
                <WiStrongWind size={32} />
                <p>Wind: {weatherData.windspeed} km/h</p>
            </div>
        </div>
    );
}
