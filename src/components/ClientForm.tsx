import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TextField, Button } from '@mui/material';

const clientSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
});

interface ClientFormProps {
  onSubmit: (data: any) => void;
}

const ClientForm: React.FC<ClientFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(clientSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Name"
        {...register('name')}
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        label="Email"
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default ClientForm;
