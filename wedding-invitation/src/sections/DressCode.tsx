import { useLanguage } from "../hooks/useLanguage";
import "../styles/DressCode.css";

export function DressCode() {
  const { t } = useLanguage();

  const dressCodeGuides = [
    {
      color: 'white',
      backgroundColor: '#FFFFFF',
      borderColor: '#E5E5E5',
      label: t('dressCode.bride') || 'Bride',
    },
    {
      color: 'purple',
      backgroundColor: '#9b59b6',
      borderColor: '#8e44ad',
      label: t('dressCode.brideSide') || "Bride's Side",
    },
    {
      color: 'green',
      backgroundColor: '#27ae60',
      borderColor: '#229954',
      label: t('dressCode.groomSide') || "Groom's Side",
    },
  ];

  return (
    <section id="dress-code" className="dress-code-section">
      <div className="dress-code-container">
        <h2 className="dress-code-title">{t('dressCode.title') || 'Dress Code'}</h2>

        <div className="dress-code-guides">
          {dressCodeGuides.map((guide) => (
            <div
              key={guide.color}
              className="dress-code-card"
              style={{ backgroundColor: guide.backgroundColor, borderColor: guide.borderColor }}
            >
              <div className="dress-code-label">{guide.label}</div>
            </div>
          ))}
        </div>

        <div className="dress-code-rules">
          <h2 className="dress-code-rules-title">{t('dressCode.rulesTitle') || 'Dress Code Guidelines'}</h2>
          <ul className="dress-code-list">
            <li>{t('dressCode.rule1')}</li>
            <li>{t('dressCode.rule2')}</li>
            <li>{t('dressCode.rule3')}</li>
            <li>{t('dressCode.rule4')}</li>
            <li>{t('dressCode.rule5')}</li>
            <li>{t('dressCode.rule6')}</li>
            <li>{t('dressCode.rule7')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
