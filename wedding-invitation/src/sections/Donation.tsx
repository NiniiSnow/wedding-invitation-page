import { useNotification } from "../context/NotificationContext";
import { BANK_ACCOUNTS } from "../data";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/Donation.css";

export default function Donation() {
    const { t } = useLanguage();
    const bankAccount = BANK_ACCOUNTS;
    const { showNotification } = useNotification();


    function copyToClipboard(text: string) {
        navigator.clipboard.writeText(text);
        showNotification(t('bankAccounts.copied'), 'success');
    }

    return (
        <section id="donation" className="donation-section">
            <div className="donation-container">
                {
                    bankAccount.map((account) => (
                        <button key={account.id} className="donation-button" onClick={() => copyToClipboard(account.accountNumber)} style={{ backgroundColor: account.bankName === "BOG" ? "#fe5f0a" : "#00adee" }}>
                            {t(`bankAccounts.${account.bankName}`)}
                        </button>
                    ))
                }
                <p className="donation-description">{t('bankAccounts.description')}</p>
            </div>
        </section>
    );
}