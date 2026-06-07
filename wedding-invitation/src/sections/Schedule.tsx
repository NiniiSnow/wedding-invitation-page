import { useLanguage } from "../hooks/useLanguage";
import { scheduleItems } from "../data/schedule";
import "../styles/Schedule.css";

export function Schedule() {
    const { t } = useLanguage();

    return (
        <section id="schedule" className="bg-center w-full flex flex-col py-12">
            <div className="schedule-timeline">
                {/* <h2 className="schedule-main-title">{t('schedule.title')}</h2> */}
                {scheduleItems.map((item) => (
                    <div key={item.id} className={`flex flex-col md:flex-row items-center schedule-item relative ${item.height}`}
                    >
                        <div className={`w-full ${item.height} bg-cover bg-center absolute top-0 left-0 z-0`} style={{ backgroundImage: `url(${item.imageUrl})` }}></div>
                        <div className="schedule-content absolute top-0 left-0 z-10">
                            <div className="schedule-time background-brown">{item.time}</div>
                            <h3 className="schedule-title background-brown">{t(item.titleKey)}</h3>
                            <p className="schedule-location background-brown">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                {t(item.locationKey)}
                            </p>
                            {item.descriptionKey && (
                                <p className="schedule-description background-brown">{t(item.descriptionKey)}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
