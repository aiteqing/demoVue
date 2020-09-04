<template>
  <div>
    <div class="list-content">
      <div class="icon"><img src="http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg"></div>
      <div class="content">
        <div class="title">
          <div class="title-icon">歌单</div>
          <div class="name">{{playlist.name}}</div>
        </div>
        <div class="update-wrap">
          <div class="music-name">网易云音乐</div>
          <div class="update-time">最新更新：{{playlist.updateTime}}</div>
        </div>
        <div class="song-wrap">
          <div>歌曲数：<span>100</span></div>
          <div>播放数：<span>349969万</span></div>
        </div>
        <div class="introduce">简介：云音乐中每天热度上升最快的100首单曲，每日更新</div>
      </div>
    </div>
    <div class="song-list">
      <div class="title">歌曲列表</div>
      <div class="list-wrap">
        <div class="list-item">
          <div class="gray">1、</div>
          <div>
            <div class="song-name">起风了(BILIBILI 11周年演讲)</div>
            <div class="song-auther"><span class="song-icon">HQ</span>周深-起风了</div>
          </div>
        </div>
        <div class="list-item">
          <div class="gray">2、</div>
          <div>
            <div class="song-name">起风了(BILIBILI 11周年演讲)</div>
            <div class="song-auther"><span class="song-icon">HQ</span>周深-起风了</div>
          </div>
        </div>
        <div class="list-item">
          <div class="gray">3、</div>
          <div>
            <div class="song-name">起风了(BILIBILI 11周年演讲)</div>
            <div class="song-auther"><span class="song-icon">HQ</span>周深-起风了</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import musicApi from '../api/topList'
import formatDate from '../utils/formatDate'
// http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg
export default {
  name: 'musicDetail',
  data () {
    return {
      playlist: {}
    }
  },
  created () {
    musicApi.playlistDetail(this.$route.query.id)
      .then((res) => {
        res.playlist.updateTime = formatDate(res.playlist.updateTime, 'MM-dd')
        this.playlist = res.playlist
      })
  },
  mounted () {
  }
}
</script>

<style>
  .gray{
    color: #999999;
    font-size: 26px;
  }
  .list-content{
    display: flex;
    margin: 20px;
  }
  .list-content .icon{
    width: 200px;
    height: 200px;
  }

  .list-content .icon img{
    width: 100%;
    height: 100%;
  }

  .list-content .content{
    flex: 1;
    margin-left: 16px;
  }

  .content .title{
    display: flex;
    align-items: center;
  }
  .content .title .title-icon{
    font-size: 24px;
    color: #d10000;
    border: 1px solid #d10000;
    height: 34px;
    line-height: 34px;
    padding: 0 10px;
    border-radius: 10px;
  }
  .content .title .name{
    flex: 1;
    font-size: 40px;
    font-weight: bold;
    margin-left: 20px;
  }
  .content .update-wrap{
    display: flex;
    font-size: 24px;
  }
  .update-wrap .music-name{
    color: #2f6ee2;
  }
  .update-wrap .update-time{
    color: #5f5f5f;
    margin-left: 20px;
  }
  .content .song-wrap{
    display: flex;
    font-size: 24px;
    color: #5f5f5f;
  }
  .song-wrap>div{
    margin-right: 20px;
  }
  .content .introduce{
    font-size: 24px;
    color: #5f5f5f;
  }
  .song-list{
    margin: 20px;
  }
  .song-list .title{
    font-size: 30px;
    font-weight: bold;
  }
  .song-list .list-wrap{
    margin-top: 30px;
  }
  .list-wrap .list-item{
    display: flex;
    font-size: 30px;
    margin-top: 30px;
  }
  .list-item .song-auther{
    font-size: 24px;
    color: #5f5f5f;
  }
  .list-item .song-icon{
    display: inline-block;
    color: #d10000;
    border: 1px solid #d10000;
    height: 20px;
    font-size: 22px;
    line-height: 20px;
    border-radius: 4px;
    padding: 0 2px;
    margin-right: 10px;
  }
</style>
