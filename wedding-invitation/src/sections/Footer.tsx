import { useLanguage } from "../hooks/useLanguage";

export function Footer() {
    const { t } = useLanguage();
    
    return (
        <footer id="footer" className="pt-24 pb-6">
            <p>{t('footer.text')}</p>
            <p>&copy; 2026 Our Wedding. All rights reserved.</p>
        </footer>
    );
}
