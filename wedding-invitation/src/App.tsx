import { useLanguage } from './hooks/useLanguage'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import './App.css'

function App() {
  const { t, language } = useLanguage()

  return (
    <>
      <div style={{ position: 'fixed', top: 0, right: 0, zIndex: 1000 }}>
        <LanguageSwitcher />
      </div>

      <section id="hero">
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
      </section>

      <section id="countdown">
        <h2>{t('countdown.title')}</h2>
        {/* Add countdown logic here */}
      </section>

      <section id="schedule">
        <h2>{t('schedule.title')}</h2>
        {/* Add schedule content here */}
      </section>

      <section id="location">
        <h2>{t('location.title')}</h2>
        {/* Add location content here */}
      </section>

      <section id="footer">
        <p>{t('footer.text')}</p>
        <p>Current Language: {language}</p>
      </section>
    </>
  )
}

export default App
