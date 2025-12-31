import { OwnerRequest } from "../components/owner-dashboard-component/owner-dashboard-component";

export const OWNER_REQUESTS_MOCK: OwnerRequest[] = [
  {
    id: 1,
    animalType: 'Dog',
    petName: 'Max',
    startDate: '2025-03-10',
    endDate: '2025-03-15',
    description: 'Friendly dog, needs daily walks.',
    status: 'pending',
  },
  {
    id: 2,
    animalType: 'Cat',
    petName: 'Luna',
    startDate: '2025-04-01',
    endDate: '2025-04-05',
    description: 'Indoor cat, calm and independent.',
    status: 'accepted',
  },
  {
    id: 3,
    animalType: 'Rabbit',
    petName: 'Snow',
    startDate: '2025-05-02',
    endDate: '2025-05-04',
    description: 'Needs feeding twice a day.',
    status: 'refused',
  }
];
