import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'npx nx run @zyro/client:dev',
        production: 'npx nx run @zyro/client:preview',
      },
      ciWebServerCommand: 'npx nx run @zyro/client:preview',
      ciBaseUrl: 'http://localhost:4141',
    }),
    baseUrl: 'http://localhost:4141',
  },
});
