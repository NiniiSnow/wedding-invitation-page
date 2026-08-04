export interface TeamMember {
  id: string;
  fullname: string;
  position: string;
  shortDescription: string;
  side: 'bride' | 'groom';
  imageUrl: string;
  friendlyName: string;
  age: number;
  maritalStatus: string;
}

export const team: TeamMember[] = [
  {
    id: 'ninikia',
    fullname: 'Nino Chirgadze',
    position: 'Bride',
    shortDescription: 'A beautiful soul with a passion for life and adventure.',
    side: 'bride',
    imageUrl: 'ninikia.png',
    friendlyName: 'Ninikia',
    age: 28,
    maritalStatus: 'Soon to be Married'
  },
  {
    id: 'dimitri',
    fullname: 'Dimitri Gelashvili',
    position: 'Groom',
    shortDescription: 'A kind-hearted gentleman with a love for family and traditions.',
    side: 'groom',
    imageUrl: 'dimitri.png',
    friendlyName: 'Dima',
    age: 30,
    maritalStatus: 'Soon to be Married'
  },
  {
    id: 'bridesmaid1',
    fullname: 'Ana Shvangiradze',
    position: 'Bridesmaid',
    shortDescription: 'Closest friend and confidant of the bride.',
    side: 'bride',
    imageUrl: 'buku.jpg',
    friendlyName: 'Buku',
    age: 29,
    maritalStatus: 'Single'
  },
  {
    id: 'bridesmaid2',
    fullname: 'Tinatin Lolomadze',
    position: 'Bridesmaid',
    shortDescription: 'Long-time friend and supporter of the bride.',
    side: 'bride',
    imageUrl: 'tika.jpg',
    friendlyName: 'Lonely Wolf',
    age: 27,
    maritalStatus: 'Single'
  },
  {
    id: 'groomsman1',
    fullname: 'Revaz Ugulava',
    position: 'Groomsman',
    shortDescription: 'Best friend of the groom and trusted companion.',
    side: 'groom',
    imageUrl: 'revaz.png',
    friendlyName: 'Rezo Dzma',
    age: 31,
    maritalStatus: 'Engaged'
  },
  {
    id: 'groomsman2',
    fullname: 'Nika Zibzibadze',
    position: 'Groomsman',
    shortDescription: 'Loyal friend and supporter of the groom.',
    side: 'groom',
    imageUrl: 'zibzo.jpg',
    friendlyName: 'Zibzo',
    age: 29,
    maritalStatus: 'Single'
  }
];
