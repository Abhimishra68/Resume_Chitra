export function getAssetUrl(relativePath) {
  if (!relativePath) return '';
  const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
  
  if (typeof window !== 'undefined') {
    let pathname = window.location.pathname;
    if (!pathname.endsWith('/')) {
      if (pathname.includes('.') && pathname.lastIndexOf('/') !== -1) {
        pathname = pathname.substring(0, pathname.lastIndexOf('/') + 1);
      } else {
        pathname = `${pathname}/`;
      }
    }
    const origin = window.location.origin;
    return encodeURI(`${origin}${pathname}${cleanPath}`);
  }
  
  return encodeURI(`${import.meta.env.BASE_URL || './'}${cleanPath}`);
}
