<template>
  <el-container>
    <video v-if="$route.params.live" class="video" :src="$route.params.live" controls autoplay></video>
  </el-container>
</template>

<script lang="ts">
import { Component, Vue/*, Ref*/ } from 'vue-property-decorator';
// import videojs,{ VideoJsPlayer } from 'video.js'


@Component
export default class LivePage extends Vue {
  // @Ref('dom') readonly player!: HTMLVideoElement

  // vjs?: VideoJsPlayer

  mounted() {
    // this.vjs = videojs(this.player, {
    //   autoplay: true,
    //   controls: true,
    //   html5: {
    //     hls: {
    //       overrideNative: true
    //     }
    //   }
    // })

    // this.vjs.src({
    //   src: this.$route.params.live
    // })
  }
}
</script>

<style lang="less">
.video {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
