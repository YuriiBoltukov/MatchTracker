import style from './Button.module.scss';
import { Refresh } from '../../assets/icons/icons.tsx';
import { fetchMatches } from '../../store/matchSlice.ts';
import { RootState, useAppDispatch } from '../../store/store.ts';
import { useSelector } from 'react-redux';

export function Button() {
  const dispatch = useAppDispatch();
  const loading: boolean = useSelector((state: RootState) => state.matches.loading);

  return (
    <button
      disabled={loading}
      className={loading ? `${style.button_loading} ${style.button}` : style.button}
      onClick={() => dispatch(fetchMatches())}
    >
      Обновить
      <Refresh />
    </button>
  );
}
