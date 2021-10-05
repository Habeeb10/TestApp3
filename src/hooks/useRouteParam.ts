import {useRoute, RouteProp} from '@react-navigation/core';
import {NavigationType, PathName} from '../navigation/type';

export default function useRouteParam<T extends PathName>() {
  const route = useRoute<RouteProp<NavigationType, T>>();

  return route.params as NavigationType[T];
}
