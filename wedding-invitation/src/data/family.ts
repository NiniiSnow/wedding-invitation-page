export interface FamilyMember {
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

export const family: FamilyMember[] = [
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
  },
  {
    id: 'father',
    fullname: 'Tamaz Chirgadze',
    position: 'Father of the Bride',
    shortDescription: 'Father',
    side: 'bride',
    imageUrl: 'tamu.jpeg',
    friendlyName: 'Shah Tamaz , The Thanos of the Family',
    age: 50,
    maritalStatus: 'Married'
  },
];
