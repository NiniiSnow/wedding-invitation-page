import { FloatingFishermen } from "../components";
import { Countdown, Faq, GuestList, Hero, Schedule, Location } from "../sections";

export function Home() {
    return (
        <>
            <FloatingFishermen />
            <Hero />
            <Schedule />
            <GuestList />
            <Countdown />
            <Faq />
            <Location />
        </>
    )
}