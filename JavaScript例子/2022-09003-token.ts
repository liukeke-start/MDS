// get token
export function getToken(key) {
    let getToken: any
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        getToken = window.localStorage.getItem(key)
    }
    return getToken
}

// set token
export function setToken(key, token) {
    let getToken: any
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        getToken = window.localStorage.setItem(key, token)
    }
    return getToken
}