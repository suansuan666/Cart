<template>
  <div>
    <van-tabs v-model="active">
      <van-tab title="登录">
        <van-cell-group>
          <van-field
            v-model="loginUsername"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />
          <van-field v-model="loginPassword" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
        <van-button type="primary" size="large" @click="login">登录</van-button>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field
            v-model="registUsername"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
          />
          <van-field v-model="registPassword" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
        <van-button type="primary" size="large" @click="regist">注册</van-button>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import axios from 'axios';
import url from '@/service.config.js'
import {mapActions} from 'vuex'
import bcrypt from 'bcryptjs'
import md5 from 'js-md5';
export default {
  data() {
    return {
      active: 2,
      loginUsername:"",
      loginPassword:"",
      registUsername:"",
      registPassword:"",
      loginHash:'',
      registHash:'',
      
    };
  },
  methods:{
      ...mapActions(['loginAction']),
      
      regist(){
         
        axios({
            url:url.registUser,
            method:"post",
            data:{
                userName:this.registUsername,
                password:md5(this.registPassword)
              
            }
        }).then(res=>{
            if(res.data.code ==200){
                this.$toast('注册成功');
                this.registUsername="";
                this.registPassword=""
            }
            if(res.data.code ==500){
                this.$toast('不可重复注册')
            }
        })
        .catch(err =>{
            console.log(err);
            this.$toast('注册失败');
        })
      },
      login(){
         axios({
              url:url.loginUser,
              method:"post",
              data:{
                  userName:this.loginUsername,
                  password:md5(this.loginPassword)
              }
          }).then(res=>{
            console.log(res)
              if(res.data.code ==200){
                  this.loginAction(res.data.userInfo)
                  this.$toast('登录成功'),
                  this.$router.push('/');
              }
               if(res.data.message=='用户名不存在'){
                  this.$toast('用户名不存在')
              }
              if(res.data.message=='用户名与密码不匹配'){
                  this.$toast('密码错误')
              }
          }).catch(err=>{
              if(err){
                  this.$toast('登录发生错误')
              }
          })
      }
  }
}
</script>
<style scoped>
</style>
