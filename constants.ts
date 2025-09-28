import { Guest, Room, Reservation, HousekeepingTask, DailyMetric, RoomStatus, ReservationStatus, HousekeepingTaskStatus } from './types';

export const GUESTS: Guest[] = [
  { id: 'g1', name: 'John Doe', email: 'john.doe@email.com', phone: '123-456-7890', checkInDate: '2023-10-27', checkOutDate: '2023-10-30', roomNumber: 101 },
  { id: 'g2', name: 'Jane Smith', email: 'jane.smith@email.com', phone: '234-567-8901', checkInDate: '2023-10-28', checkOutDate: '2023-11-01', roomNumber: 205 },
  { id: 'g3', name: 'Peter Jones', email: 'peter.jones@email.com', phone: '345-678-9012', checkInDate: '2023-10-29', checkOutDate: '2023-11-02', roomNumber: 302 },
  { id: 'g4', name: 'Mary Williams', email: 'mary.w@email.com', phone: '456-789-0123', checkInDate: '2023-10-27', checkOutDate: '2023-10-29', roomNumber: 108 },
];

export const ROOMS: Room[] = [
  { number: 101, type: 'Suite', status: RoomStatus.Occupied, amenities: ['King Bed', 'Ocean View', 'Jacuzzi', 'Wifi', 'Gym Access'], guestId: 'g1', description: 'A luxurious suite with breathtaking ocean views and a private jacuzzi.', price: 450, imageUrl: 'https://picsum.photos/seed/101/800/600', capacity: 2, gallery: ['https://picsum.photos/seed/101/800/600', 'https://picsum.photos/seed/101a/800/600', 'https://picsum.photos/seed/101b/800/600'] },
  { number: 102, type: 'Double', status: RoomStatus.Ready, amenities: ['Two Queen Beds', 'City View', 'Wifi'], description: 'Perfect for families or friends, this room offers stunning city views.', price: 250, imageUrl: 'https://picsum.photos/seed/102/800/600', capacity: 4, gallery: ['https://picsum.photos/seed/102/800/600', 'https://picsum.photos/seed/102a/800/600'] },
  { number: 103, type: 'Single', status: RoomStatus.Dirty, amenities: ['Single Bed', 'Wifi'], description: 'A cozy room for the solo traveler, equipped with all modern comforts.', price: 150, imageUrl: 'https://picsum.photos/seed/103/800/600', capacity: 1, gallery: ['https://picsum.photos/seed/103/800/600'] },
  { number: 104, type: 'Double', status: RoomStatus.Ready, amenities: ['Two Queen Beds', 'Pool View', 'Wifi', 'Pool Access'], description: 'Enjoy beautiful views of our serene pool area from your private balcony.', price: 270, imageUrl: 'https://picsum.photos/seed/104/800/600', capacity: 4, gallery: ['https://picsum.photos/seed/104/800/600', 'https://picsum.photos/seed/104a/800/600', 'https://picsum.photos/seed/104b/800/600', 'https://picsum.photos/seed/104c/800/600'] },
  { number: 201, type: 'Single', status: RoomStatus.Cleaning, amenities: ['Single Bed', 'City View', 'Wifi'], description: 'A compact and comfortable room overlooking the vibrant city.', price: 160, imageUrl: 'https://picsum.photos/seed/201/800/600', capacity: 1, gallery: ['https://picsum.photos/seed/201/800/600'] },
  { number: 202, type: 'Suite', status: RoomStatus.Ready, amenities: ['King Bed', 'Mountain View', 'Wifi', 'Gym Access', 'Restaurant Voucher'], description: 'Wake up to majestic mountain views in this spacious and elegant suite.', price: 480, imageUrl: 'https://picsum.photos/seed/202/800/600', capacity: 3, gallery: ['https://picsum.photos/seed/202/800/600', 'https://picsum.photos/seed/202a/800/600'] },
  { number: 203, type: 'Double', status: RoomStatus.OutOfOrder, amenities: ['Two Queen Beds'], description: 'A comfortable room with two queen beds.', price: 250, imageUrl: 'https://picsum.photos/seed/203/800/600', capacity: 4, gallery: ['https://picsum.photos/seed/203/800/600'] },
  { number: 205, type: 'Penthouse', status: RoomStatus.Occupied, amenities: ['King Bed', 'Panoramic View', 'Private Pool', 'Wifi', 'Gym Access'], guestId: 'g2', description: 'The pinnacle of luxury. Our penthouse offers panoramic city views and a private rooftop pool.', price: 1200, imageUrl: 'https://picsum.photos/seed/205/800/600', capacity: 4, gallery: ['https://picsum.photos/seed/205/800/600', 'https://picsum.photos/seed/205a/800/600', 'https://picsum.photos/seed/205b/800/600'] },
  { number: 301, type: 'Double', status: RoomStatus.Dirty, amenities: ['Two Queen Beds', 'Wifi'], description: 'Spacious room with two queen beds, ideal for a comfortable stay.', price: 250, imageUrl: 'https://picsum.photos/seed/301/800/600', capacity: 4, gallery: ['https://picsum.photos/seed/301/800/600'] },
  { number: 302, type: 'Suite', status: RoomStatus.Occupied, amenities: ['King Bed', 'Ocean View', 'Wifi'], guestId: 'g3', description: 'An elegant suite offering spectacular views of the ocean.', price: 460, imageUrl: 'https://picsum.photos/seed/302/800/600', capacity: 2, gallery: ['https://picsum.photos/seed/302/800/600'] },
  { number: 108, type: 'Single', status: RoomStatus.Occupied, amenities: ['Single Bed', 'Wifi'], guestId: 'g4', description: 'A cozy room for the solo traveler.', price: 150, imageUrl: 'https://picsum.photos/seed/108/800/600', capacity: 1, gallery: ['https://picsum.photos/seed/108/800/600'] },
  { number: 109, type: 'Double', status: RoomStatus.Ready, amenities: ['Two Queen Beds', 'City View', 'Wifi'], description: 'A bright and airy room with two queen beds and a city view.', price: 260, imageUrl: 'https://picsum.photos/seed/109/800/600', capacity: 4, gallery: ['https://picsum.photos/seed/109/800/600', 'https://picsum.photos/seed/109a/800/600'] },
];

