import { FloatingFishermen } from "../components";
import { Countdown, Faq, Schedule, Location, Invitation, Navbar, FindYourTable, DressCode, MeetTheTeam, MeetFamily } from "../sections";
import Donation from "../sections/Donation";

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
            <MeetTheTeam />
            <DressCode />
            <MeetFamily />
            <Donation />
            <Navbar />
        </>
    )
}