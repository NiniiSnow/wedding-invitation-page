import { useLanguage } from "../hooks/useLanguage";
import { faqs } from "../data/faq";
import { Collapsible } from "../components/Collapsible";

export function Faq() {
    const { t } = useLanguage();
    
    return (
        <section id="faq">
            <h2 className="py-6">{t('faq.title')}</h2>
            <div className="faq-container">
                {faqs.map((faq) => (
                    <Collapsible key={faq.id} title={t(faq.questionKey)}>
                        <p>{t(faq.answerKey)}</p>
                    </Collapsible>
                ))}
            </div>
        </section>
    );
}
