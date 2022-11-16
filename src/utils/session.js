function getSession(name) {
  return sessionStorage.getItem(name)
}
function setSession(name, value) {
  return sessionStorage.setItem(name, value)
}
function clearSession(name) {
  return sessionStorage.removeItem(name)
}
export { getSession, setSession, clearSession }