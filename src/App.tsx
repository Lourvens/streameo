import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';


import AppRoutes from '@/router';
import Sidebar from '@/layouts/sidebar';
import Navbar from '@/layouts/navbar';

import store from '@/store'

const queryClient = new QueryClient();

const styles = {
  wrapper: 'w-full p-0 lg:pl-48'
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navbar />
        <Sidebar />
        <div className={styles.wrapper}>
          <AppRoutes />
          <ToastContainer />
        </div>
      </Provider>

    </QueryClientProvider>
  );
}

export default App;
