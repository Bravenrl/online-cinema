import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import Layout from '@/components/layout/layout';
import StyledToastContainer from '@/components/ui/styled-toast-container/styled-toast-container';

import { store } from '@/store/store';

import HeadProvider from './head-provider/head-provider';

type MainProviderProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MainProvider({ children }: MainProviderProps): JSX.Element {
  return (
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <StyledToastContainer />
          <Layout>{children}</Layout>
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  );
}
export default MainProvider;
