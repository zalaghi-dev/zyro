import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { i18n, t } = useTranslation();

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Chat App
          </Typography>
          <Button color="inherit" onClick={() => changeLang('en')}>
            EN
          </Button>
          <Button color="inherit" onClick={() => changeLang('fa')}>
            FA
          </Button>
        </Toolbar>
      </AppBar>
      <main style={{ padding: '1rem' }}>{children}</main>
    </>
  );
};
