<template>
  <van-nav-bar
      :title="title"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
    </template>
  </van-nav-bar>
  <div id="content">
    <router-view/>
  </div>
  <van-tabbar route @change="">
    <van-tabbar-item to="/" icon="friends-o" name="index">伙伴</van-tabbar-item>
    <van-tabbar-item to="/team" icon="chat-o" name="team">小队</van-tabbar-item>
    <van-tabbar-item to="/user" icon="user-circle-o" name="user">个人信息</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import {ref} from "vue";
import routes from "../../route";

const router = useRouter();
const DEFAULT_TITLE = '易聊';
const title = ref(DEFAULT_TITLE);

/**
 * 根据路由切换标题
 */
router.beforeEach((to, from) => {
  const toPath = to.path;
  const route = routes.find((route) => {
    return toPath == route.path;
  })
  title.value = route?.title ?? DEFAULT_TITLE;
})

const onClickLeft = () => {
  router?.back();
};

const onClickRight = () => {
  router?.push('/search')
};

</script>

<style scoped>
#content {
  padding-bottom: 125px;
}
</style>
