const tokenkey='token_key'

function setToken(token){
  localStorage.setItem(tokenkey,token)
}

function getToken(){
  return localStorage.getItem(tokenkey)
}

function removeToken(){
  localStorage.removeItem(tokenkey)
}

export {
  setToken,
  getToken,
  removeToken
}