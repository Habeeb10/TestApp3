import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Dispatch, RootState} from '../../store';

export const useLandingPage = () => {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.news_Store.fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = useSelector((state: RootState) => state.news_Store);
  return data;
};
