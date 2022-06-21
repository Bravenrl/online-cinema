import { QueryClient, QueryClientProvider } from 'react-query';

import Layout from '@/components/layout/layout';

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
      <Layout>{children}</Layout>
    </QueryClientProvider>
  );
}
export default MainProvider;
