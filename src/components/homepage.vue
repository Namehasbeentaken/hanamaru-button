<template>
   <div class="the-homepage-button">
   <el-container class="one-container" style="height:100%">
     <el-header style="font-size:40px;font-color:white">花丸按钮</el-header>
      <el-container class="aside-main-footer">
        <el-aside style="width:10%">
            <el-menu id="button-menu" :default-active="this.$route.path" router class="button-menu" mode="vertical" @select="handleSelect">
              <el-menu-item index="1" v-for="(item,i) in navList" :key="i" :index="item.name" style="with:100%">
                  <template slot="title">
                  <i class="el-icon-s-platform"></i>
                  <span> {{ item.navItem }}</span>
                </template>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-container class="main-footer">
          <el-main v-loading="loading">
            <el-row style="height:20%"  class="area-one">
                    <h1 class="">测试一</h1>
                    <el-button class="voice-button" @click="loadVoice">想要比基尼啊！</el-button>
            </el-row>
          </el-main>
        <el-footer style="height:10%">© 2020 曙光白琥珀</el-footer>
      </el-container>
        
     </el-container>
   </el-container>
   </div>
</template>

<script>
export default {
  name: 'homepage',
  data() {
      return {
        navList:[
            {name:'/components/buttons',navItem:'按钮'}, 
            {name:'/components/test',navItem:'测试'}, 
        ],
        audio:null,
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      loadVoice(){
        let audio = new Audio();
        audio.src = "static/voice/hanavoice01.mp3";
        audio.play();
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.the-homepage-button{
      /*设置内部填充为0，几个布局元素之间没有间距*/
    padding: 0px;
    /*外部间距也是如此设置*/
    margin: 0px;
    /*统一设置高度为100%*/
    height: 100%;
}

.one-container >>>  .el-header{
    background-color: #f49f0f;
    text-align: center;
    height:6%;
  }
  
  .aside-main-footer{
    display: flex;
    flex-direction: row;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    min-width: 0;
    height:94%;
    width:100%;
  }

 .aside-main-footer >>> .el-aside {
    background-color: white;
    box-shadow: 13px 0px 13px 0px rgba(5, 10, 43, 0.16);
    color: #333;
    height:100%;
    width:20%;
    margin:0px;
    text-align: center;
    line-height: 200px;
  }

  .main-footer{
    width:90%;
    height:100%;
  }
  .main-footer >>> .el-footer {
    margin:0px;
    background-color: #f49f0f;
  }
  .main-footer >>> .el-main {
    box-shadow:inset 13px -13px 13px 0px rgba(5, 10, 43, 0.16);
    background-color: white;
    color: #333;
    height:90%;
    text-align: center;
    margin:0px;
  }
  .area-one{
    margin-left:10%;
    margin-right:10%;
    height:100%;
    box-shadow: 0px 0px 15px 1px rgba(63, 71, 128, 0.16);
  }

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.button-menu {
  font-weight: normal;
  font-family:NSimSun;
  font-size:25px;
}

.voice-button{
  background-color:orange;
  width:auto;
  height:50px;
  font-size:20px;
}
</style>
