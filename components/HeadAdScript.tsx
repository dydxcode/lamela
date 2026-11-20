import Script from "next/script";
import { ADS_CONFIG } from "@/config/ads";

export function HeadAdScript() {
  if (!ADS_CONFIG.POPUNDER_SRC) return null;

  return (
    <Script
      id="adsterra-popunder"
      src={ADS_CONFIG.POPUNDER_SRC}
      strategy="beforeInteractive"
    />
  );
}
