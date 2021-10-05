import {createModel} from '@rematch/core';
import axios from 'axios';
import {RootModel} from '.';

const baseUrl = 'https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news';

type StateType = {
  news: [];
  loading: boolean;
  images: [];
  comments: [];
};

export const news_Store = createModel<RootModel>()({
  state: {
    news: [],
    loading: false,
    images: [],
    comments: [],
  } as StateType, // initial state

  reducers: {
    // handle state changes with pure functions
    SET_LOADING(state, payload: boolean) {
      return {
        ...state,
        loading: payload,
      };
    },

    SET_NEWS: (state, payload: []) => {
      return {
        ...state,
        news: payload,
      };
    },
    SET_IMAGES: (state, payload: []) => {
      return {
        ...state,
        images: payload,
      };
    },
    SET_COMMENTS: (state, payload: []) => {
      return {
        ...state,
        comments: payload,
      };
    },
  },
  effects: () => ({
    fetchNews() {
      this.SET_LOADING(true);
      axios({
        method: 'get',
        url: `${baseUrl}`,
        timeout: 1000,
      })
        .then(res => {
          console.log(res, 'news');
          this.SET_NEWS(res.data);
        })
        .catch(err => {
          err;
        })
        .finally(() => {
          this.SET_LOADING(false);
        });
    },
    getImages(id: number) {
      this.SET_LOADING(true);
      axios({
        method: 'get',
        url: `${baseUrl}/${id}/images`,
        timeout: 1000,
      })
        .then(res => {
          console.log(res, 'images');
          this.SET_IMAGES(res.data);
        })
        .catch(err => {
          err;
        })
        .finally(() => {
          this.SET_LOADING(false);
        });
    },
    getComments(id: number) {
      this.SET_LOADING(true);
      axios({
        method: 'get',
        url: `${baseUrl}/${id}/comments`,
        timeout: 1000,
      })
        .then(res => {
          console.log(res.data, 'comments');

          this.SET_COMMENTS(res.data);
        })
        .catch(err => {
          err;
        })
        .finally(() => {
          this.SET_LOADING(false);
        });
    },
  }),
});
