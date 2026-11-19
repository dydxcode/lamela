/**
 * Konfigurasi Histats Tracking.
 * Isi SITE_ID dengan ID Histats Anda, atau lewat env NEXT_PUBLIC_HISTATS_ID.
 * Script akan dirender tepat sebelum tag penutup </head>.
 */
export const HISTATS_CONFIG = {
  SITE_ID: (process.env.NEXT_PUBLIC_HISTATS_ID ?? "") as string,
};
