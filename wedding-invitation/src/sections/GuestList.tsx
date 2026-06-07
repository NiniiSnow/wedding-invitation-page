import { useLanguage } from "../hooks/useLanguage";

export function GuestList() {
    const { t } = useLanguage();
    
    return (
        <section id="guests">
            <h2>{t('guests.title')}</h2>
            <div className="guest-list">
                <p>Guest list coming soon...</p>
                {/* Guest list will be displayed here */}
            </div>
        </section>
    );
}
