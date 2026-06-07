import { LanguageSwitcher } from "../components/LanguageSwitcher";
// import { useLanguage } from "../hooks/useLanguage";

export function Navbar() {
    // const { t } = useLanguage();

    return (
        <section id="navbar" className="w-full h-16 flex items-center justify-start px-4 md:px-8  shadow-md">
            <LanguageSwitcher />
            <div className="navbar-items">
                <button className="navbar-item">
                    განრიგი
                </button>
                <button className="navbar-item">
                    ადგილმდებარეობა
                </button>
                <button className="navbar-item">
                    სტუმრები
                </button>
                <button className="navbar-item">
                    კითხვები
                </button>
            </div>
        </section>
    );
}