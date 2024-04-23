

export type localStorageType = {

  [key: string]: string | number | Array<localStorageType>

}
export const setLocalStorage = (k: string, v:localStorageType) => {
  try {
    window.localStorage.setItem(k, JSON.stringify(v))
  } catch (error) {
    return false
  }
}

export const getLocalStorage = (k: string, parsed = true) => {
  const item = window.localStorage.getItem(k)

  if (!parsed) return item

  try {
    return item ? JSON.parse(item) : item
  } catch (err) {
    return item
  }
}

export const clearLocalStorage = (name: string) => {
  window.localStorage.removeItem(name)
}
