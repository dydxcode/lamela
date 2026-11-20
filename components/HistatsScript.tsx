import Script from "next/script";
import { HISTATS_CONFIG } from "@/config/histats";

export function HistatsScript() {
  const siteId = HISTATS_CONFIG.SITE_ID;
  if (!siteId) return null;

  return (
    <>
      <Script
        id="histats-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
var _Hasync = _Hasync || [];
_Hasync.push(['Histats.start', '1,${siteId},4,5,172,25,00011111']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
  var hs = document.createElement('script');
  hs.type = 'text/javascript';
  hs.async = true;
  hs.src = '//s10.histats.com/js15_as.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();
          `.trim(),
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="/" target="_blank" rel="noreferrer">
          <img
            src={`//sstatic1.histats.com/0.gif?${siteId}&101`}
            alt="free hit counters"
            style={{ border: 0 }}
          />
        </a>
      </noscript>
    </>
  );
}
