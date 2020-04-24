<template>
  <el-container>
    <el-row class="row" type="flex" justify="space-around">
      <el-col :span="4" v-for="(channel, index) in store.channels" :key="index">
        <router-link :to="{name: 'Live', params: {live: channel.file}}">
          <el-card :body-style="{ padding: '5px' }">
            <div class="channelIcon">
              <img class="icon" v-if="channel.params['tvg-logo']" :src="channel.params['tvg-logo']" />
              <div class="icon" v-else>暂无封面</div>
            </div>
            <div style="padding: 14px">{{channel.title}}</div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import Channels from '../store/channels'

@Component
export default class ChannelsPage extends Vue {
  private store = getModule(Channels);

  created() {
    this.store.fetchChannel(this.$route.params.path)
  }
}
</script>

<style lang="less">
.channelIcon {
  width: 100%;
  position: relative;
  &:after {
    content: '';
    display: block;
    padding-bottom: 56.25%;
  }
  .icon {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: #f4f4f4;
  }
}
.row {
  flex-wrap: wrap;
  flex-grow: 1;
}
</style>
