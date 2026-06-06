import { useLanguage } from "../hooks/useLanguage";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section
            id="hero"
            className="bg-center w-full h-96 flex  justify-center text-center relative"
            style={{ backgroundImage: "url('/sioni.jpeg')" }}
        >

            <div className="section-layer">
            </div>

            <div>
                <h1 className="text-white text-4xl md:text-5xl font-bold">{t('hero.title')}</h1>
                <p className="text-white text-lg md:text-xl mt-4">{t('hero.subtitle')}</p>
            </div>
        </section>
    );
}   