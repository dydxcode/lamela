import { ADS_CONFIG } from "@/config/ads";

export function HeadAdScript() {
  if (!ADS_CONFIG.HEAD_AD_CODE) return null;
  return (
    <script
      type="text/plain"
      data-ad-slot="head"
      dangerouslySetInnerHTML={{ __html: ADS_CONFIG.HEAD_AD_CODE }}
    />
  );
}
