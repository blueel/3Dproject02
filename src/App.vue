<template>
  <div id="app">
    <el-container class="el">
      <el-aside width="250px" class="el-aside">
        <div id="app_left_top">
          <div class="app_left_zonglan">
            <router-link to="/zonglan" class="test">总览</router-link>
            <img src="./assets/运营总览.png" alt="" class="test_img">
          </div>
          <div class="app_left_zonglan">
            <router-link to="/quyu" class="test">区域</router-link>
            <img src="./assets/区域管理.png" alt="" class="test_img">
          </div>
          <div class="app_left_zonglan">
            <router-link to="/shebei" class="test">设备</router-link>
            <img src="./assets/设备类_设备IO.png" alt="" class="test_img">
          </div>
          <div class="app_left_zonglan">
            <router-link to="/xitong" class="test">系统</router-link>
            <img src="./assets/系统.png" alt="" class="test_img">
          </div>
          <div class="app_left_zonglan">
            <router-link to="/jiexiantu" class="test">接线图</router-link>
            <img src="./assets/线图.png" alt="" class="test_img">
          </div>
          <div class="app_left_zonglan">
            <router-link to="/jinggaofenxi" class="test">告警分析</router-link>
            <img src="./assets/分析 (1).png" alt="" class="test_img">
          </div>
        </div>
        <div id="app_left_bottom">
          <div class="bottom_icon" v-for="(item,index) in icons" :key="index">
            <img :src="require(item.src + '')" alt="">
            <div>{{item.text}}</div>
          </div>
        </div>
        <el-button type="success" disabled class="myWork">我的工作台</el-button>
      </el-aside>
      <el-main class="el-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>

export default ({
  data: function () {
    return {
      src: '../src/assets/数据分析-流量分析 (1).png',
      icons: [{
        src: './assets/数据分析-流量分析 (1).png',
        text: '曲线分析'
      }, {
        src: './assets/数据分析-流量分析 (1).png',
        text: '日周月分析'
      }, {
        src: './assets/数据分析-流量分析 (1).png',
        text: '智能报表'
      }, {
        src: './assets/数据分析-流量分析 (1).png',
        text: '系统监控'
      }]
    }
  }
})
</script>

<style lang="less" scoped>
.test {
  margin-left: 30px;
  color: white;
  text-decoration: none;
}
#app {
  display: flex;
  width: 100%;
  height: 740px;
  color: white;
  background-color: #01009E;
  .el-aside{
    border: 2px solid #0DF5F3;
    box-shadow: #0DF5F3;
    overflow: hidden;
    #app_left_top {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 50%;
      width: 100%;
      // border: 1px solid black;
      .app_left_zonglan {
        position: relative;
        width: 200px;
        height: 30px;
        // text-align: center;
        line-height: 30px;
        border: 2px solid #0DF5F3;
        border-radius: 0px 11px 11px 0px;
        .test_img {
          position: absolute;
          top: 3px;
          right: 10px;
          width: 25px;
          height: 25px;
          // border: 1px solid red;
        }
      }
    }
    #app_left_bottom {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
      width: 100%;
      height: 200px;
      // background-color: black;
      .bottom_icon {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 120px;
        // border: 1px solid red;
        img {
          width: 50px;
          height: 50px;
          border: 1px solid white;
          border-radius: 10px;
        }
      }
    }
    .myWork {
      position: relative;
      top: 100px;
      left: 50%;
      transform: translate(-50%);
      background-color: #0DF5F3;
    }
  }
  .el-main {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
    // background-color: blue;
    // border: 1px solid red;
  }
}
</style>
