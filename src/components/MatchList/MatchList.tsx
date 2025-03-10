import style from './MatchList.module.scss';
import { MatchItem } from '../MatchItem/MatchItem.tsx';
import { Match } from '../../types/types.ts';

export const MatchList = ({ matches }: { matches: Match[] }) => {
  return (
    <div className={style.matchList}>
      {matches.map((match: Match) => {
        return <MatchItem match={match} key={match.title} />;
      })}
    </div>
  );
};
