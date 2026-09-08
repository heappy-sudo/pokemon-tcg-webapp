import { ReactNode } from 'react';
import '../globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '../components/ToastNotification';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ToastProvider>
            <nav className="bg-gray-800 text-white p-4">Navbar</nav>
            <main>{children}</main>
          </ToastProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}