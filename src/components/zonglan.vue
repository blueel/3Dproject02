<template>
  <div id="zonglan">
      <div class="zonglan_top">
          <div class="zonglan_top_left">
              <div>
                  <img src="" alt="">
                  <div>三维总览</div>
              </div>
              <div class="show-3D">
                  <img src="../assets/3D01.jpg" alt="" class="imgtest">
              </div>
          </div>
          <div class="zonglan_top_right">
              <div class="section1">安全生产天数{{1024}}天</div>
              <div class="section2">投运时间{{"     "+1024+"年"+12+"月"+1+"日"}}天</div>
              <div class="section3">运行方式{{"      "+"XXXXXXXXXXXXX"}}</div>
              <div class="section4">
                  <div class="section4_top">累计输送电量</div>
                  <div class="section4_bottom">{{2010.87872121}}</div>
              </div>
              <div class="section5">
                  <div class="section5_box">
                      <p>月度电量</p>
                      <p>44.7</p>
                      <p>亿W/h</p>
                  </div>
                  <div class="section5_box">
                      <p>月度电量</p>
                      <p>44.7</p>
                      <p>亿W/h</p>
                  </div>
                  <div class="section5_box">
                      <p>月度电量</p>
                      <p>44.7</p>
                      <p>亿W/h</p>
                  </div>
                  <div class="section5_box">
                      <p>月度电量</p>
                      <p>44.7</p>
                      <p>亿W/h</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="zonglan_bottom">
          <div class="zonglan_bottom_left">
              <img src="" alt="">
              <div class="title">缺陷情况</div>
              <div class="data">
                  <div class="data_left">
                      <img src="../assets/发现 (2).png" alt="" class="left_img1">
                      <img src="../assets/清除 (1).png" alt="" class="left_img2">
                      <div class="data_left_top">累计发现</div>
                      <div class="data_left_bottom">{{3377}}条</div>
                      <div class="data_left_top">累计消除</div>
                      <div class="data_left_bottom">{{3377}}条</div>
                  </div>
                  <div class="data_right"></div>
              </div>
          </div>
          <div class="zonglan_bottom_center">
              <img src="" alt="">
              <div class="title">发现异常</div>
              <div class="data">
                  <div class="data_center">
                      <img src="../assets/发现 (2).png" alt="" class="center_img1">
                      <img src="../assets/清除 (1).png" alt="" class="center_img2">
                      <div class="data_center_top">累计发现</div>
                      <div class="data_center_bottom">{{3377}}条</div>
                      <div class="data_center_top">累计消除</div>
                      <div class="data_center_bottom">{{3377}}条</div>
                  </div>
                  <div class="data_right"></div>
              </div>
          </div>
          <div class="zonglan_bottom_right">
              <div class="bottom_right_top">2021年XXX占比</div>
              <div class="bottom_right_bottom"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    * {
        margin: 0px;
        padding: 0px;
    }
    #zonglan {
        display: flex;
        flex-direction: column;
        .zonglan_top {
            flex: 5;
            display: flex;
            flex-direction: row;
            .zonglan_top_left {
                flex: 4;
                // border: 1px solid black;
                .show-3D {
                    height: 400px;
                    // border: 1px solid red;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 450px;
                    }
                }
            }
            .zonglan_top_right {
                flex: 2;
                display: flex;
                flex-direction: column;
                align-items: center;
                // border: 1px solid red;
                .section1 {
                    margin-top: 40px;
                    margin-bottom: 10px;
                    width: 90%;
                    height: 50px;
                    text-align: center;
                    line-height: 50px;
                    background-color: #0C2962;
                }
                .section2 {
                    width: 90%;
                    height: 50px;
                    margin-bottom: 10px;
                    text-align: center;
                    line-height: 50px;
                    background-color: #1B3541;
                }
                .section3 {
                    width: 90%;
                    height: 50px;
                    margin-bottom: 10px;
                    text-align: center;
                    line-height: 50px;
                    background-color: #14147B;
                }
                .section4 {
                    width: 90%;
                    height: 50px;
                    margin-bottom: 10px;
                    text-align: center;
                    margin-bottom: 10px;
                    // border: 1px solid green;
                }
                .section5 {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    width: 90%;
                    height: 150px;
                    overflow: hidden;
                    // border: 1px solid yellow;
                    .section5_box {
                        width: 45%;
                        margin-left: 10px;
                        margin-top: 10px;
                        background-color: #010A5F;
                        border: 1px solid black;
                        p {
                            padding-left:50px;
                            // border: 1px solid red;
                        }
                    }
                }
            }
        }
        .zonglan_bottom {
            display: flex;
            flex-direction: row;
            .zonglan_bottom_left {
                flex: 1;
                height: 250px;
                margin-left: 5px;
                margin-right: 10px;
                // background-color: red;
                // border: 1px solid red;
                .data {
                    height: 100%;
                    border: 1px solid #0DF5F3;
                    .data_left {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;
                        width: 50%;
                        height: 100%;
                        // border: 1px solid red;
                        img {
                            width: 35px;
                            height: 35px;
                        }
                        .left_img1 {
                            position: absolute;
                            top: 80px;
                            left: 10px;
                        }
                        .left_img2 {
                            position: absolute;
                            top: 180px;
                            left: 10px;
                        }
                    }
                }
            }
            .zonglan_bottom_center {
                flex: 1;
                height: 250px;
                .data {
                    height: 100%;
                    border: 1px solid #0DF5F3;
                    .data_center {
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-evenly;
                        align-items: center;
                        width: 50%;
                        height: 100%;
                        // border: 1px solid red;
                        img {
                            width: 35px;
                            height: 35px;
                        }
                        .center_img1 {
                            position: absolute;
                            top: 80px;
                            left: 10px;
                        }
                        .center_img2 {
                            position: absolute;
                            top: 180px;
                            left: 10px;
                        }
                    }
                }
            }
            .zonglan_bottom_right {
                position: relative;
                flex: 1;
                height: 250px;
                margin-top: 40px;
                // border: 1px solid red;
                .bottom_right_top {
                    position: absolute;
                    left: 50%;
                    transform: translate(-50%);
                    width: 200px;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    // border: 1px solid red;
                    border-radius: 10px;
                    background-color: #2C3A69;
                }
            }
        }
    }
</style>
