function getSession(name) {
  return sessionStorage.getItem(name)
}
function setSession(name, value) {
  return sessionStorage.setItem(name, value)
}
function clearSession(name) {
  return sessionStorage.removeItem(name)
}
function getLocalStorage(name) {
  return localStorage.getItem(name)
}
function setLocalStorage(name, value) {
  return localStorage.setItem(name, value)
}
function clearLocalStorage(name) {
  return localStorage.removeItem(name)
}
export { getSession, setSession, clearSession, getLocalStorage, setLocalStorage, clearLocalStorage }