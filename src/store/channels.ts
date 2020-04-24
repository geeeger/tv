import {
  VuexModule,
  Module,
  Action,
  Mutation,
} from 'vuex-module-decorators';
import {
  parse,
} from 'm3ujs';
import store from './index'

type Channel = {
  file: string;
  length: number;
  params: {
    [key: string]: string;
  };
  title: string;
}

const url = new URL('https://raw.githubusercontent.com/iptv-org/iptv/master/index.m3u');

@Module({
  name: 'channels',
  namespaced: true,
  store: store,
  dynamic: true,
})
export default class Channels extends VuexModule {
    channels: Channel[] = []

    @Mutation
    updateChannels(res: string) {
      this.channels = parse(res).tracks;
    }

    @Action({ commit: 'updateChannels' })
    async fetchChannel(path: string) {
      return fetch(`${url.origin}/iptv-org/iptv/master/${path}`).then(e => e.text());
    }
}
