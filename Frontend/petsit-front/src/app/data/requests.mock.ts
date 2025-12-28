export interface Request {
  id: number;
  ownerName: string;
  animalType: string;
  startDate: string;
  endDate: string;
  description: string;
  status: 'pending' | 'accepted' | 'refused';
}

export const requests: Request[] = [
  {
    id: 1,
    ownerName: 'Amal',
    animalType: 'Dog',
    startDate: '2025-01-10',
    endDate: '2025-01-12',
    description: 'Golden retriever calme',
    status: 'pending'
  },
  {
    id: 2,
    ownerName: 'Yasmine',
    animalType: 'Cat',
    startDate: '2025-01-15',
    endDate: '2025-01-18',
    description: 'Chat persan',
    status: 'pending'
  }
];