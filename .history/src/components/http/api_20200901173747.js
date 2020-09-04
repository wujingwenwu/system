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
  getParty({username,password,email,mobile}) {
    return service.post(`users`,
    {username,password,email,mobile}
    )
  },
  //删除
  getDelete({id}) {
    return service.delete(`users/${id}`,
    )
  },
  //修改用户 
  getAmend({id,email,mobile}) {
    return service.put(`users/${id}`,{email,mobile}
    )
  },
   //基于时间统计的折线图 
   getreports({id,email,mobile}) {
    return service.put(`reports/type/1/${id}`,{email,mobile}
    )
  },
}