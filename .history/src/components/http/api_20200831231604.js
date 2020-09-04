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
  users({pagenum,pagesize}) {
    return service.get(`users?pagenum=${pagenum}&pagesize=${pagesize}`)
  },
}