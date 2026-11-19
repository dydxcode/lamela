import Script from "next/script";
import { HISTATS_CONFIG } from "@/config/histats";

export function HistatsScript() {
  const siteId = HISTATS_CONFIG.SITE_ID;
  if (!siteId) return null;

  return (
    <Script id="histats-script" strategy="afterInteractive">
      {`
        var _Hasync = _Hasync || [];
        _Hasync.push(['Histats.start', '1,${siteId},4,0,0,0,00010000']);
        _Hasync.push(['Histats.fasi', '1']);
        _Hasync.push(['Histats.track_hits', '']);
        (function() {
          var hs = document.createElement('script');
          hs.type = 'text/javascript';
          hs.async = true;
          hs.src = '//s10.histats.com/js15_as.js';
          (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
        })();
      `}
    </Script>
  );
}
