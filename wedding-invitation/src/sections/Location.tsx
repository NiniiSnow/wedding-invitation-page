import { useLanguage } from "../hooks/useLanguage";

export function Location() {
    const { t } = useLanguage();
    
    return (
        <section id="location">
            <h2>{t('location.title')}</h2>
            <div className="location-info">
                <p>Venue: Beautiful Garden Estate</p>
                <p>Address: 123 Wedding Street, City, Country</p>
                <button>{t('location.getDirections')}</button>
            </div>
        </section>
    );
}
