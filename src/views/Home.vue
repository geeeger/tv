<template>
  <el-container>
    <el-row class="row" type="flex" justify="space-around">
      <el-col :span="4" v-for="(country, index) in store.country" :key="index">
        <router-link :to="{name: 'Channels', params: {path: country.file}}">
          <el-card :body-style="{ padding: '5px' }">
            <div class="countryIcon">
              <div :class="country.icon"></div>
            </div>
            <div style="padding: 14px">{{country.title | cNameI18n}}</div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import Country from '../store/country'
// import store from '../store'
import ISO3166 from '@geeeger/iso-3166-1'

const isoMap: {
  [key: string]: {
    en: string;
    es: string;
    zh: string;
    locale: string;
    code: number;
  };
} = {}
for (const key in ISO3166) {
  isoMap[ISO3166[key].en] = ISO3166[key];
}

@Component({
  filters: {
    cNameI18n(name: string) {
      return (isoMap[name] &&isoMap[name].zh) || name;
    }
  }
})
export default class Home extends Vue {
  private store = getModule(Country);

  created() {
    this.store.fetchCountry()
  }
}
</script>

<style lang="less">
.countryIcon {
  width: 100%;
  position: relative;
  &:after {
    content: '';
    display: block;
    padding-bottom: 56.25%;
  }
  .flag-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
.row {
  flex-wrap: wrap;
}
</style>

