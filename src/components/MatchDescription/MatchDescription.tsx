import { TeamCard } from '../TeamCard/TeamCard.tsx';
import { Match } from '../../types/types.ts';
import style from './matchDescription.module.scss';

export function MatchDescription({ match: { awayTeam, homeTeam } }: { match: Match }) {
  return (
    <div className={style.description}>
      <TeamCard team={awayTeam} />
      <TeamCard team={homeTeam} />
    </div>
  );
}
