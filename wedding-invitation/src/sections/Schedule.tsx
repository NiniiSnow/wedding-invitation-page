import { useLanguage } from "../hooks/useLanguage";
import { scheduleItems } from "../data/schedule";
import "../styles/Schedule.css";

export function Schedule() {
    const { t } = useLanguage();
    
    return (
        <section id="schedule">
            <div className="schedule-timeline">
                {scheduleItems.map((item, index) => (
                    <div key={item.id} className="schedule-item">
                        <div className="schedule-dot"></div>
                        {index !== scheduleItems.length - 1 && <div className="schedule-line"></div>}
                        <div className="schedule-content">
                            <div className="schedule-time">{item.time}</div>
                            <h3 className="schedule-title">{t(item.titleKey)}</h3>
                            <p className="schedule-location">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                {t(item.locationKey)}
                            </p>
                            {item.descriptionKey && (
                                <p className="schedule-description">{t(item.descriptionKey)}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
