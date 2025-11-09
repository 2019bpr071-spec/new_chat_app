import dynamic from 'next/dynamic';

// Dynamically import the client component with no SSR
const ChatApp = dynamic(() => import('@/components/ChatApp'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  ),
});

export default function Home() {
  return <ChatApp />;
}
