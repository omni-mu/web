// Override with NEXT_PUBLIC_SITE_URL if the production domain changes.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://omnimu.vercel.app').replace(/\/$/, '');
export const DRIVER_APP = 'https://play.google.com/store/apps/details?id=com.omni.captain';
export const RIDER_APP = 'https://play.google.com/store/apps/details?id=com.omni.rides';
