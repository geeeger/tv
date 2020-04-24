declare module 'm3ujs' {
  type M3U = {
    tracks: {
      title: string;
      length: number;
      params: {
        [key: string]: string;
      };
      file: string;
    }[];
    header: {
      [key: string]: string;
    };
  };
  export const parse: (content: string) => M3U;
  export const format: (m3uObj: M3U) => string;
}
