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
      </div>
    </section>
  );
}
