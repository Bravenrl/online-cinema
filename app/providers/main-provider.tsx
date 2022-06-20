import { QueryClient, QueryClientProvider } from 'react-query';

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
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
export default MainProvider;
