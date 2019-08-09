<template>
  <div>
    <van-nav-bar title="首页">
      <van-icon name="search" slot="left" />
      <van-icon slot="right" @click="$router.push('/profile')">{{userInfo.userName}}</van-icon>
    </van-nav-bar>
    aaa
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["userInfo"])
  }
};
</script>
<style scoped>
</style>

