export type AlcoholPreference = 'vodka' | 'wine' | 'beer' | 'whiskey' | 'other' | 'none';

export type Guest = {
    id: String;
    name: string;
    side: 'Bride' | 'Groom' | 'Both';
    attending?: boolean;
    tableNumber?: number;
    isDrinking?: boolean;
    alcoholPreference?: AlcoholPreference;
};

export const guests: Guest[] = [
    { id: '1', name: 'Ninikia', side: 'Bride', attending: true, tableNumber: 1, isDrinking: true, alcoholPreference: 'wine' },
    { id: '2', name: 'Dimitri', side: 'Groom', attending: true, tableNumber: 1, isDrinking: true, alcoholPreference: 'vodka' },
];