<template>
  <van-cell center title="匹配模式">
    <template #right-icon>
      <div class="van-haptics-feedback">
        <van-icon name="question-o" size="18" color="#1989fa" is-link @click="showPopup"/>
      </div>
      &nbsp
      <van-switch v-model="isMatchMode" size="24"/>
    </template>
  </van-cell>
  <van-popup v-model:show="show" round closeable close-icon="close" :style="{ padding: '50px 10px' }">
    <view>开启匹配模式，匹配与你志同道合的伙伴!</view>
  </van-popup>
<!--  <van-popup v-model:show="show" :style="{ padding: '10% 0' }">-->
<!--    <div>开启匹配模式，匹配与你志同道合的伙伴!</div>-->
<!--  </van-popup>-->
  <user-card-list :user-list="userList" :loading="loading"/>
  <van-empty v-if="!userList || userList.length < 1" description="数据为空"/>
</template>

<script setup lang="ts">
import {ref, watchEffect} from 'vue';
import myAxios from "../plugins/myAxios";
import {Toast} from "vant";
import UserCardList from "../components/UserCardList.vue";
import {UserType} from "../models/user";

const show = ref(false);
const showPopup = () => {
  show.value = true;
};
const isMatchMode = ref<boolean>(false);
const userList = ref([]);
const loading = ref(true);

/**
 * 加载数据
 */
const loadData = async () => {
  let userListData;
  loading.value = true;
  // 心动模式，根据标签匹配用户
  if (isMatchMode.value) {
    const num = 10;
    userListData = await myAxios.get('/user/match', {
      params: {
        num,
      },
    })
        .then(function (response) {
          console.log('/user/match succeed', response);
          return response?.data;
        })
        .catch(function (error) {
          console.error('/user/match error', error);
          Toast.fail('请求失败');
        })
  } else {
    // 普通模式，直接分页查询用户
    userListData = await myAxios.get('/user/recommend', {
      params: {
        pageSize: 100,
        pageNum: 1,
      },
    })
        .then(function (response) {
          console.log('/user/recommend succeed', response);
          return response?.data?.records;
        })
        .catch(function (error) {
          console.error('/user/recommend error', error);
          Toast.fail('请求失败');
        })
  }
  if (userListData) {
    userListData.forEach((user: UserType) => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
  loading.value = false;
}

watchEffect(() => {
  loadData();
})


</script>

<style scoped>

</style>
