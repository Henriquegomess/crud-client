import { useQuery, useMutation, useQueryClient } from 'react-query';

export const useClients = () => {
  return useQuery('clients', async () => {
    const response = await fetch('/api/clients');
    return response.json();
  });
};

export const useAddClient = () => {
  const queryClient = useQueryClient();
  return useMutation(async (newClient: Client) => {
    await fetch('/api/clients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newClient),
    });
    queryClient.invalidateQueries('clients');
  });
};
