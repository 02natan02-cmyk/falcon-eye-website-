/* Falcon Eye – Webdesign: gemeinsame Bildszenen für „Ausprobieren“ (Handy) und „Flugplan“ (Vorschaukarte).
   Nur gezeichnete Szenen (SVG, keine Fotos, keine Kundennamen). Farben kommen aus den Variablen in wd-mitmachen-szenen.css.
   window.WDM_SZENEN = { svg: {schluessel: '<svg…>'}, name: {schluessel: 'Bildname'} } */
(function () {
  if (window.WDM_SZENEN) return;
  var H = '<svg viewBox="0 0 300 190" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">';
  var E = '</svg>';
  var S = {};

  /* ---------- Café ---------- */
  S.gastro = H +
    '<g class="wdm-d1"><rect class="sl" x="16" y="18" width="88" height="92" rx="5" opacity=".94"/>' +
    '<circle class="sa wdm-breathe" cx="60" cy="64" r="17"/>' +
    '<g class="ta wdm-rays" fill="none" stroke-width="3" stroke-linecap="round" opacity=".85"><path d="M60 36v-8M60 92v8M32 64h-8M88 64h8M40 44l-5-5M80 84l5 5M40 84l-5 5M80 44l5-5"/></g>' +
    '<path class="tm" fill="none" stroke-width="4" d="M60 18v92M16 64h88"/><rect class="tm" fill="none" stroke-width="6" x="16" y="18" width="88" height="92" rx="5"/></g>' +
    '<path class="tk" fill="none" stroke-width="1.4" opacity=".55" d="M-10 8Q40 36 90 10T190 10T290 10L310 8"/>' +
    '<g class="sa"><circle class="wdm-twk" cx="15" cy="18.6" r="3.4"/><circle class="wdm-twk" style="animation-delay:.4s" cx="40" cy="22.5" r="3.4"/><circle class="wdm-twk" style="animation-delay:.8s" cx="65" cy="19.6" r="3.4"/><circle class="wdm-twk" style="animation-delay:1.2s" cx="115" cy="18.6" r="3.4"/><circle class="wdm-twk" style="animation-delay:.2s" cx="140" cy="22.5" r="3.4"/><circle class="wdm-twk" style="animation-delay:.6s" cx="165" cy="19.6" r="3.4"/><circle class="wdm-twk" style="animation-delay:1s" cx="215" cy="18.6" r="3.4"/><circle class="wdm-twk" style="animation-delay:1.4s" cx="240" cy="22.5" r="3.4"/><circle class="wdm-twk" style="animation-delay:.1s" cx="265" cy="19.6" r="3.4"/></g>' +
    '<g class="wdm-swing" style="transform-origin:150px 24px"><path class="tk" fill="none" stroke-width="1.6" d="M150 24v34"/><path class="sa" d="M134 76C134 62 143 58 150 58S166 62 166 76z"/><circle class="sl" cx="150" cy="77" r="4.2"/><path class="sl" opacity=".14" d="M138 78h24l24 64h-72z"/></g>' +
    '<g class="wdm-swing" style="transform-origin:196px 24px;animation-delay:-1.1s"><path class="tk" fill="none" stroke-width="1.6" d="M196 24v22"/><path class="sa" d="M182 64C182 50 190 46 196 46S210 50 210 64z"/><circle class="sl" cx="196" cy="65" r="4"/><path class="sl" opacity=".12" d="M185 66h22l20 62h-62z"/></g>' +
    '<g class="wdm-d2"><rect class="sd" x="226" y="34" width="62" height="74" rx="3"/><rect class="tm" fill="none" stroke-width="3.5" x="226" y="34" width="62" height="74" rx="3"/><path class="tl" fill="none" stroke-width="2.4" stroke-linecap="round" opacity=".85" d="M236 52h32M236 64h44M236 76h38M236 88h24"/><circle class="sa" cx="276" cy="52" r="3.4"/></g>' +
    '<rect class="sd" y="148" width="300" height="42"/><rect class="sm" y="148" width="300" height="4" opacity=".6"/>' +
    '<ellipse class="sk" opacity=".25" cx="136" cy="156" rx="52" ry="7"/>' +
    '<ellipse class="sl" cx="134" cy="150" rx="46" ry="8"/><ellipse class="sm" cx="134" cy="149" rx="38" ry="5.4" opacity=".55"/>' +
    '<g class="wdm-d3"><path class="sl" d="M100 108h68v14c0 20-15 28-34 28s-34-8-34-28z"/>' +
    '<ellipse class="sd" cx="134" cy="108" rx="34" ry="6.6"/><ellipse class="sa" opacity=".55" cx="134" cy="108" rx="24" ry="3.8"/>' +
    '<path class="tl" fill="none" stroke-width="7" stroke-linecap="round" d="M168 116c22 0 22 24-5 24"/>' +
    '<g class="tl" fill="none" stroke-width="3.2" stroke-linecap="round" opacity=".8"><path class="wdm-steam" d="M120 96c-8-10 8-14 0-26"/><path class="wdm-steam" style="animation-delay:.8s" d="M134 94c-8-10 8-14 0-26"/><path class="wdm-steam" style="animation-delay:1.6s" d="M148 96c-8-10 8-14 0-26"/></g></g>' +
    '<g><rect class="sl" x="14" y="144" width="22" height="22" rx="3" opacity=".9"/><path class="sd" d="M25 144c-9-8-4-20 0-26 4 6 9 18 0 26z"/><path class="sa" d="M25 144c9-8 12-16 14-22-8 2-16 10-14 22z"/></g>' +
    E;

  /* ---------- Werkstatt / Handwerk ---------- */
  S.handwerk = H +
    '<g class="wdm-spin" style="transform-origin:238px 66px"><circle class="ta" cx="238" cy="66" r="42" fill="none" stroke-width="15" stroke-dasharray="14.7 8.5"/><circle class="sa" cx="238" cy="66" r="33"/><circle class="sb" cx="238" cy="66" r="13"/><circle class="sa" cx="238" cy="66" r="5"/></g>' +
    '<g class="wdm-spinr" style="transform-origin:176px 112px"><circle class="tk" cx="176" cy="112" r="24" fill="none" stroke-width="11" stroke-dasharray="9.4 6.4" opacity=".7"/><circle class="sk" opacity=".7" cx="176" cy="112" r="18"/><circle class="sb" cx="176" cy="112" r="7"/></g>' +
    '<g transform="translate(64 112) rotate(-32)"><rect class="sd" x="-4.5" y="-12" width="9" height="70" rx="3.5"/><rect class="sk" x="-19" y="-28" width="38" height="17" rx="3"/><path class="sk" d="M-19 -26c-12 0-16 6-18 12l12 0z"/></g>' +
    '<g transform="translate(98 118) rotate(28)"><rect class="sk" x="-4.5" y="-4" width="9" height="62" rx="4.5"/><circle class="sk" cx="0" cy="-12" r="14"/><rect class="sb" x="-5" y="-34" width="10" height="16"/></g>' +
    '<g class="wdm-swing" style="transform-origin:48px 8px"><path class="tk" fill="none" stroke-width="2.4" d="M48 8v20"/><path class="sa" d="M24 62c0-22 11-34 24-34s24 12 24 34z"/><rect class="sa" x="18" y="60" width="60" height="8" rx="4"/><rect class="sl" opacity=".7" x="43" y="28" width="10" height="16" rx="2"/></g>' +
    '<rect class="sk" opacity=".85" y="160" width="300" height="30"/><rect class="sa" opacity=".9" y="158" width="300" height="5"/>' +
    '<g transform="translate(206 150)"><rect class="sk" x="0" y="0" width="52" height="12" rx="3"/><rect class="sa" x="8" y="-12" width="9" height="12" rx="2"/><rect class="sl" opacity=".8" x="30" y="-18" width="7" height="18" rx="2"/></g>' +
    E;

  /* ---------- Straße / Auto ---------- */
  S.auto = H +
    '<circle class="sa" cx="232" cy="56" r="31" opacity=".94"/><circle class="sl" cx="232" cy="56" r="44" opacity=".12"/>' +
    '<g class="sm"><rect x="0" y="92" width="34" height="56"/><rect x="38" y="68" width="26" height="80"/><rect x="68" y="100" width="38" height="48"/><rect x="112" y="80" width="30" height="68"/><rect x="146" y="104" width="40" height="44"/><rect x="190" y="74" width="28" height="74"/><rect x="224" y="96" width="36" height="52"/><rect x="264" y="84" width="40" height="64"/></g>' +
    '<g class="sl" opacity=".6"><rect class="wdm-twk" x="8" y="102" width="5" height="6"/><rect class="wdm-twk" style="animation-delay:.7s" x="20" y="116" width="5" height="6"/><rect class="wdm-twk" style="animation-delay:.3s" x="46" y="80" width="5" height="6"/><rect class="wdm-twk" style="animation-delay:1.1s" x="46" y="100" width="5" height="6"/><rect class="wdm-twk" style="animation-delay:.5s" x="120" y="92" width="5" height="6"/><rect class="wdm-twk" style="animation-delay:.9s" x="128" y="112" width="5" height="6"/><rect class="wdm-twk" style="animation-delay:.2s" x="198" y="86" width="5" height="6"/><rect class="wdm-twk" style="animation-delay:1.3s" x="270" y="98" width="5" height="6"/><rect class="wdm-twk" style="animation-delay:.6s" x="76" y="112" width="5" height="6"/></g>' +
    '<rect class="sd" y="146" width="300" height="44"/><rect class="sk" opacity=".5" y="145" width="300" height="3"/>' +
    '<g class="sl wdm-dash" opacity=".75"><rect x="0" y="172" width="24" height="4" rx="2"/><rect x="46" y="172" width="24" height="4" rx="2"/><rect x="92" y="172" width="24" height="4" rx="2"/><rect x="138" y="172" width="24" height="4" rx="2"/><rect x="184" y="172" width="24" height="4" rx="2"/><rect x="230" y="172" width="24" height="4" rx="2"/><rect x="276" y="172" width="24" height="4" rx="2"/><rect x="322" y="172" width="24" height="4" rx="2"/></g>' +
    '<g class="tl wdm-speed" fill="none" stroke-width="3" stroke-linecap="round" opacity=".55"><path d="M10 118h36M2 128h26M26 108h26"/></g>' +
    '<g class="wdm-drive"><path class="sl" opacity=".2" d="M222 124 300 104V150L222 132z"/>' +
    '<path class="sa" d="M64 146v-12c0-8 6-12 14-14l24-6c8-16 20-24 34-24h30c12 0 20 6 26 16l12 12c14 2 22 6 22 18v10z"/>' +
    '<path class="sb" d="M110 112h28v18h-40zM144 112h20c6 0 10 3 13 8l7 10h-40z"/>' +
    '<circle class="sk" cx="98" cy="146" r="15"/><circle class="sl" cx="98" cy="146" r="6"/><circle class="sk" cx="206" cy="146" r="15"/><circle class="sl" cx="206" cy="146" r="6"/>' +
    '<rect class="sl" x="214" y="128" width="9" height="6" rx="2"/></g>' +
    E;

  /* ---------- Küche ---------- */
  S.kueche = H +
    '<rect class="sa" opacity=".5" x="12" y="14" width="160" height="60" rx="3"/><rect class="sd" x="122" y="16" width="48" height="56"/><rect class="sm" x="122" y="40" width="48" height="3"/><rect class="sl" x="134" y="26" width="9" height="14" rx="1" opacity=".8"/><rect class="sa" x="150" y="28" width="10" height="12" rx="1"/>' +
    '<g class="wdm-door" style="transform-origin:172px 44px"><rect class="sa" x="120" y="14" width="52" height="60" rx="2"/><rect class="sl" x="125" y="58" width="3" height="10" rx="1"/></g>' +
    '<path class="sd" opacity=".35" d="M66 14v60M118 14v60"/><rect class="sl" x="58" y="58" width="3" height="10" rx="1"/><rect class="sl" x="110" y="58" width="3" height="10" rx="1"/>' +
    '<path class="sk" opacity=".88" d="M198 12h78l-10 30h-58z"/><path class="sl" opacity=".14" d="M208 42h58l24 70H184z"/><circle class="sl wdm-twk" cx="237" cy="40" r="3" opacity=".9"/>' +
    '<rect class="sa" y="120" width="300" height="70"/><rect class="sk" opacity=".85" y="110" width="300" height="11"/>' +
    '<path class="sd" opacity=".35" d="M62 121v69M124 121v69M186 121v69M248 121v69"/><g class="sl"><rect x="22" y="130" width="22" height="3" rx="1.5"/><rect x="82" y="130" width="22" height="3" rx="1.5"/><rect x="144" y="130" width="22" height="3" rx="1.5"/><rect x="206" y="130" width="22" height="3" rx="1.5"/><rect x="266" y="130" width="22" height="3" rx="1.5"/></g>' +
    '<g><rect class="sk" x="208" y="88" width="48" height="22" rx="3"/><rect class="sk" x="204" y="84" width="56" height="6" rx="3"/><rect class="sl" x="254" y="94" width="14" height="4" rx="2" opacity=".9"/>' +
    '<g class="tl" fill="none" stroke-width="3" stroke-linecap="round" opacity=".75"><path class="wdm-steam" d="M222 78c-6-8 6-10 0-20"/><path class="wdm-steam" style="animation-delay:.8s" d="M236 78c-6-8 6-10 0-20"/><path class="wdm-steam" style="animation-delay:1.6s" d="M250 78c-6-8 6-10 0-20"/></g></g>' +
    '<g><rect class="sl" x="30" y="82" width="20" height="28" rx="4" opacity=".92"/><rect class="sa" x="30" y="86" width="20" height="5"/><rect class="sl" x="58" y="92" width="18" height="18" rx="3" opacity=".85"/><path class="sd" d="M100 110c-6-12-2-24 2-30 4 6 8 18-2 30zM100 110c10-8 12-18 12-26-8 4-16 12-12 26z"/><rect class="sl" x="90" y="102" width="22" height="9" rx="3"/></g>' +
    E;

  /* ---------- Ruhe / Praxis ---------- */
  S.praxis = H +
    '<circle class="sa wdm-breathe2" cx="214" cy="66" r="58" opacity=".18"/><circle class="sa wdm-breathe" cx="214" cy="66" r="36" opacity=".92"/>' +
    '<path class="sm" d="M0 118C50 90 100 108 150 100S250 82 300 102V190H0z"/>' +
    '<path class="sd" opacity=".6" d="M0 142C60 118 110 140 170 126S260 116 300 134V190H0z"/>' +
    '<path class="sa" opacity=".55" d="M0 164C70 148 130 168 200 156S280 152 300 160V190H0z"/>' +
    '<g><ellipse class="sk" opacity=".3" cx="60" cy="178" rx="30" ry="6"/><ellipse class="sk" cx="60" cy="166" rx="26" ry="9"/><ellipse class="sd" cx="60" cy="152" rx="18" ry="7.5"/><ellipse class="sl" cx="60" cy="141" rx="11" ry="5.5"/></g>' +
    '<g class="wdm-sway" style="transform-origin:128px 178px"><path class="ta" fill="none" stroke-width="2.6" stroke-linecap="round" d="M128 180c-2-24 4-46 14-66"/><path class="sa" d="M142 114c-14 2-24 10-26 22 12 0 24-8 26-22z"/><path class="sa" opacity=".8" d="M136 134c12-2 22 4 26 14-12 2-22-2-26-14z"/><path class="sa" opacity=".65" d="M132 154c-10-2-18 2-22 10 10 2 18-2 22-10z"/></g>' +
    '<ellipse class="sl wdm-float" cx="170" cy="60" rx="4" ry="2.2" opacity=".8"/><ellipse class="sl wdm-float" style="animation-delay:-2s" cx="96" cy="84" rx="3.4" ry="1.8" opacity=".7"/><ellipse class="sl wdm-float" style="animation-delay:-4s" cx="262" cy="118" rx="3.6" ry="2" opacity=".7"/>' +
    E;

  /* ---------- Schaufenster / Laden ---------- */
  S.laden = H +
    '<rect class="sd" x="46" y="8" width="208" height="30" rx="4"/><g class="sl"><path d="M70 23l2.7 5.6 6 .8-4.4 4.2 1.1 6-5.4-2.9-5.4 2.9 1.1-6-4.4-4.2 6-.8z" transform="translate(-2 -8) scale(.85)"/><rect x="96" y="17" width="82" height="9" rx="2"/><rect x="96" y="29" width="46" height="5" rx="2" opacity=".6"/><rect x="200" y="17" width="34" height="17" rx="3" opacity=".5"/></g>' +
    '<g class="wdm-awning"><path class="sa" d="M24 40h21v22q-10.5 12-21 0z"/><path class="sl" d="M45 40h21v22q-10.5 12-21 0z"/><path class="sa" d="M66 40h21v22q-10.5 12-21 0z"/><path class="sl" d="M87 40h21v22q-10.5 12-21 0z"/><path class="sa" d="M108 40h21v22q-10.5 12-21 0z"/><path class="sl" d="M129 40h21v22q-10.5 12-21 0z"/><path class="sa" d="M150 40h21v22q-10.5 12-21 0z"/><path class="sl" d="M171 40h21v22q-10.5 12-21 0z"/><path class="sa" d="M192 40h21v22q-10.5 12-21 0z"/><path class="sl" d="M213 40h21v22q-10.5 12-21 0z"/><path class="sa" d="M234 40h21v22q-10.5 12-21 0z"/><path class="sl" d="M255 40h21v22q-10.5 12-21 0z"/><path class="sk" opacity=".14" d="M24 62h252v6H24z"/></g>' +
    '<rect class="sd" opacity=".4" x="34" y="84" width="140" height="78" rx="3"/><rect class="sk" x="42" y="118" width="124" height="4"/><rect class="sk" x="42" y="146" width="124" height="4"/>' +
    '<g class="sa"><rect x="50" y="98" width="24" height="20" rx="2"/><rect x="82" y="104" width="16" height="14" rx="2" opacity=".7"/><rect x="106" y="94" width="20" height="24" rx="2" opacity=".85"/><rect x="134" y="102" width="24" height="16" rx="2"/></g>' +
    '<g class="sl"><rect x="52" y="128" width="30" height="18" rx="2" opacity=".9"/><rect x="92" y="124" width="18" height="22" rx="9" opacity=".85"/><rect x="120" y="132" width="34" height="14" rx="2" opacity=".9"/></g>' +
    '<rect class="sd" x="194" y="84" width="72" height="78" rx="3"/><rect class="sl" opacity=".3" x="202" y="92" width="56" height="52"/>' +
    '<g class="wdm-swing" style="transform-origin:230px 98px"><path class="tk" fill="none" stroke-width="1.6" d="M222 98v10M238 98v10"/><rect class="sl" x="212" y="108" width="36" height="18" rx="3"/><text class="sk" x="230" y="121" font-size="10" font-weight="700" text-anchor="middle" font-family="Archivo,Arial,sans-serif" letter-spacing=".5">OFFEN</text></g>' +
    '<rect class="sk" opacity=".8" y="162" width="300" height="28"/><rect class="sa" opacity=".6" y="160" width="300" height="4"/>' +
    '<g><rect class="sa" x="270" y="140" width="18" height="22" rx="3"/><path class="sd" d="M279 140c-10-8-6-20-2-26 5 6 12 18 2 26zM279 140c10-6 14-14 14-22-9 3-17 10-14 22z"/></g>' +
    E;

  /* ---------- Vereinsheim / Verein ---------- */
  S.verein = H +
    '<path class="tk" fill="none" stroke-width="1.5" opacity=".55" d="M-10 14Q70 54 150 18T310 14"/>' +
    '<g class="wdm-bunt"><path class="sa" d="M-5 21h22l-11 26z"/><path class="sl" d="M27 31h22L38 57z"/><path class="sd" d="M59 35h22L70 61z"/><path class="sa" d="M91 33h22l-11 26z"/><path class="sl" d="M123 24h22l-11 26z"/><path class="sd" d="M155 24h22l-11 26z"/><path class="sa" d="M187 33h22l-11 26z"/><path class="sl" d="M219 35h22l-11 26z"/><path class="sd" d="M251 31h22l-11 26z"/><path class="sa" d="M283 21h22l-11 26z"/></g>' +
    '<rect class="sd" y="156" width="300" height="34"/><path class="tl" fill="none" stroke-width="2" opacity=".5" d="M0 168h300"/><ellipse class="tl" cx="150" cy="178" rx="64" ry="9" fill="none" stroke-width="2" opacity=".4"/>' +
    '<g class="wdm-shine"><path class="sa" d="M118 74h64v14c0 26-15 42-32 44-17-2-32-18-32-44z"/><path class="ta" fill="none" stroke-width="6" stroke-linecap="round" d="M118 82c-20 0-20 28 6 32M182 82c20 0 20 28-6 32"/><rect class="sa" x="143" y="130" width="14" height="16" rx="2"/><rect class="sd" x="124" y="145" width="52" height="11" rx="3"/><path class="sl" opacity=".55" d="M130 84v24" stroke-width="5" stroke-linecap="round" stroke="var(--wdm-sl)"/><path class="sl wdm-twk" d="M196 70l2.4 6 6 2.4-6 2.4-2.4 6-2.4-6-6-2.4 6-2.4z"/></g>' +
    '<g class="wdm-ball"><circle class="sl" cx="60" cy="148" r="11"/><path class="sk" d="M60 141l6 4.4-2.3 7h-7.4l-2.3-7z"/></g>' +
    '<g class="wdm-ball" style="animation-delay:-.6s"><circle class="sl" cx="244" cy="152" r="8"/><path class="sk" d="M244 147l4.4 3.2-1.7 5h-5.4l-1.7-5z"/></g>' +
    E;

  /* ---------- Aussicht / „etwas anderes“ (die Marke: Drohne über dem Land) ---------- */
  S.anders = H +
    '<circle class="sa wdm-breathe" cx="74" cy="58" r="28" opacity=".92"/><circle class="sa wdm-breathe2" cx="74" cy="58" r="44" opacity=".16"/>' +
    '<path class="sm" d="M0 120C50 96 110 112 160 100S260 84 300 100V190H0z"/><path class="sd" opacity=".62" d="M0 150C60 126 120 146 190 132S270 124 300 138V190H0z"/>' +
    '<path class="tl" fill="none" stroke-width="2.2" stroke-dasharray="2 8" stroke-linecap="round" opacity=".75" d="M8 164C76 74 148 168 214 92S284 74 298 44"/>' +
    '<g class="wdm-bob"><g transform="translate(214 90)"><path class="tk" fill="none" stroke-width="4" stroke-linecap="round" d="M-20 -20L20 20M20 -20L-20 20"/><rect class="sa" x="-10" y="-7" width="20" height="14" rx="5"/><circle class="sk" r="2.8"/>' +
    '<g class="sl wdm-prop" opacity=".7"><ellipse cx="-20" cy="-20" rx="12" ry="2.8"/><ellipse cx="20" cy="-20" rx="12" ry="2.8"/><ellipse cx="-20" cy="20" rx="12" ry="2.8"/><ellipse cx="20" cy="20" rx="12" ry="2.8"/></g>' +
    '<g class="sk"><circle cx="-20" cy="-20" r="3.4"/><circle cx="20" cy="-20" r="3.4"/><circle cx="-20" cy="20" r="3.4"/><circle cx="20" cy="20" r="3.4"/></g></g></g>' +
    E;

  window.WDM_SZENEN = {
    svg: S,
    name: { gastro: 'Café', handwerk: 'Werkstatt', auto: 'Straße', kueche: 'Küche', praxis: 'Ruhe', laden: 'Schaufenster', verein: 'Vereinsheim', anders: 'Aussicht' }
  };
})();
