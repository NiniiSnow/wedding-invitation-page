export type AlcoholPreference = 'vodka' | 'wine' | 'beer' | 'whiskey' | 'other' | 'none';

export type Guest = {
    id: string;
    firstName: string;
    lastName: string;
    side: 'Ninikia' | 'Dimitri';
    tableNumber?: number;
    isDrinking?: boolean;
    alcoholPreference?: AlcoholPreference;
};

export const guests: Guest[] = [
    { id: '1', firstName: 'Ninikia', lastName: 'Chirgadze', side: 'Ninikia', tableNumber: 1, isDrinking: true, alcoholPreference: 'wine' },
    { id: '2', firstName: 'Dimitri', lastName: 'Gelashvili', side: 'Dimitri', tableNumber: 1, isDrinking: true, alcoholPreference: 'vodka' },
];