import { useLanguage } from "../hooks/useLanguage";
import "../styles/FindYourTable.css";

export function FindYourTable() {
    const { t } = useLanguage();

    return (
        <section id="find-your-table" className="find-your-table-section">
            <div className="find-your-table-container">
                <h2>{t("table.title")}</h2>
                <p>{t("table.comingSoon")}</p>
                <input type="text" className="px-2 py-0.5" placeholder={t("table.searchPlaceholder")} disabled />
                <button className="button-main" disabled>{t("table.searchButton")}</button>
                <p>{t("table.note")}</p>
            </div>
        </section>
    )
}

export default FindYourTable;