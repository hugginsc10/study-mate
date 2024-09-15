# Study Mate

## Overview

Study Mate is a modern, feature-rich learning tool designed to help users create, organize, and study flashcards effectively. It combines the power of spaced repetition with a user-friendly interface, supporting multiple flashcard types and cross-platform functionality.

### Key Features

- Create and manage flashcards with question, answer, and deck attributes
- Multiple flashcard types: basic, multiple choice, and matching
- Deck organization with sub-decks
- Spaced repetition system for optimized learning
- Offline functionality with online syncing
- Push notifications for study reminders
- Progress tracking (cards completed per deck, success rate per card)
- User-created tag system
- Data export/import functionality
- Markdown support for text-based flashcards

## Technology Stack

- Frontend: React Native
- Backend: Python (Flask)
- Database: PostgreSQL
- Authentication: Google and Apple Sign-In
- UI Framework: Shoutem UI
- State Management: Redux Toolkit

## Prerequisites

Before you begin, ensure you have the following installed:

- Python 3.7+
- Node.js 12+
- PostgreSQL
- Xcode (for iOS development, Mac only)
- Android Studio (for Android development)

## Setup Instructions

### Backend (Flask) Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Create and activate a virtual environment:
   ```
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install required packages:
   ```
   pip install -r requirements.txt
   ```

4. Set up the database:
   - Create a PostgreSQL database for the project
   - Set the DATABASE_URL environment variable:
     ```
     export DATABASE_URL="postgresql://username:password@localhost/dbname"
     ```

5. Initialize the database:
   ```
   flask db init
   flask db migrate
   flask db upgrade
   ```

### Frontend (React Native) Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Install Expo CLI globally (if not already installed):
   ```
   npm install -g expo-cli
   ```

## Running the Application

### Backend

1. Ensure you're in the backend directory with the virtual environment activated.

2. Start the Flask server:
   ```
   flask run
   ```

The backend will be available at `http://localhost:5000`.

### Frontend

1. Ensure you're in the frontend directory.

2. Start the Expo development server:
   ```
   expo start
   ```

3. Use the Expo Go app on your mobile device to scan the QR code, or run on an emulator/simulator.

## Development Workflow

1. Backend development:
   - Make changes to Flask routes, models, or logic
   - Test API endpoints using tools like Postman or curl
   - Run `flask db migrate` and `flask db upgrade` if you make changes to database models

2. Frontend development:
   - Make changes to React Native components or screens
   - Use the live reloading feature in Expo to see changes in real-time
   - Test on both iOS and Android to ensure cross-platform compatibility

3. Version Control:
   - Commit changes regularly
   - Push to a remote repository for backup and collaboration

## Testing

- Backend: Run tests using pytest (to be implemented)
- Frontend: Run tests using Jest and React Native Testing Library (to be implemented)

## Deployment

(to be implemented)

## Contributing

(to be implemented)

## License



## Contact

- [GitHub](https://www.github.com/hugginsc10)