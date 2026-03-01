import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.quantumwebdynamics.medisynclabs',
  appName: 'MediSyncLabs',
  webDir: 'dist',
  server: {
    url: 'https://www.medisynclabs.ca/ios',
    cleartext: false
  }
};

export default config;