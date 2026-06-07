import { useLanguage } from "../hooks/useLanguage";
import { useEffect, useState } from "react";

export function Countdown() {
    const { t } = useLanguage();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateCountdown = () => {
            const targetDate = new Date("2026-09-05T13:00:00").getTime();
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateCountdown();
        const interval = setInterval(calculateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="countdown"
            className="bg-center w-full h-96 flex  justify-center items-center relative"
            style={{ backgroundImage: "url('/disco.jpg')" }}
        >
            <div className="flex justify-center items-center mt-8 gap-6 text-2xl sm:text-4xl h-fit">
                <div className="countdown-item text-color-white">
                    <div className="countdown-value">{timeLeft.days}</div>
                    <div className="countdown-label">{t('countdown.days') || 'Days'}</div>
                </div>
                <div className="countdown-item text-color-white">
                    <div className="countdown-value">{timeLeft.hours}</div>
                    <div className="countdown-label">{t('countdown.hours') || 'Hours'}</div>
                </div>
                <div className="countdown-item text-color-white">
                    <div className="countdown-value">{timeLeft.minutes}</div>
                    <div className="countdown-label">{t('countdown.minutes') || 'Minutes'}</div>
                </div>
                <div className="countdown-item text-color-white">
                    <div className="countdown-value">{timeLeft.seconds}</div>
                    <div className="countdown-label">{t('countdown.seconds') || 'Seconds'}</div>
                </div>
            </div>
        </section>
    );
}