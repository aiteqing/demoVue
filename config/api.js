import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  get(url) {
    return new Promise((resolve, reject) => {
      Vue.http.get(
        url
      )
        .then((res) => {
          resolve(res.body)
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      Vue.http.post(
        url,
        params
      )
        .then((res) => {
          resolve(res.body)
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
