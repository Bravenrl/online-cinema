import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import Layout from '@/components/layout/layout';
import StyledToastContainer from '@/components/ui/styled-toast-container/styled-toast-container';

import { store } from '@/store/store';

import AuthProvider from './auth-provider/auth-provider';
import HeadProvider from './head-provider/head-provider';
import { TypeComponentAuthFields } from '@/shared/types/auth.types';

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
        </QueryClientProvider>
      </Provider>
    </HeadProvider>
  );
}
export default MainProvider;