export const RESERVATIONS: Reservation[] = [
  { id: 'r1', guestName: 'Alice Johnson', checkIn: '2023-10-30', checkOut: '2023-11-03', roomType: 'Suite', status: ReservationStatus.Confirmed, channel: 'OTA' },
  { id: 'r2', guestName: 'Bob Brown', checkIn: '2023-10-31', checkOut: '2023-11-05', roomType: 'Double', status: ReservationStatus.Confirmed, channel: 'Direct' },
  { id: 'r3', guestName: 'Charlie Davis', checkIn: '2023-11-01', checkOut: '2023-11-02', roomType: 'Single', status: ReservationStatus.Confirmed, channel: 'Call Center' },
  { id: 'r4', guestName: 'David Evans', checkIn: '2023-10-28', checkOut: '2023-10-30', roomType: 'Double', status: ReservationStatus.CheckedOut, channel: 'OTA' },
];

export const HOUSEKEEPING_TASKS: HousekeepingTask[] = [
    {id: 'ht1', roomNumber: 103, task: 'Full Clean', assignedTo: 'Maria G.', status: HousekeepingTaskStatus.Pending, priority: 'High'},
    {id: 'ht2', roomNumber: 201, task: 'Full Clean', assignedTo: 'Carlos R.', status: HousekeepingTaskStatus.InProgress, priority: 'High'},
    {id: 'ht3', roomNumber: 301, task: 'Full Clean', assignedTo: 'Maria G.', status: HousekeepingTaskStatus.Pending, priority: 'Medium'},
    {id: 'ht4', roomNumber: 101, task: 'Towel Change', assignedTo: 'John S.', status: HousekeepingTaskStatus.Completed, priority: 'Low'},
    {id: 'ht5', roomNumber: 203, task: 'Maintenance', assignedTo: 'Maintenance Dept.', status: HousekeepingTaskStatus.InProgress, priority: 'High'},
];

export const ANALYTICS_DATA: DailyMetric[] = [
    { day: 'Mon', occupancy: 75, revenue: 15230 },
    { day: 'Tue', occupancy: 82, revenue: 18450 },
    { day: 'Wed', occupancy: 80, revenue: 17800 },
    { day: 'Thu', occupancy: 88, revenue: 20100 },
    { day: 'Fri', occupancy: 95, revenue: 25300 },
    { day: 'Sat', occupancy: 98, revenue: 28900 },
    { day: 'Sun', occupancy: 92, revenue: 23400 },
];
