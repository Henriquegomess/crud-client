import { QueryClient, QueryClientProvider } from 'react-query';
import ClientList from './ClientList';

const queryClient = new QueryClient();

export default {
  title: 'ClientList',
  component: ClientList,
};

export const Default = () => (
  <QueryClientProvider client={queryClient}>
    <ClientList />
  </QueryClientProvider>
);
