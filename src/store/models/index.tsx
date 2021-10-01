import {Models} from '@rematch/core';
import {news_Store} from './models';

export interface RootModel extends Models<RootModel> {
  news_Store: typeof news_Store;
}

export const models: RootModel = {news_Store};
