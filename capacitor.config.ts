import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Last Orders',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
