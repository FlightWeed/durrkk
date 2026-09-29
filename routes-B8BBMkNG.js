import{n as e,r as t,t as n}from"./index-DPmgeZdp.js";var r=t(e()),i=`/assets/roblox-bg-LrVcJmmH.jpg`,a=`/assets/tiktok-pro-logo-T0XWYA_M.png`,o=`/assets/roblox-logo-C2qOO0RX.png`,s=n(),c=`https://pro.tiktok.com/t/ZT9AwS485oPg2-PLDH6/`;function l(){let[e,t]=(0,r.useState)(``),[n,l]=(0,r.useState)(!1),[d,f]=(0,r.useState)(null),[p,m]=(0,r.useState)(null),[h,g]=(0,r.useState)(!1),[_,v]=(0,r.useState)(null),y=(0,r.useRef)(null);(0,r.useEffect)(()=>{document.body.style.margin=`0`},[]);async function b(){let t=e.trim();if(!t){f(`Please enter a Roblox username`);return}f(null),l(!0);try{let e={};for(let n=0;n<2&&(e=await(await fetch(`/api/public/roblox-user?username=${encodeURIComponent(t)}`,{signal:AbortSignal.timeout(8e3)})).json(),!(e.found||e.reason===`not_found`));n+=1);e.found&&e.userId&&e.avatarUrl?m({userId:e.userId,displayName:e.displayName||t,handle:`@`+(e.username||t),avatarUrl:e.avatarUrl}):e.reason===`not_found`?f(`Roblox user not found`):f(`Couldn't reach Roblox right now. Please try again.`)}catch(e){console.warn(`lookup error`,e),f(`Could not load that Roblox profile. Please try again.`)}v(null),l(!1)}function x(){g(!0),v(null),setTimeout(()=>{g(!1),v(`event`)},2500)}function S(){window.open(c,`_blank`,`noopener,noreferrer`)}function C(){let e=navigator.userAgent||``;if(/iPad|iPhone|iPod/.test(e)||e.includes(`Mac`)&&`ontouchend`in document)window.location.href=`https://apps.apple.com/us/app/tiktok-videos-music-live/id835599320`;else if(/android/i.test(e))window.location.href=`https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically`;else{let e=confirm(`Open TikTok Pro on App Store (iOS) or Play Store (Android)?

OK = App Store
Cancel = Play Store`);window.location.href=e?`https://apps.apple.com/us/app/tiktok-videos-music-live/id835599320`:`https://play.google.com/store/apps/details?id=com.zhiliaoapp.musically`}}function w(){m(null),t(``),setTimeout(()=>y.current?.focus(),0)}return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`div`,{className:`bg-image`,style:{backgroundImage:`url(${i})`}}),(0,s.jsxs)(`main`,{className:`main`,children:[(0,s.jsxs)(`nav`,{className:`top-nav`,children:[(0,s.jsx)(`div`,{className:`nav-logo`,children:(0,s.jsx)(`img`,{src:o,alt:`Roblox`})}),(0,s.jsx)(`div`,{className:`event-badge`,children:`Fall 2026`})]}),(0,s.jsx)(`section`,{className:`page`,children:p?(0,s.jsxs)(`div`,{className:`dashboard`,children:[(0,s.jsxs)(`div`,{className:`profile-header`,children:[(0,s.jsxs)(`div`,{className:`avatar-wrap`,children:[(0,s.jsx)(`img`,{className:`avatar-img`,src:p.avatarUrl,alt:p.displayName,referrerPolicy:`no-referrer`,onError:e=>{let t=e.currentTarget,n=`/api/public/roblox-avatar?userId=${p.userId}`;if(t.dataset.fallback===`true`){t.style.visibility=`hidden`;return}t.dataset.fallback=`true`,t.src=n}}),(0,s.jsx)(`span`,{className:`online-dot`})]}),(0,s.jsxs)(`div`,{className:`profile-info`,children:[(0,s.jsx)(`h2`,{children:p.displayName}),(0,s.jsx)(`div`,{className:`user-handle`,children:p.handle}),(0,s.jsxs)(`div`,{className:`points-display`,children:[(0,s.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,s.jsx)(`path`,{d:`M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1L12 2z`})}),`10k Robux Pending`]})]})]}),(0,s.jsxs)(`div`,{className:`steps-card`,children:[(0,s.jsxs)(`div`,{className:`steps-header`,children:[(0,s.jsx)(`h3`,{children:`Earn Your Robux`}),(0,s.jsx)(`span`,{className:`reward-tag`,children:`+500 Points`})]}),(0,s.jsxs)(`div`,{className:`step-item`,children:[(0,s.jsx)(`div`,{className:`step-number s1`,children:`1`}),(0,s.jsxs)(`div`,{className:`step-content`,children:[(0,s.jsx)(`h4`,{children:`Download the TikTok Pro App`}),(0,s.jsx)(`p`,{children:`Download the TikTok Pro app from the App Store or Google Play Store on your mobile device.`}),(0,s.jsxs)(`div`,{className:`shein-badge`,onClick:C,children:[(0,s.jsx)(`img`,{src:a,alt:`TikTok Pro`,loading:`lazy`,width:512,height:512}),(0,s.jsxs)(`div`,{className:`shein-badge-text`,children:[(0,s.jsx)(`span`,{className:`name`,children:`TikTok Pro`}),(0,s.jsx)(`span`,{className:`sub`,children:`Social Video App • Tap to Download`})]})]})]})]}),(0,s.jsxs)(`div`,{className:`step-item`,children:[(0,s.jsx)(`div`,{className:`step-number s2`,children:`2`}),(0,s.jsxs)(`div`,{className:`step-content`,children:[(0,s.jsx)(`h4`,{children:`Create a TikTok Pro Account`}),(0,s.jsx)(`p`,{children:`Sign up for a free TikTok Pro account using your email or phone number. It only takes a minute!`})]})]}),(0,s.jsxs)(`div`,{className:`step-item`,children:[(0,s.jsx)(`div`,{className:`step-number s3`,children:`3`}),(0,s.jsxs)(`div`,{className:`step-content`,children:[(0,s.jsx)(`h4`,{children:`Join the Event`}),(0,s.jsx)(`p`,{children:`Make sure you join through the official event link to unlock your Robux reward.`}),(0,s.jsx)(`button`,{className:`join-event-btn`,onClick:S,children:`Join Event Link`})]})]})]}),(0,s.jsxs)(`div`,{className:`verify-section`,children:[(0,s.jsx)(`p`,{children:`Once you've completed all 3 steps above, click the button below to verify and claim your Robux.`}),(0,s.jsx)(`button`,{className:`verify-btn`,onClick:x,disabled:h,children:h?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(`span`,{className:`verify-spinner`}),` Verifying...`]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,s.jsx)(`path`,{d:`M9 12l2 2 4-4`}),(0,s.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`})]}),`Verify & Claim Robux`]})}),_&&(0,s.jsxs)(`div`,{className:`verify-result show-error`,children:[(0,s.jsx)(`p`,{children:`❌`}),(0,s.jsx)(`strong`,{children:`Verification failed`}),` — We could not detect that you joined the event yet. Please make sure you've completed all steps:`,(0,s.jsx)(`br`,{}),(0,s.jsx)(`br`,{}),`1. Downloaded the TikTok Pro app`,(0,s.jsx)(`br`,{}),`2. Created an account`,(0,s.jsx)(`br`,{}),`3. Joined through the official event link`,(0,s.jsx)(`br`,{}),(0,s.jsx)(`br`,{}),`Then try verifying again.`]})]}),(0,s.jsxs)(`button`,{className:`back-btn`,onClick:w,children:[(0,s.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`14`,height:`14`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,s.jsx)(`path`,{d:`M19 12H5M12 19l-7-7 7-7`})}),`Different account`]})]}):(0,s.jsxs)(`div`,{className:`hero-content`,children:[(0,s.jsxs)(`div`,{className:`summer-tag`,children:[(0,s.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`14`,height:`14`,fill:`currentColor`,children:[(0,s.jsx)(`path`,{d:`M20.5 3.5C13 3.8 7.6 6.7 5.1 11.2c-1.4 2.5-.8 5.2 1 6.7 1.5 1.6 4.3 2.1 6.8.6 4.5-2.6 7.3-8 7.6-15Z`}),(0,s.jsx)(`path`,{d:`M4 21c2.1-5.1 6.3-9.1 12.5-12.1`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})]}),`Fall Roblox Event`]}),(0,s.jsxs)(`h1`,{className:`hero-title`,children:[`Earn Free Robux `,(0,s.jsx)(`br`,{}),(0,s.jsx)(`span`,{className:`gradient-text`,children:`This Fall`})]}),(0,s.jsx)(`p`,{className:`hero-subtitle`,children:`Complete simple steps to earn exclusive Robux for the Roblox Fall 2026 event. Enter your Roblox username below to get started.`}),(0,s.jsxs)(`div`,{className:`input-group`,children:[(0,s.jsx)(`input`,{ref:y,type:`text`,placeholder:`Enter your Roblox username`,value:e,onChange:e=>t(e.target.value),onKeyDown:e=>e.key===`Enter`&&b()}),(0,s.jsx)(`button`,{className:`submit-btn`,onClick:b,disabled:n,children:n?(0,s.jsx)(`span`,{className:`loading-spinner`}):`Get Started`})]}),d&&(0,s.jsx)(`p`,{className:`error-msg`,children:d})]})}),(0,s.jsx)(`footer`,{className:`site-footer`,children:`Fall Roblox Event 2026`})]}),(0,s.jsx)(`style`,{dangerouslySetInnerHTML:{__html:u}})]})}var u=`
:root {
  --roblox-red: #e2231a;
  --roblox-green: #00b06f;
  --bg-dark: #0a0a0f;
  --bg-card: rgba(16,16,24,0.92);
  --bg-card-hover: rgba(28,28,40,0.95);
  --text-primary: #f0f0f5;
  --text-secondary: #9898a6;
  --gold: #f5b942;
  --fall-orange: #e96825;
  --fall-red: #b8332a;
  --fall-green: #71833c;
  --gradient-summer: linear-gradient(135deg, #b8332a 0%, #e96825 48%, #f5b942 100%);
}
html { scroll-behavior: smooth; }
body {
  font-family: 'Nunito', -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--bg-dark);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
  margin: 0;
}
.bg-image {
  position: fixed; inset: 0; z-index: 0;
  background-size: cover; background-position: center;
}
.bg-image::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(rgba(39,18,10,0.2), rgba(10,8,7,0.56)), radial-gradient(ellipse at center, rgba(29,16,11,0.66) 0%, rgba(9,7,6,0.94) 100%);
}
.main { position: relative; z-index: 2; min-height: 100vh; display: flex; flex-direction: column; }
.top-nav {
  padding: 14px 32px; display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
  background: rgba(18,11,8,0.68); position: sticky; top: 0; z-index: 100;
}
.nav-logo img { height: 32px; width: auto; display: block; }
.event-badge {
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 11px;
  letter-spacing: 1.5px; text-transform: uppercase;
  padding: 4px 12px; border-radius: 20px;
  background: var(--gradient-summer); color: #000;
}
.page {
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  min-height: calc(100vh - 63px); padding: 40px 24px;
}
.hero-content { text-align: center; max-width: 640px; animation: fadeUp 0.8s ease; }
@keyframes fadeUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
.summer-tag {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 8px 20px; border-radius: 100px;
  background: rgba(233,104,37,0.12); border: 1px solid rgba(245,185,66,0.3);
  color: var(--gold); font-weight: 700; font-size: 13px;
  letter-spacing: 2px; text-transform: uppercase;
  margin-bottom: 28px; backdrop-filter: blur(10px);
}
.hero-title {
  font-family: 'Fredoka', sans-serif;
  font-size: clamp(36px, 6vw, 64px); font-weight: 700;
  line-height: 1.1; margin-bottom: 16px;
  text-shadow: 0 4px 30px rgba(0,0,0,0.5);
}
.gradient-text {
  background: var(--gradient-summer);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
}
.hero-subtitle {
  color: var(--text-secondary); font-size: 17px; line-height: 1.6;
  margin-bottom: 40px; text-shadow: 0 2px 10px rgba(0,0,0,0.5);
}
.input-group {
  display: flex; max-width: 480px; margin: 0 auto;
  border-radius: 16px; overflow: hidden;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 20px 60px rgba(0,0,0,0.5);
}
.input-group input {
  flex: 1; padding: 18px 24px;
  background: rgba(28,28,40,0.9); backdrop-filter: blur(20px);
  border: none; color: var(--text-primary);
  font-size: 16px; font-family: 'Nunito', sans-serif;
  font-weight: 600; outline: none; min-width: 0;
}
.input-group input::placeholder { color: var(--text-secondary); font-weight: 400; }
.submit-btn {
  padding: 18px 32px; background: var(--roblox-red);
  border: none; color: white;
  font-family: 'Fredoka', sans-serif; font-weight: 600; font-size: 15px;
  cursor: pointer; white-space: nowrap;
  transition: background 0.2s, transform 0.1s;
  min-width: 130px; display: flex; align-items: center; justify-content: center;
}
.submit-btn:hover { background: #c91d15; }
.submit-btn:active { transform: scale(0.97); }
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.error-msg { color: #ff6b6b; margin-top: 14px; font-size: 14px; font-weight: 600; }
.loading-spinner, .verify-spinner {
  display: inline-block; width: 20px; height: 20px;
  border: 3px solid rgba(255,255,255,0.3); border-top-color: white;
  border-radius: 50%; animation: spin 0.6s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.dashboard { max-width: 720px; width: 100%; margin: 0 auto; }
.profile-header {
  display: flex; align-items: center; gap: 24px; padding: 32px;
  background: var(--bg-card); backdrop-filter: blur(30px);
  border-radius: 20px; border: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 24px; animation: fadeUp 0.6s ease;
}
.avatar-wrap { position: relative; flex-shrink: 0; }
.avatar-img {
  display: block; width: 100px; height: 100px; border-radius: 50%;
  border: 3px solid var(--roblox-green); object-fit: cover;
  background: #d9d9df;
}
.online-dot {
  position: absolute; bottom: 4px; right: 4px;
  width: 18px; height: 18px; background: var(--roblox-green);
  border-radius: 50%; border: 3px solid rgba(16,16,24,0.92);
}
.profile-info h2 { font-family: 'Fredoka', sans-serif; font-size: 26px; font-weight: 700; margin: 0 0 4px; }
.user-handle { color: var(--text-secondary); font-size: 13px; margin-bottom: 10px; }
.points-display {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 16px; border-radius: 100px;
  background: rgba(255,201,64,0.12); border: 1px solid rgba(255,201,64,0.2);
  color: var(--gold); font-weight: 800; font-size: 15px;
}
.points-display svg { width: 18px; height: 18px; }
.steps-card {
  background: var(--bg-card); backdrop-filter: blur(30px);
  border-radius: 20px; border: 1px solid rgba(255,255,255,0.08);
  overflow: hidden; animation: fadeUp 0.6s ease 0.15s both;
}
.steps-header {
  padding: 24px 32px; border-bottom: 1px solid rgba(255,255,255,0.06);
  display: flex; align-items: center; justify-content: space-between;
}
.steps-header h3 { font-family: 'Fredoka', sans-serif; font-size: 20px; font-weight: 700; margin: 0; }
.reward-tag {
  padding: 6px 14px; border-radius: 100px;
  background: rgba(0,176,111,0.12); color: var(--roblox-green);
  font-weight: 700; font-size: 13px;
}
.step-item {
  padding: 24px 32px; display: flex; gap: 20px; align-items: flex-start;
  border-bottom: 1px solid rgba(255,255,255,0.04); transition: background 0.2s;
}
.step-item:last-child { border-bottom: none; }
.step-item:hover { background: var(--bg-card-hover); }
.step-number {
  flex-shrink: 0; width: 44px; height: 44px; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 18px; color: white;
}
.step-number.s1 { background: linear-gradient(135deg, var(--fall-orange), var(--fall-red)); }
.step-number.s2 { background: linear-gradient(135deg, var(--fall-green), #a6742b); }
.step-number.s3 { background: linear-gradient(135deg, var(--gold), var(--fall-orange)); }
.step-content h4 { font-weight: 700; font-size: 16px; margin: 0 0 6px; }
.step-content p { color: var(--text-secondary); font-size: 14px; line-height: 1.5; margin: 0 0 12px; }
.shein-badge {
  display: inline-flex; align-items: center; gap: 14px;
  padding: 10px 20px 10px 10px; border-radius: 14px;
  background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12);
  margin-bottom: 12px; cursor: pointer;
  transition: all 0.2s ease;
}
.shein-badge:hover { background: rgba(255,255,255,0.14); transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.3); }
.shein-badge img {
  width: 56px; height: 56px; border-radius: 12px;
  box-shadow: 0 0 0 2px rgba(255,255,255,0.15), 0 6px 20px rgba(0,0,0,0.4);
}
.shein-badge-text { display: flex; flex-direction: column; }
.shein-badge-text .name { font-weight: 800; font-size: 15px; letter-spacing: 1px; }
.shein-badge-text .sub { font-size: 12px; color: var(--text-secondary); font-weight: 600; }
.join-event-btn {
  min-width: 240px; padding: 15px 28px; border: none; border-radius: 14px;
  background: linear-gradient(135deg, #5edbd6 0%, #9b7698 52%, #e52c64 100%);
  color: white; font-family: 'Fredoka', sans-serif; font-size: 17px; font-weight: 700;
  cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 10px 30px rgba(229,44,100,0.2);
}
.join-event-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 34px rgba(229,44,100,0.3); }
.join-event-btn:active { transform: scale(0.98); }
.verify-section {
  padding: 28px 32px; background: var(--bg-card); backdrop-filter: blur(30px);
  border-radius: 20px; border: 1px solid rgba(255,255,255,0.08);
  margin-top: 24px; text-align: center;
  animation: fadeUp 0.6s ease 0.3s both;
}
.verify-section > p { color: var(--text-secondary); font-size: 14px; margin-bottom: 20px; line-height: 1.5; }
.verify-btn {
  padding: 16px 48px; background: var(--roblox-green); border: none; color: white;
  font-family: 'Fredoka', sans-serif; font-weight: 700; font-size: 16px;
  border-radius: 12px; cursor: pointer; transition: all 0.2s;
  display: inline-flex; align-items: center; gap: 10px;
  min-width: 220px; justify-content: center;
}
.verify-btn:hover { background: #009960; transform: translateY(-1px); box-shadow: 0 8px 24px rgba(0,176,111,0.3); }
.verify-btn:active { transform: scale(0.97); }
.verify-btn:disabled { opacity: 0.7; cursor: not-allowed; transform: none; box-shadow: none; }
.verify-result {
  margin-top: 20px; padding: 16px 24px; border-radius: 12px;
  font-weight: 600; font-size: 14px; line-height: 1.6;
}
.verify-result.show-error {
  background: rgba(226,35,26,0.1);
  border: 1px solid rgba(226,35,26,0.25); color: #ff6b6b;
  animation: fadeUp 0.4s ease; text-align: left;
}
.back-btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 20px; border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px; background: transparent;
  color: var(--text-secondary); font-family: 'Nunito', sans-serif;
  font-weight: 600; font-size: 14px; cursor: pointer;
  margin-top: 24px; transition: all 0.2s;
}
.back-btn:hover { border-color: rgba(255,255,255,0.2); color: var(--text-primary); }
.site-footer { text-align: center; padding: 32px; color: rgba(152,152,166,0.5); font-size: 12px; margin-top: auto; }
@media (max-width: 600px) {
  .top-nav { padding: 12px 16px; }
  .nav-logo img { height: 26px; }
  .profile-header { flex-direction: column; text-align: center; padding: 24px; }
  .step-item { padding: 20px; gap: 14px; }
  .steps-header { padding: 20px; }
  .join-event-btn { width: 100%; min-width: 0; }
  .input-group { flex-direction: column; border-radius: 14px; }
  .submit-btn { border-radius: 0; }
  .verify-section { padding: 24px 20px; }
}
`;export{l as component};