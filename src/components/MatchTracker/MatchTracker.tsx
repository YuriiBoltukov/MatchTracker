import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './matchTracker.module.scss';
import { fetchMatches } from '../../store/matchSlice.ts';
import { AppDispatch, RootState } from '../../store/store.ts';
import { Button } from '../Button/Button.tsx';
import { MatchList } from '../MatchList/MatchList.tsx';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage.tsx';
import { Logo } from '../../assets/icons/icons.tsx';

export const MatchTracker: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { matches, error } = useSelector((state: RootState) => state.matches);

  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <header className={style.header}>
        <Logo aria-label="Match Tracker" />
        <div className={style.group}>
          {error && <ErrorMessage message={'Ошибка: не удалось загрузить информацию'} />}
          <Button />
        </div>
      </header>
      <MatchList matches={matches} />
    </div>
  );
};
