import { FloatingFishermen } from "../components";
import { Countdown, Faq, Schedule, Location, Invitation, Navbar, FindYourTable, DressCode, MeetTheTeam } from "../sections";

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
            <FindYourTable />
            <DressCode />
            <MeetTheTeam />
            <Navbar />
        </>
    )
}