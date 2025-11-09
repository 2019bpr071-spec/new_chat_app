# Real-Time Chat Application

A minimal real-time 1-to-1 chat application built with Next.js, Express, Socket.IO, and Supabase.

## Features

- User authentication (login/signup) with Supabase
- Real-time 1-to-1 messaging using Socket.IO
- Online/offline user status
- Message persistence in Supabase
- Responsive UI with Tailwind CSS
- Docker support for easy deployment

## Tech Stack

- **Frontend**: Next.js 13, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express, Socket.IO, TypeScript
- **Database**: Supabase (PostgreSQL)
- **Real-time**: Socket.IO
- **Deployment**: Docker

## Project Structure

```
.
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main page with auth/chat routing
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── auth/             # Authentication components
│   │   └── AuthForm.tsx  # Login/Signup form
│   └── chat/             # Chat components
│       └── ChatRoom.tsx  # Main chat interface
├── lib/                   # Utility libraries
│   └── supabase/         # Supabase client
│       └── client.ts     # Supabase configuration
├── server/                # Backend server
│   ├── src/
│   │   └── index.ts      # Express + Socket.IO server
│   ├── Dockerfile        # Backend Docker config
│   └── package.json      # Backend dependencies
├── Dockerfile            # Frontend Docker config
└── docker-compose.yml    # Docker Compose configuration
```

## Setup Instructions

### Prerequisites

- Node.js 20+
- Docker and Docker Compose
- Supabase account

### 1. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. The database schema is already applied via migration
3. Get your project credentials:
   - Project URL
   - Anon/Public Key
   - Service Role Key (for backend)

### 2. Environment Configuration

#### Frontend (.env.local)

Create `.env.local` in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
```

#### Backend (server/.env)

Create `server/.env`:

```env
PORT=3001
CLIENT_URL=http://localhost:3000
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Running with Docker

The easiest way to run the application:

```bash
# Build and start all services
docker-compose up --build

# Run in detached mode
docker-compose up -d

# Stop services
docker-compose down
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### 4. Running Locally (Development)

#### Frontend

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

#### Backend

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Run development server
npm run dev
```

## Usage

1. Open http://localhost:3000
2. Sign up with email and password
3. Choose a username
4. Select a user from the list to start chatting
5. Messages are sent in real-time and persist in the database

## Database Schema

### profiles table
- `id`: UUID (references auth.users)
- `username`: Text (unique)
- `created_at`: Timestamp
- `last_seen`: Timestamp

### messages table
- `id`: UUID (primary key)
- `sender_id`: UUID (references profiles)
- `receiver_id`: UUID (references profiles)
- `content`: Text
- `created_at`: Timestamp
- `read`: Boolean

## Security

- Row Level Security (RLS) enabled on all tables
- Users can only read/write their own data
- Messages restricted to sender and receiver
- Authentication required for all operations

## Notes

- Email confirmation is disabled by default in Supabase
- Messages are delivered in real-time when both users are online
- Offline messages are stored and delivered when recipient comes online
- No file uploads, reactions, or advanced features (minimal implementation)
