const src = [
  // Google Analytics
  'utm_',
  // Adobe Analytics
  'sc_cid',
  'WT.mc_id',
  // Facebook
  'fbclid',
  // techfeed.io
  'from',
  'redirected',
];
const url = new URL(location.href);
const targetList = [];
for (const [key] of url.searchParams.entries()) {
  if (src.some((v) => new RegExp(v).test(key))) targetList.push(key);
}
targetList.forEach((v) => {
  url.searchParams.delete(v);
});

history.replaceState(null, '', url.href);
