import { useState } from "react";
import { GuestTable } from "../components";
import { guests } from "../data";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/FindYourTable.css";

export function FindYourTable() {
    const { t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState("");

    const trimmedSearchTerm = searchTerm.trim().toLowerCase();
    const filteredGuests = trimmedSearchTerm
        ? guests.filter((guest) =>
            guest.firstName.toLowerCase().includes(trimmedSearchTerm) ||
            guest.lastName.toLowerCase().includes(trimmedSearchTerm)
        )
        : [];

    return (
        <section id="find-your-table" className="find-your-table-section">
            <div className="find-your-table-container">
                <h2>{t("table.title")}</h2>
                <input
                    type="text"
                    className="px-2 py-0.5"
                    placeholder={t("table.searchPlaceholder")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <p>{t("table.note")}</p>
            </div>
            {trimmedSearchTerm && (
                filteredGuests.length > 0
                    ? <GuestTable guests={filteredGuests} />
                    : <p>{t("table.notFound")}</p>
            )}
        </section>
    )
}

export default FindYourTable;