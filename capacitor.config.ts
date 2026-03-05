import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.quantumwebdynamics.medisynclabs.dev',
  appName: 'MediSyncLabs DEV',
  webDir: 'dist',

  server: {
    // ✅ App opens here first (inside the WebView)
    url: 'http://192.168.1.127:8056/manual_entry',
    cleartext: true,

    // ✅ Only origins/domains here (NOT paths)
    allowNavigation: [
      'http://192.168.1.127',
      'http://192.168.1.127:8056',
      'https://medisynclabs.ca',
      'https://www.medisynclabs.ca',
      'https://*.medisynclabs.ca',
    ],
  },

  ios: {
    backgroundColor: '#91bfff',
  },

  plugins: {
    SplashScreen: {
      backgroundColor: '#80b5ff',
      launchAutoHide: true,
      showSpinner: false,
    },
  },
};

export default config;