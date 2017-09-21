export function getQueryString(location, name) {
  return new URLSearchParams(location.search || '').get(name);
}
