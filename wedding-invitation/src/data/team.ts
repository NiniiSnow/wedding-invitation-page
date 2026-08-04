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
    fullname: 'Nini Chirgadze',
    position: 'Bride',
    shortDescription: 'A beautiful soul with a passion for life and adventure.',
    side: 'bride',
    imageUrl: 'ninikia.png',
    friendlyName: 'Ninikia The Purple Rose',
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
    friendlyName: 'Dimitri of The Sand',
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
    friendlyName: 'Buku Blue-eyed Samurai',
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
    friendlyName: 'Tiniko The Lonely Wolf',
    age: 27,
    maritalStatus: 'Single'
  },
  {
    id: 'groomsman1',
    fullname: 'Revaz Ugulava',
    position: 'Groomsman',
    shortDescription: 'Best friend of the groom and trusted companion.',
    side: 'groom',
    imageUrl: 'revazi1.jpg',
    friendlyName: 'Revazi The Loyal',
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
    friendlyName: 'Zibzo The Academician',
    age: 29,
    maritalStatus: 'Single'
  },
  {
    id: 'sister1',
    fullname: 'Rusudan Chirgadze',
    position: 'Sister of the Bride',
    shortDescription: 'Built-in best friend and confidant of the bride.',
    side: 'bride',
    imageUrl: 'rusikia.jpg',
    friendlyName: 'Ruska The Great',
    age: 22,
    maritalStatus: 'Married'
  },
  {
    id: 'sister2',
    fullname: 'Tatuli Chirgadze',
    position: 'Sister of the Bride',
    shortDescription: 'Middle Child, full of wisdom and grace.',
    side: 'bride',
    imageUrl: 'tatuli.jpg',
    friendlyName: 'Tamriko The Wise',
    age: 24,
    maritalStatus: 'Married'
  },
  {
    id: 'sister3',
    fullname: 'Qetevan Chirgadze',
    position: 'Sister of the Bride',
    shortDescription: 'Little sister of the bride, full of energy and joy.',
    side: 'bride',
    imageUrl: 'qetatia.jpg',
    friendlyName: 'Qetatia The Brave',
    age: 24,
    maritalStatus: 'Married'
  },
  {
    id: 'brother',
    fullname: 'Giorgi Chirgadze',
    position: 'Brother of the Bride',
    shortDescription: 'The youngest sibling',
    side: 'bride',
    imageUrl: 'giorgi.jpg',
    friendlyName: 'Jora The Youngest',
    age: 16,
    maritalStatus: 'Single'
  },
  {
    id: 'mother',
    fullname: 'Nana Maglakelidze',
    position: 'Mother of the Bride',
    shortDescription: 'The loving and supportive mother of the bride.',
    side: 'bride',
    imageUrl: 'nanu.jpg',
    friendlyName: 'Nanu Mother of Dragons',
    age: 50,
    maritalStatus: 'Married'
  }
];
