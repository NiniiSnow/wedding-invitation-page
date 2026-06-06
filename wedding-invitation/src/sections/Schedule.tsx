import { useLanguage } from "../hooks/useLanguage";

export function Schedule() {
    const { t } = useLanguage();
    
    return (
        <section id="schedule">
            <h2>{t('schedule.title')}</h2>
            <div className="schedule-item">
                <h3>{t('schedule.ceremony')}</h3>
                <p>Time: 3:00 PM</p>
                <p>Location: Beautiful Church</p>
            </div>
            <div className="schedule-item">
                <h3>{t('schedule.reception')}</h3>
                <p>Time: 5:00 PM</p>
                <p>Location: Grand Ballroom</p>
            </div>
        </section>
    );
}
