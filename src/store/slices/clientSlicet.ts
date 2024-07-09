import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Client {
  id: string;
  name: string;
  email: string;
}

interface ClientState {
  clients: Client[];
}

const initialState: ClientState = {
  clients: [],
};

const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setClients(state, action: PayloadAction<Client[]>) {
      state.clients = action.payload;
    },
    addClient(state, action: PayloadAction<Client>) {
      state.clients.push(action.payload);
    },
    updateClient(state, action: PayloadAction<Client>) {
      const index = state.clients.findIndex(
        (client) => client.id === action.payload.id
      );
      if (index !== -1) {
        state.clients[index] = action.payload;
      }
    },
    deleteClient(state, action: PayloadAction<string>) {
      state.clients = state.clients.filter(
        (client) => client.id !== action.payload
      );
    },
  },
});

export const { setClients, addClient, updateClient, deleteClient } =
  clientSlice.actions;
export default clientSlice.reducer;
