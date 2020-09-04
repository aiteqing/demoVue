<template>
  <div id="nihao">
    <div class="song-item" v-for="song in songList" :key="song.id" @click="gotoDetail(song.id)">
      <div class="icon"><img :src="song.coverImgUrl"></div>
      <div class="top3-wrap">
        <div class="title">{{song.name}}</div>
        <div class="top-list" v-if="song.tracks.length>0">
          <div class="list-item" v-for="topItem in song.tracks" :key="topItem.first">
            <div class="song-name">{{topItem.first}}</div>
            <div class="song-author"><div class="text-ellipsis">{{topItem.second}}</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import musicApi from '../api/topList'

export default {
  name: 'dashboard',
  components: {},
  data () {
    return {
      message: 'haha',
      songList: []
    }
  },
  methods: {
    gotoDetail (id) {
      this.$router.push({
        name: 'MusicDetail',
        query: { id: id }
      })
    }
  },
  mounted () {
    musicApi.getTopListDetail()
      .then((res) => {
        this.songList = res.list
      })
  }
}
</script>

<style>
  .song-item {
    display: flex;
    margin: 20px;
  }

  .song-item .icon {
    width: 240px;
    height: 240px;
    margin-right: 20px;
  }

  .song-item img {
    width: 100%;
    height: 100%;
  }

  .song-item .top3-wrap{
    flex: 1;
  }

  .top3-wrap .title{
    font-size: 34px;
    color: #333333;
    margin-top: 10px;
  }
  .top3-wrap .top-list{
    margin-top: 20px;
  }
  .top3-wrap .top-list .list-item{
    display: flex;
    height: 50px;
    line-height: 50px;
    width: 100%;
    color: #5c5c5c;
  }
  .top3-wrap .top-list .list-item>div{
    flex: 1;
    width: 50%;
  }

  .top3-wrap .top-list .list-item .song-author{
    text-align: right;
  }

  .text-ellipsis{
    display: inline-block;
    white-space: nowrap;
    width: 200px;
    overflow: hidden;
    text-overflow:ellipsis;
  }
</style>
