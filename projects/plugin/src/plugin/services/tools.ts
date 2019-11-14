import { wakoLog } from '@wako-app/mobile-sdk';

export function logData(...data: any) {
  wakoLog('plugin.imdb', data);
}

export function logEvent(eventName: string, data: {}) {
  if ('FirebasePlugin' in window) {
    const firebase = window['FirebasePlugin'] as any;
    firebase.logEvent(eventName, data);
  }
}
