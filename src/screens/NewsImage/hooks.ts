import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import useRouteParam from '../../hooks/useRouteParam';
import {Dispatch, RootState} from '../../store';

export const useNewsImage = () => {
  const dispatch = useDispatch<Dispatch>();
  const {id} = useRouteParam<'NewsImage'>();

  useEffect(() => {
    dispatch.news_Store.getImages(id);
    dispatch.news_Store.getComments(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useSelector((state: RootState) => state.news_Store);
  return data;
};
