import React from 'react';
import { FC } from 'react';
import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';
import { useForm, Controller } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getUser } from '../../utils/api';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const schema = object().shape({
  email: string()
    .email('Введите действительный адрес электронной почты')
    .required('Введите действительный адрес электронной почты'),
  number: string(),
});

interface TextMaskCustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = forwardRef<HTMLInputElement, TextMaskCustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="00-00-00"
        definitions={{
          '#': /[1-9]/,
        }}
        inputRef={ref}
        onAccept={(value) => onChange({ target: { name: props.name, value } })}
        overwrite
        unmask={true}
      />
    );
  },
);

interface IForm {
  setUsers: (res) => void;
}

export const Form: FC<IForm> = ({ setUsers }) => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      number: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      const result = await getUser(data);
      setUsers(result);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Card sx={{ width: '700px' }}>
      <Stack
        padding="60px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="30px"
        component="form"
        onSubmit={handleSubmit(onSubmit)}
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
          <Stack display="flex" flexDirection="column" gap="10px" width="100%">
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  error={!!errors.email}
                  type="text"
                  label="Email"
                  variant="outlined"
                  id="email"
                  helperText={
                    errors.email ? (errors?.email?.message as string) : ' '
                  }
                  {...field}
                />
              )}
            />

            <Controller
              name="number"
              control={control}
              render={({ field }) => (
                <>
                  {/* <InputLabel htmlFor="number">Number</InputLabel>
                    <Input
                      {...field}
                      name="textmask"
                      id="number"
                      inputComponent={TextMaskCustom as any}
                    /> */}
                  <TextField
                    error={!!errors.number}
                    type="tel"
                    label="Number"
                    variant="outlined"
                    id="number"
                    InputProps={{
                      inputComponent: TextMaskCustom as any,
                    }}
                    {...field}
                  />
                </>
              )}
            />
          </Stack>
        </CardContent>
        <CardActions>
          <Button variant="contained" type="submit" disabled={!isValid}>
            Submit
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
};
