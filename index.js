const src = [
  // Google Analytics
  'utm_campaign',
  'utm_content',
  'utm_medium',
  'utm_mediun',
  'utm_source',
  'utm_term',
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
src.forEach((v) => {
  url.searchParams.delete(v);
});
history.replaceState(null, '', url.href);
