import { useState } from 'react';

import './App.css';
import { Form } from './components/Form';
import { UsersTable } from './components/UsersTable/UsersTable';
import { CircularProgress, Stack, Typography } from '@mui/material';

export interface IUserData {
  email: string;
  number: string;
}

function App() {
  const [users, setUsers] = useState<IUserData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Stack display="flex" flexDirection="column" gap="30px" alignItems="center">
      <Form
        setUsers={setUsers}
        loading={isLoading}
        setIsLoading={setIsLoading}
      />
      {users && users.length > 0 && <UsersTable users={users} />}
      {users && users.length === 0 && !isLoading && (
        <Typography>Пользователи не найдены</Typography>
      )}
      {isLoading && (
        <>
          <svg width={0} height={0}>
            <defs>
              <linearGradient
                id="my_gradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#04915d" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
          </svg>
          <CircularProgress
            sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }}
          />
        </>
      )}
    </Stack>
  );
}

export default App;
