import { create } from 'zustand'
import { guests, type Guest } from '../data/guests';

interface useGuestState {
    guests: Guest[]
    searchName: string,
    filterAttending: 'all' | 'yes' | 'no',
    filterSide: 'all' | 'Bride' | 'Groom' | 'Both',
    filteredGuests: Guest[],
    paginatedGuests: Guest[],

    setSearchName: (name: string) => void,
    setFilterAttending: (status: 'all' | 'yes' | 'no') => void
    setFilterSide: (side: 'all' | 'Bride' | 'Groom' | 'Both') => void,

    setFilteredGuests: () => void,

    setGuests: (guests: Guest[]) => void,
    addGuest: (guest: Guest) => void,
    removeGuest: (guestId: string) => void,
}

const useGuestStore = create<useGuestState>()((set) => ({
    guests: [],
    searchName: '',
    filterAttending: 'all',
    filterSide: 'all',
    filteredGuests: [],
    paginatedGuests: [],

    setSearchName: (name: string) => set({ searchName: name }),
    setFilterAttending: (status: 'all' | 'yes' | 'no') => set({ filterAttending: status }),
    setFilterSide: (side: 'all' | 'Bride' | 'Groom' | 'Both') => set({ filterSide: side }),

    setFilteredGuests: () => set((state) => ({ filteredGuests: [...state.guests.filter((guest) => guest.name.toLocaleLowerCase().includes(state.searchName.toLocaleLowerCase()))] })),


    setGuests: (guests: Guest[]) => set({ guests }),
    addGuest: (guest: Guest) => set((state) => ({ guests: [...state.guests, guest] })),
    removeGuest: (guestId: string) => set((state) => ({ guests: state.guests.filter((guest: Guest) => guest.id !== guestId) })),
}))

export default useGuestStore;