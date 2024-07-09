import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { worker } from '../mocks/browser';
import ClientList from './ClientList';

beforeAll(() => worker.start());
afterEach(() => worker.resetHandlers());
afterAll(() => worker.stop());

const queryClient = new QueryClient();

test('renders client list', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ClientList />
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
  });
});
