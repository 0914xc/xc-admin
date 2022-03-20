<template>
  <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="appStore.sideCollapsed"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">
          <router-link to="/"><span>item one</span></router-link>
        </el-menu-item>
        <el-menu-item index="1-2">
          <router-link to="/genshin"><span>item two</span></router-link>
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
  <div class="btn-fold" @click="appStore.toggleSidebar()">
    <el-icon v-if="appStore.sideCollapsed === true"><expand /></el-icon>
    <el-icon v-else><fold /></el-icon>
  </div>
</template>

<script lang="ts" setup>
import {Expand, Fold, Location} from "@element-plus/icons-vue";
import { useAppStore } from "../store/module/app";

const appStore = useAppStore();

</script>

<style scoped>

.el-menu {
  border-right: none;
}

.folded .el-menu span {
  display: none;
}

.btn-fold {
  position: fixed;
  bottom: 0;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  background-color: #e4e7ed;
  transition: width .3s;
  -webkit-transition: width .3s;
}

.folded .btn-fold {
  width: 64px;
}

</style>