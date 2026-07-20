import { FloatingFishermen } from "../components";
import { Countdown, Faq, Schedule, Location, Invitation, Navbar } from "../sections";

export function Home() {
    return (
        <>
            <FloatingFishermen />
            <Invitation />
            <Schedule />
            {/* <GuestList /> */}
            <Countdown />
            <Faq />
            <Location />
            <Navbar />
        </>
    )
}