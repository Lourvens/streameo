import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppRoutes from '@/router';
import Sidebar from '@/layouts/sidebar';
import Navbar from '@/layouts/navbar';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Navbar />
        <Sidebar />
        <AppRoutes />
    </QueryClientProvider>
  );
}

export default App;
