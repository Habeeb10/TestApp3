export type NavigationType = {
  Home: undefined;
  NewsImage: {id: number; title: string};
};

export type PathName = keyof NavigationType;
