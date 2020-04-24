import { VuexModule, Module, Action, Mutation } from 'vuex-module-decorators'
import { parse } from 'm3ujs'
import store from './index'

type Channel = {
  file: string;
  length: number;
  params: {
    [key: string]: string;
  };
  title: string;
  icon: string;
}

const url = new URL('https://raw.githubusercontent.com/iptv-org/iptv/master/index.m3u')

@Module({
  name: 'country',
  namespaced: true,
  store: store,
  dynamic: true,
})
export default class Country extends VuexModule {
  country: Channel[] = []

  @Mutation
  updateCountry(res: string) {
    this.country = parse(res).tracks.map((channel) => {
      let icon: any = channel.file.match(/([a-zA-Z]+)\.m3u/)
      if (icon) {
        icon = icon[1]
      }
      return {
        ...channel,
        icon: `flag-icon flag-icon-${icon} flag-icon-squard`
      }
    })
  }

  @Action({ commit: 'updateCountry' })
  async fetchCountry() {
    return fetch(`${url.origin}/iptv-org/iptv/master/index.m3u`)
      .then(e => e.text())
  }
}
