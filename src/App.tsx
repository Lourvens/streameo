import * as React from 'react';
import tw from 'tailwind-styled-components'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import AppRoutes from '@/router';
import Sidebar from '@/layouts/sidebar';
import Navbar from '@/layouts/navbar';

import store from '@/store'

const queryClient = new QueryClient();

const Wrapper = tw.div`
  w-full p-0 lg:pl-48
`

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navbar />
        <Sidebar />
        <Wrapper>
          <AppRoutes />
        </Wrapper>
      </Provider>

    </QueryClientProvider>
  );
}

export default App;
