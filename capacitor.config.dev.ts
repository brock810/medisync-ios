import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.quantumwebdynamics.medisynclabs',
  appName: 'MediSyncLabs DEV',
  webDir: 'dist',
  server: {
    url: 'http://192.168.1.127:8056',
    cleartext: true
  }
};

export default config;