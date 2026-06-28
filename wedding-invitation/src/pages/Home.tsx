import { FloatingFishermen } from "../components";
import { Countdown, Faq, GuestList, Schedule, Location, Invitation, Navbar } from "../sections";

export function Home() {
    return (
        <>
            <FloatingFishermen />
            <Invitation buttonVisible={false} />
            <Schedule />
            {/* <GuestList /> */}
            <Countdown />
            <Faq />
            <Location />
            <Navbar />
        </>
    )
}