import service from './index'

export default {
  login({username, password}) {
    return service.post('/login', {
      username,
      password
    })
  },
  getMenus() {
    return service.get('menus')
  },
  getUserList({pagenum,pagesize,query}) {
    return service.get(`users?pagenum=${pagenum}&pagesize=${pagesize}&query=${query}`)
  },
  getState({uId,type}) {
    return service.put(`users/${uId}/state/${type}`)
  },
  getParty({uId,type}) {
    return service.put(`users/${uId}/state/${type}`)
  },
}