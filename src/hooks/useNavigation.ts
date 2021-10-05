import {useNavigation as useNav} from '@react-navigation/core';
import {NavigationType, PathName} from '../navigation/type';

export default function useNavigation<T extends PathName>() {
  const {navigate, ...rest} = useNav();

  const navigateToPath = (name: PathName, param?: NavigationType[T]) => {
    navigate(name, param);
  };

  return {
    navigate: navigateToPath,
    ...rest,
  };
}
