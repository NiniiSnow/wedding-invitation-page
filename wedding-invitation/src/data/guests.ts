export type Guest = {
    id: number;
    name: string;
    side: 'Bride' | 'Groom' | 'Both';
    attending?: boolean;
};

export const guests: Guest[] = [
    { id: 1, name: 'Ninikia', side: 'Bride', attending: true },
    { id: 2, name: 'Dimitri', side: 'Groom', attending: true },
];