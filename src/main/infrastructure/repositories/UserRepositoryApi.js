const axios = require('axios');

module.exports = {
  async persist(user) {
    return axios.post('https://api.m3o.com/v1/user/Create',
      user,
    { headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer OWRlOTc0ZmUtYzdiOS00MjM4LTk3NjYtZTRjZjNhNGRlN2Vl'
    }});
  }
}
