import {get, post} from '../request/http'

var getTopListDetail = function () {
  return post(`/toplist/detail`)
}

var playlistDetail = function (id) {
  return get(`/playlist/detail?id=${id}`)
}

var musicApi = {
  getTopListDetail: getTopListDetail,
  playlistDetail: playlistDetail
}

export default musicApi
