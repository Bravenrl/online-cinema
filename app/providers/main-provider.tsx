import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '@/components/layout/layout';
import StyledToastContainer from '@/components/ui/styled-toast-container/styled-toast-container';

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
    <QueryClientProvider client={queryClient}>
      <StyledToastContainer />
      <Layout>{children}</Layout>
    </QueryClientProvider>
  );
}
export default MainProvider;
