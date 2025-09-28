export enum RoomStatus {
  Ready = 'Ready',
  Occupied = 'Occupied',
  Dirty = 'Dirty',
  Cleaning = 'Cleaning',
  OutOfOrder = 'Out-of-Order',
}

export enum ReservationStatus {
  Confirmed = 'Confirmed',
  Cancelled = 'Cancelled',
  CheckedIn = 'Checked-In',
  CheckedOut = 'Checked-Out',
}

export enum HousekeepingTaskStatus {
    Pending = 'Pending',
    InProgress = 'In Progress',
    Completed = 'Completed'
}

export interface Guest {
  id: string;
  name: string;
  email: string;
  phone: string;
  checkInDate: string;
  checkOutDate: string;
  roomNumber: number;
}

export interface Room {
  number: number;
  type: 'Single' | 'Double' | 'Suite' | 'Penthouse';
  status: RoomStatus;
  amenities: string[];
  guestId?: string;
  description: string;
  price: number;
  imageUrl: string;
  capacity: number;
  gallery: string[];
}

export interface Reservation {
  id: string;
  guestName: string;
  checkIn: string;
  checkOut: string;
  roomType: 'Single' | 'Double' | 'Suite' | 'Penthouse';
  roomNumber?: number;
  status: ReservationStatus;
  channel: 'Direct' | 'OTA' | 'Call Center' | 'Web';
}

export interface HousekeepingTask {
    id: string;
    roomNumber: number;
    task: 'Full Clean' | 'Towel Change' | 'Restock Minibar' | 'Maintenance';
    assignedTo: string;
    status: HousekeepingTaskStatus;
    priority: 'High' | 'Medium' | 'Low';
}

export interface DailyMetric {
    day: string;
    occupancy: number;
    revenue: number;
}
