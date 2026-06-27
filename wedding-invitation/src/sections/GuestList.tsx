import { useState } from 'react';
import { useLanguage } from "../hooks/useLanguage";
import { guests, type AlcoholPreference } from "../data/guests";
import './GuestList.css';

const ITEMS_PER_PAGE = 15;

export function GuestList() {
    const { t } = useLanguage();
    const [searchName, setSearchName] = useState('');
    const [filterAttending, setFilterAttending] = useState<'all' | 'yes' | 'no'>('all');
    const [filterSide, setFilterSide] = useState<'all' | 'Bride' | 'Groom' | 'Both'>('all');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredGuests = guests.filter(guest => {
        const nameMatch = guest.name.toLowerCase().includes(searchName.toLowerCase());
        
        const attendingMatch = 
            filterAttending === 'all' || 
            (filterAttending === 'yes' && guest.attending) ||
            (filterAttending === 'no' && !guest.attending);
        
        const sideMatch = filterSide === 'all' || guest.side === filterSide;

        return nameMatch && attendingMatch && sideMatch;
    });

    // Pagination
    const totalPages = Math.ceil(filteredGuests.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedGuests = filteredGuests.slice(startIndex, endIndex);

    // Reset to first page when filters change
    const handleFilterChange = (setter: any, value: any) => {
        setter(value);
        setCurrentPage(1);
    };

    const getAlcoholLabel = (preference: AlcoholPreference | undefined) => {
        const labels: Record<AlcoholPreference, string> = {
            vodka: '🍸 Vodka',
            wine: '🍷 Wine',
            beer: '🍺 Beer',
            whiskey: '🥃 Whiskey',
            other: 'Other',
            none: 'Non-Alcoholic',
        };
        return labels[preference || 'none'];
    };

    return (
        <section id="guests" className="guests-section">
            <h2>{t('guests.title')}</h2>
            
            <div className="guest-filters">
                <input
                    type="text"
                    placeholder={t('guests.searchPlaceholder')}
                    value={searchName}
                    onChange={(e) => handleFilterChange(setSearchName, e.target.value)}
                    className="search-input"
                />
                
                <select 
                    value={filterAttending} 
                    onChange={(e) => handleFilterChange(setFilterAttending, e.target.value as 'all' | 'yes' | 'no')}
                    className="filter-select"
                >
                    <option value="all">{t('guests.allGuests')}</option>
                    <option value="yes">{t('guests.attending')}</option>
                    <option value="no">{t('guests.notAttending')}</option>
                </select>

                <select 
                    value={filterSide} 
                    onChange={(e) => handleFilterChange(setFilterSide, e.target.value as 'all' | 'Bride' | 'Groom' | 'Both')}
                    className="filter-select"
                >
                    <option value="all">{t('guests.allSides')}</option>
                    <option value="Bride">{t('guests.brideSide')}</option>
                    <option value="Groom">{t('guests.groomSide')}</option>
                    <option value="Both">{t('guests.both')}</option>
                </select>
            </div>

            <div className="guest-list">
                {filteredGuests.length === 0 ? (
                    <p className="no-guests">{t('guests.noGuests')}</p>
                ) : (
                    <>
                        <table className="guest-table">
                            <thead>
                                <tr>
                                    <th>{t('guests.name')}</th>
                                    <th>{t('guests.side')}</th>
                                    <th>{t('guests.attendingStatus')}</th>
                                    <th>{t('guests.table')}</th>
                                    <th>{t('guests.alcohol')}</th>
                                    <th>{t('guests.preference')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedGuests.map(guest => (
                                    <tr key={guest.id as React.Key} className={!guest.attending ? 'not-attending' : ''}>
                                        <td>{guest.name}</td>
                                        <td>{guest.side}</td>
                                        <td className="attending-status">
                                            {guest.attending ? t('guests.yes') : t('guests.no')}
                                        </td>
                                        <td>{guest.tableNumber || '—'}</td>
                                        <td>
                                            {guest.isDrinking ? '🍾' : '🚫'}
                                        </td>
                                        <td>{getAlcoholLabel(guest.alcoholPreference)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination Controls */}
                        <div className="pagination">
                            <button 
                                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                                className="pagination-btn"
                            >
                                ← {t('guests.previous')}
                            </button>

                            <span className="pagination-info">
                                {t('guests.page')} <strong>{currentPage}</strong> {t('guests.of')} <strong>{totalPages}</strong>
                            </span>

                            <button 
                                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                                className="pagination-btn"
                            >
                                {t('guests.next')} →
                            </button>
                        </div>
                    </>
                )}

                <div className="guest-stats">
                    <p>{t('guests.totalGuests')} <strong>{filteredGuests.length}</strong></p>
                    <p>{t('guests.totalAttending')} <strong>{filteredGuests.filter(g => g.attending).length}</strong></p>
                    <p>{t('guests.totalDrinking')} <strong>{filteredGuests.filter(g => g.isDrinking).length}</strong></p>
                </div>
            </div>
        </section>
    );
}
