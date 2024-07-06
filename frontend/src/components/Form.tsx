import React from 'react';
import { FC } from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

export const Form: FC = () => (
  <Card sx={{ width: '700px' }}>
    <Stack
      sx={{
        padding: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px',
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Введите данные
      </Typography>
      <CardContent
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <Stack display="flex" flexDirection="column" gap="24px" width="100%">
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Number" variant="outlined" />
        </Stack>
      </CardContent>
      <CardActions>
        <Button variant="contained">Submit</Button>
      </CardActions>
    </Stack>
  </Card>
);
