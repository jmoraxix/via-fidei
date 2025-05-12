# Via Fidei - Project Planning & Architecture

## Project Overview
- **Description**: A spiritual habit tracker for Christians to maintain and grow their faith practices
- **Technology Stack**: React Native with Expo, Firebase backend, TypeScript
- **Architecture**: Mobile-first with web deployment capability
- **Target Audience**: Christians (particularly Catholics) seeking spiritual growth

## Development Guidelines

### Code Structure & Modularity
- **Maximum file length**: 500 lines of code
- **Modular architecture**: Features separated by domain/responsibility
- **Import preferences**: Relative imports within packages
- **Directory structure**: Feature-based organization

### Testing Requirements
- **Framework**: Jest/React Native Testing Library
- **Location**: `/tests` folder mirroring app structure
- **Requirements per feature**:
  - 1 test for expected use case
  - 1 edge case test
  - 1 failure case test
- **Coverage target**: 80%+

### Style & Conventions
- **Language**: TypeScript (JavaScript where necessary)
- **Linting**: ESLint with Expo configuration
- **Docstrings**: Required for every function
- **Comments**: Use `// Reason:` for complex logic explanations

### Architecture Patterns
1. **Component Architecture**:
   - Atomic design methodology
   - Reusable components in `/components`
   - Feature-specific components within feature directories

2. **State Management**:
   - Redux Toolkit for global state
   - React hooks for local state
   - Firebase real-time subscriptions

3. **Data Flow**:
   - Unidirectional data flow
   - Firebase Firestore for persistence
   - Optimistic updates with rollback

4. **Routing/Navigation**:
   - React Navigation v6
   - Tab-based navigation for main features
   - Stack navigation for detail screens

### File Naming Conventions
- **Components**: PascalCase (e.g., `HabitCard.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAuth.ts`)
- **Utils**: camelCase (e.g., `dateUtils.ts`)
- **Constants**: SCREAMING_SNAKE_CASE (e.g., `HABIT_FREQUENCIES.ts`)
- **Types**: PascalCase with Type suffix (e.g., `HabitType.ts`)

### Project Structure
```
/app
  /authentication
  /habits
  /sharing
  /history
  /devotions
/components
  /ui (reusable components)
  /forms
  /navigation
/hooks
  /useAuth.ts
  /useHabits.ts
  /useFirestore.ts
/utils
  /dateUtils.ts
  /validation.ts
  /firebase.ts
/constants
  /colors.ts
  /typography.ts
  /dimensions.ts
/types
  /Habit.ts
  /User.ts
  /Completion.ts
/tests
  /components
  /hooks
  /utils
```

### Firebase Configuration
- **Authentication**: Email/password, Google Sign-In
- **Database**: Cloud Firestore with security rules
- **Functions**: TypeScript-based Cloud Functions
- **Hosting**: Firebase Hosting for web deployment

### Internationalization
- **Framework**: i18next with react-i18next
- **Languages**: English (default), Spanish (immediate)
- **Future**: Portuguese, French, Italian
- **Structure**: JSON translation files in `/locales`

## Development Workflow

### Git Workflow
- **Main branch**: Production-ready code
- **Feature branches**: `feature/description`
- **Release branches**: `release/version`
- **Hotfix branches**: `hotfix/description`

### Commit Conventions
- **Format**: `type(scope): description`
- **Types**: feat, fix, docs, style, refactor, test, chore
- **Examples**:
  - `feat(habits): add habit creation flow`
  - `fix(auth): resolve login validation issue`
  - `docs(readme): update installation instructions`

### Quality Assurance
- **Pre-commit hooks**: ESLint, TypeScript check, test runner
- **PR requirements**: All tests pass, code review approval
- **CI/CD**: GitHub Actions for testing and deployment

## Security Considerations
- **Data isolation**: User-specific Firestore rules
- **Privacy**: Minimal data collection (email only)
- **Encryption**: Local data encryption for sensitive information
- **Authentication**: Secure token management with Firebase Auth

## Performance Optimization
- **React.memo**: For expensive components
- **useMemo/useCallback**: For heavy computations
- **Lazy loading**: Code splitting for routes
- **Offline support**: Local caching with sync
- **Image optimization**: Compressed assets, lazy loading

## Accessibility Standards
- **WCAG 2.1 AA**: Compliance target
- **Screen readers**: Full support with semantic markup
- **Color contrast**: Minimum 4.5:1 ratio
- **Touch targets**: Minimum 44px
- **Focus management**: Keyboard navigation support

## Documentation Standards
- **README**: Installation, setup, and basic usage
- **Components**: PropTypes/TypeScript interfaces
- **API**: JSDoc comments for all public methods
- **Architecture**: Decision records for major choices
- **Deployment**: Step-by-step deployment guide
