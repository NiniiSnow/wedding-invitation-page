import { useLanguage } from "../hooks/useLanguage";
import { venues } from "../data/locations";
import "../styles/Location.css";

export function Location() {
    const { t } = useLanguage();

    const handleGetDirections = (lat: number, lng: number) => {
        const url = `https://www.google.com/maps?q=${lat},${lng}`;
        window.open(url, "_blank");
    };

    return (
        <section id="location">
            <h2>{t('location.title')}</h2>
            <div className="venues-container">
                {venues.map((venue) => (
                    <div key={venue.id} className="venue-card" style={{ backgroundImage: `url(${venue.imgUrl})` }}>
                        <div className="venue-overlay"></div>
                        <div className="venue-header">
                            <h3>{t(venue.nameKey)}</h3>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <p className="venue-description">
                            {t(venue.descriptionKey)}
                        </p>
                        <p className="venue-address">
                            <strong>📍</strong> {t(venue.addressKey)}
                        </p>
                        <button
                            className="directions-button"
                            onClick={() => handleGetDirections(venue.coordinates.lat, venue.coordinates.lng)}
                        >
                            {t('location.getDirections')}
                        </button>
                        
                    </div>
                ))}
            </div>
        </section>
    );
}
