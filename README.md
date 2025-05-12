# Via Fidei - Walk your faith, one habit at a time

A spiritual habit tracker designed to help Christians maintain and grow their faith practices through consistent tracking of devotional activities.

## 🙏 Project Overview

Via Fidei is a cross-platform mobile application built with React Native and Expo, designed to help Christians (particularly Catholics) develop and maintain consistent spiritual practices. The app provides a simple, intuitive interface for creating, tracking, and sharing spiritual habits.

### Key Features

- **Habit Creation**: Choose from a library of spiritual practices or create custom habits
- **Daily Tracking**: Simple "Done!" buttons for marking completed activities
- **Progress Analytics**: View completion streaks, rates, and historical data
- **Sharing**: Export progress reports to inspire others
- **Devotions Catalog**: Browse traditional and modern spiritual practices
- **Multilingual Support**: English and Spanish (with more languages planned)

## 🛠 Tech Stack

- **Frontend**: React Native with Expo
- **Backend**: Firebase (Authentication, Firestore, Functions)
- **Language**: TypeScript
- **State Management**: React hooks with Context API
- **Navigation**: Expo Router (React Navigation v6)
- **Styling**: React Native StyleSheet with themed components
- **Development**: ESLint, TypeScript strict mode

## 📱 Screenshots

*Coming soon - screenshots will be added as the UI is developed*

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or higher
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Firebase project (see setup instructions below)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/via-fidei.git
cd via-fidei
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your Firebase configuration
```

4. Start the development server:
```bash
npm start
```

### Firebase Setup

1. Create a new Firebase project at [console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Add your Firebase configuration to `.env`:

```env
FIREBASE_API_KEY=your_api_key_here
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
```

## 📁 Project Structure

```
/
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Tab navigation screens
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   └── forms/            # Form components
├── constants/            # App constants
│   ├── Colors.ts         # Color palette
│   └── spiritual/        # Spiritual content
├── hooks/                # Custom React hooks
│   ├── useAuth.ts        # Authentication hook
│   └── useHabits.ts      # Habits management
├── types/                # TypeScript definitions
│   ├── User.ts           # User interfaces
│   └── Habit.ts          # Habit interfaces
├── utils/                # Utility functions
│   ├── firebase.ts       # Firebase configuration
│   └── dateUtils.ts      # Date handling
└── assets/               # Static assets
```

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

## 📦 Building for Production

### Web Build

```bash
npm run build
```

### Mobile App Build

```bash
# For Android
npm run build:android

# For iOS
npm run build:ios
```

## 🚢 Deployment

### Web Deployment (Firebase Hosting)

```bash
npm run deploy:web
```

### App Store Deployment

Follow the [Expo Application Services (EAS)](https://docs.expo.dev/build/introduction/) guide for building and submitting to app stores.

## 🤝 Contributing

We welcome contributions! Please read our [Contributing Guide](CONTRIBUTING.md) for details on how to:

- Report bugs
- Request features
- Submit pull requests
- Follow coding standards

## 📋 Roadmap

### Phase 1 (Current)
- [x] Project setup and architecture
- [x] Firebase integration
- [x] Tab navigation structure
- [ ] Authentication flow
- [ ] Basic habit creation
- [ ] Habit tracking interface

### Phase 2
- [ ] History and analytics
- [ ] Share functionality
- [ ] Devotions catalog
- [ ] Spanish translations

### Phase 3 (Future)
- [ ] Community features
- [ ] Prayer partner connections
- [ ] Advanced analytics
- [ ] Premium features

## 🐛 Known Issues

- Firebase emulator connection needs to be configured for development
- Icon assets need to be created for spiritual themes
- Accessibility features need implementation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💝 Support

Via Fidei is a faith-based project created to serve the Christian community. If you find this app helpful in your spiritual journey, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs and issues
- 💡 Suggesting new features
- 🙏 Sharing with your faith community
- 💰 Supporting through donations (link coming soon)

## 📞 Contact

For questions, suggestions, or spiritual guidance related to the app:

- GitHub Issues: [Report a bug or request a feature](https://github.com/your-username/via-fidei/issues)
- Email: support@viafidei.app (coming soon)

---

*"Therefore encourage one another and build each other up, just as in fact you are doing." - 1 Thessalonians 5:11*

## 📚 Resources

- [React Native Documentation](https://reactnative.dev/docs)
- [Expo Documentation](https://docs.expo.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Catholic Devotions Reference](https://www.catholic.org/prayers/)
