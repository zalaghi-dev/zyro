import { Button, TextField, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Signup = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 300,
        margin: 'auto',
      }}
    >
      <h2>{t('signup')}</h2>
      <TextField label="Email" variant="outlined" />
      <TextField label="Password" type="password" variant="outlined" />
      <Button variant="contained">{t('signup')}</Button>
    </Box>
  );
};
