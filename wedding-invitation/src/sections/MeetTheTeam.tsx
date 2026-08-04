import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { team } from '../data/team';
import { useLanguage } from '../hooks/useLanguage';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/MeetTheTeam.css';

export function MeetTheTeam() {
  const { t } = useLanguage();

  const getSideColor = (side: 'bride' | 'groom') => {
    return side === 'bride' ? '#9b59b6' : '#27ae60';
  };

  const TeamCard = ({ member }: { member: typeof team[0] }) => {
    const sideColor = getSideColor(member.side);

    return (
      <div
        className="team-card"
        style={{ borderTopColor: sideColor }}
      >
        <div className="team-card-image">
          <img src={member.imageUrl} alt={member.fullname} />
          <div className="team-card-overlay" style={{ backgroundColor: sideColor }}></div>
        </div>

        <div className="team-card-content">
          <h3 className="team-card-name">{member.fullname}</h3>
          <p className="team-card-position">{member.position}</p>
          <p className="team-card-friendly-name">({member.friendlyName})</p>
          <p className="team-card-description">{member.shortDescription}</p>
        </div>
      </div>
    );
  };

  return (
    <section id="meet-the-team" className="meet-team-section">
      <div className="meet-team-container">
        <h2 className="meet-team-title">{t('team.title') || 'Meet the Team'}</h2>

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
          className="team-swiper"
        >
          {team.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
