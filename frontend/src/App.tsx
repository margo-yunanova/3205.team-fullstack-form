import React, { useState } from 'react';

import './App.css';
import { Form } from './components/Form';
import { UsersTable } from './components/UsersTable/UsersTable';
import { Stack } from '@mui/material';

export interface IUserData {
  email: string;
  number: string;
}

function App() {
  const [users, setUsers] = useState<IUserData[]>([]);

  return (
    <Stack display="flex" flexDirection="column" gap="30px">
      <Form setUsers={setUsers} />
      <UsersTable users={users} />
    </Stack>
  );
}

export default App;
