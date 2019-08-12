<template>
  <div>
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left" />
      <van-icon slot="right" @click="$router.push('/profile')">{{userInfo.userName}}</van-icon>
    </van-nav-bar>

    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

     <div class="variety">
      <p>推荐商品</p>
      <ul>
        <li class="variety-item" v-for="(item, index) in varietyItem" :key="index">
          <img :src="item.img" alt>
          <p>{{item.name}}</p>
          <p>￥{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import axios from 'axios';
import URL from '@/service.config.js'
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ],
      varietyItem:[],
    };
  },
  computed: {
    ...mapState(["userInfo"])
  },
  created(){
    axios.get(URL.getProduct).then(res=>{
      console.log(res);
      this.varietyItem=res.data;
    })
  }
};
</script>

<style lang="scss" scoped>
.van-swipe {
  height: 3rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.variety {
  margin-top: 0.2rem;
  background-color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &-item {
    flex-basis: 45%;
  }
  img {
    width: 2rem;
    height: 2rem;
  }
}
</style>

