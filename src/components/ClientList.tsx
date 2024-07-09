import React from 'react';
import { useClients } from '../services/clientService';
import { List, ListItem, ListItemText } from '@mui/material';

const ClientList: React.FC = () => {
  const { data: clients, isLoading } = useClients();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <List>
      {clients?.map((client: Client) => (
        <ListItem key={client.id}>
          <ListItemText primary={client.name} secondary={client.email} />
        </ListItem>
      ))}
    </List>
  );
};

export default ClientList;
