import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { family } from '../data/family';
import { useLanguage } from '../hooks/useLanguage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/MeetFamily.css';

export function MeetFamily() {
  const { t } = useLanguage();

  const getSideColor = (side: 'bride' | 'groom') => {
    return side === 'bride' ? '#9b59b6' : '#27ae60';
  };

  const FamilyCard = ({ member }: { member: typeof family[0] }) => {
    const sideColor = getSideColor(member.side);

    return (
      <div
        className="family-card"
        style={{ borderTopColor: sideColor }}
      >
        <div className="family-card-image">
          <img src={member.imageUrl} alt={member.fullname} />
          <div className="family-card-overlay" style={{ backgroundColor: sideColor }}></div>
        </div>

        <div className="family-card-content">
          <h3 className="family-card-name">{member.fullname}</h3>
          <p className="family-card-position">{member.position}</p>
          <p className="family-card-friendly-name">({member.friendlyName})</p>
          <p className="family-card-description">{member.shortDescription}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="meet-family" className="meet-family-section">
      <div className="meet-family-container">
        <h2 className="meet-family-title">{t('family.title') || 'Meet the Family'}</h2>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="family-swiper"
        >
          {family.map((member) => (
            <SwiperSlide key={member.id}>
              <FamilyCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
