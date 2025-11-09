# Quick Start Guide

## Prerequisites
- Docker and Docker Compose installed
- Supabase account with a project created

## Setup (5 minutes)

### 1. Get Supabase Credentials

Go to your Supabase project settings:
- **Project URL**: Found in Settings > API
- **Anon Key**: Found in Settings > API
- **Service Role Key**: Found in Settings > API (keep this secret!)

### 2. Configure Environment Variables

Create `.env` in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SOCKET_URL=http://localhost:3001
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Replace the placeholders with your actual Supabase credentials.

### 3. Start the Application

```bash
docker-compose up
```

That's it! The app will be available at http://localhost:3000

### 4. Test the Application

1. Open http://localhost:3000 in your browser
2. Click "Sign Up" and create an account with:
   - Username: user1
   - Email: user1@example.com
   - Password: password123
3. Open http://localhost:3000 in an incognito/private window
4. Create another account:
   - Username: user2
   - Email: user2@example.com
   - Password: password123
5. In the first window (user1), click on "user2" in the user list
6. Start chatting! Messages will appear in real-time in both windows

## Troubleshooting

### Database schema not applied
The schema should be automatically applied. If you see any errors about missing tables, check that the migration ran successfully in your Supabase dashboard under Database > Migrations.

### Can't connect to backend
Make sure port 3001 is not being used by another application.

### Docker issues
```bash
# Clean up and rebuild
docker-compose down
docker-compose up --build
```

## Development Mode

To run without Docker:

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm run dev
```

Make sure to create separate `.env.local` (frontend) and `server/.env` (backend) files as described in the main README.
