# Zenith Hotel Management System

A comprehensive hotel booking and management system built with React, TypeScript, and Vite. This application provides both a public-facing booking interface for guests and a complete admin dashboard for hotel staff to manage reservations, rooms, housekeeping, and guest services.

## 🌟 Features

### Public Interface
- **Beautiful Landing Page**: Elegant hero section with hotel branding
- **Room Search & Booking**: Interactive booking form with date selection and guest count
- **Room Gallery**: Detailed room views with images, amenities, and pricing
- **Amenities Showcase**: Display of hotel facilities and services
- **Contact Information**: Easy access to hotel contact details
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Admin Dashboard
- **Real-time Dashboard**: Key metrics including occupancy rate, arrivals/departures, and available rooms
- **Reservation Management**: Complete reservation tracking with status updates
- **Room Status Management**: Visual room status grid with real-time updates
- **Housekeeping Schedule**: Task management system for cleaning and maintenance
- **Guest Management**: In-house guest tracking and information
- **Analytics Charts**: Visual representation of occupancy and revenue data

### Core Functionality
- **Dual Mode Interface**: Seamless switching between public and admin views
- **Real-time Updates**: Live status updates across all modules
- **Interactive Modals**: Booking confirmation and room status change dialogs
- **Data Persistence**: State management for all hotel operations
- **Modern UI/UX**: Clean, professional design with smooth animations

## 🏗️ Project Structure

```
hotel-booking-system/
├── components/           # Reusable UI components
│   ├── BookingModal.tsx     # Booking confirmation modal
│   ├── Header.tsx           # Admin dashboard header
│   ├── PublicHeader.tsx     # Public site header
│   ├── PublicFooter.tsx     # Public site footer
│   ├── Sidebar.tsx          # Admin navigation sidebar
│   ├── RoomStatusModal.tsx  # Room status update modal
│   ├── OccupancyChart.tsx   # Analytics chart component
│   └── icons/               # Icon components
├── views/                # Main application views
│   ├── DashboardView.tsx    # Admin dashboard overview
│   ├── HomeView.tsx         # Public landing page
│   ├── RoomsView.tsx        # Admin room management
│   ├── RoomsPageView.tsx    # Public room listing
│   ├── RoomDetailView.tsx   # Detailed room information
│   ├── ReservationsView.tsx # Reservation management
│   ├── HousekeepingView.tsx # Housekeeping task management
│   ├── GuestsView.tsx       # Guest management
│   ├── AmenitiesPageView.tsx # Hotel amenities page
│   └── ContactPageView.tsx  # Contact information page
├── types.ts              # TypeScript type definitions
├── constants.ts          # Sample data and constants
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
└── vite.config.ts       # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hotel-booking-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Design System

### Color Palette

**Admin Theme:**
- Primary: `#111827` (Dark Gray)
- Secondary: `#1F2937` (Medium Gray)
- Accent: `#3B82F6` (Blue)
- Status Colors: Green, Yellow, Red, Blue, Gray

**Public Theme:**
- Cream: `#FDFCF9`
- Gray: `#F3F4F6`
- Dark: `#1A1A1A`
- Gold: `#bfa888`

### Typography
- **Serif**: Playfair Display (Headings)
- **Sans-serif**: Lato (Body text)

## 📊 Data Models

### Room Types
- **Single**: 1 guest capacity
- **Double**: 4 guest capacity
- **Suite**: 2-3 guest capacity
- **Penthouse**: 4 guest capacity

### Room Status
- **Ready**: Available for booking
- **Occupied**: Currently occupied
- **Dirty**: Needs cleaning
- **Cleaning**: Currently being cleaned
- **Out-of-Order**: Maintenance required

### Reservation Status
- **Confirmed**: Booking confirmed
- **Checked-In**: Guest has arrived
- **Checked-Out**: Guest has departed
- **Cancelled**: Booking cancelled

### Housekeeping Tasks
- **Full Clean**: Complete room cleaning
- **Towel Change**: Replace towels and linens
- **Restock Minibar**: Refill minibar items
- **Maintenance**: Room maintenance tasks

## 🔧 Technical Details

### Technologies Used
- **React 19.1.1**: Modern React with latest features
- **TypeScript 5.8.2**: Type-safe development
- **Vite 6.2.0**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **Recharts 3.2.1**: Data visualization library

### Key Features
- **Component-based Architecture**: Modular and reusable components
- **TypeScript Integration**: Full type safety throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **State Management**: React hooks for local state management
- **Modern Build System**: Vite for fast development and optimized builds

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🏨 Sample Data

The application includes comprehensive sample data:
- **12 Rooms**: Various types and statuses
- **4 Active Guests**: Current in-house guests
- **4 Reservations**: Different booking statuses
- **5 Housekeeping Tasks**: Various priorities and assignments
- **7 Days of Analytics**: Occupancy and revenue data

## 🎯 Usage Guide

### For Guests (Public Interface)
1. **Browse Rooms**: View available rooms and amenities
2. **Search Availability**: Use the booking form to check dates
3. **View Details**: Click on rooms to see full details and gallery
4. **Make Booking**: Complete the booking process with guest information
5. **Confirmation**: Receive booking confirmation with details

### For Staff (Admin Interface)
1. **Dashboard Overview**: Monitor key hotel metrics
2. **Manage Reservations**: View and update booking statuses
3. **Room Management**: Update room statuses and view occupancy
4. **Housekeeping**: Track and update cleaning tasks
5. **Guest Services**: Manage in-house guest information

## 🔮 Future Enhancements

- **User Authentication**: Login system for staff and guests
- **Payment Integration**: Online payment processing
- **Email Notifications**: Automated booking confirmations
- **Calendar Integration**: Sync with external calendar systems
- **Multi-language Support**: Internationalization
- **Mobile App**: Native mobile application
- **API Integration**: Connect to hotel management systems
- **Advanced Analytics**: More detailed reporting and insights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Support

For support, email support@zenithhotel.com or create an issue in the repository.

## 🙏 Acknowledgments

- Design inspiration from modern hotel websites
- Icons from Heroicons
- Images from Picsum Photos
- Fonts from Google Fonts

---

**Zenith Hotel Management System** - Elevating hospitality through technology.
