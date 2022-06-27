import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';

import Layout from '@/components/layout/layout';
import StyledToastContainer from '@/components/ui/styled-toast-container/styled-toast-container';

import { TypeComponentAuthFields } from '@/shared/types/auth.types';

import { store } from '@/store/store';

import AuthProvider from './auth-provider/auth-provider';
import HeadProvider from './head-provider/head-provider';

type MainProviderProps = TypeComponentAuthFields & {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function MainProvider({ children, Component }: MainProviderProps): JSX.Element {
  return (
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <StyledToastContainer />
          <AuthProvider Component={Component}>
            <Layout>{children}</Layout>
          </AuthProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  );
}
export default MainProvider;
