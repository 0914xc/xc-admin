<template>
  <div class="common-layout">
    <el-container :class="{'folded': appStore.sideCollapsed}">
      <el-header>
        <header/>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <sidebar />
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script lang="ts" setup>
import Header from "@/layout/Header.vue";
import Sidebar from "@/layout/Sidebar.vue";

import { useAppStore } from "../store/module/app";
import { ref } from 'vue';

const appStore = useAppStore();

</script>

<style scoped>
.el-header {
  position: fixed;
  width: 100%;
  background-color: #001529;
}

.el-aside {
  position: fixed;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  box-shadow: 2px 0 8px 0 #e4e7ed;
  transition: width .3s;
  -webkit-transition: width .3s;
}

.el-main {
  margin: 60px 0 0 200px;
  background-color: #f0f2f5;
  transition: margin .3s;
  -webkit-transition: margin .3s;
}

.folded .el-aside {
  width: 64px;
}

.folded .el-main {
  margin-left: 64px;
}
</style>