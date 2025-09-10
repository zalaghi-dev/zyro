import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app';
// import { ThemeWrapper } from './providers/ThemeProvider;
import { StyledEngineProvider } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      {/* <ThemeWrapper> */}
        <App />
      {/* </ThemeWrapper> */}
    </StyledEngineProvider>
  </StrictMode>
);
