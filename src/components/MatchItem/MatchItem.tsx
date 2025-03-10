import { ArrowDown, ArrowUp, TeamIcon } from '../../assets/icons/icons.tsx';
import { useState } from 'react';
import { MatchDescription } from '../MatchDescription/MatchDescription.tsx';
import style from './matchItem.module.scss';
import { Match } from '../../types/types.ts';
import { CardStatus } from '../CardStatus/CardStatus.tsx';

export function MatchItem({ match }: { match: Match }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={style.item}>
      <div className={style.item_section}>
        <div className={style.item_section_team}>
          <TeamIcon />
          <span>{match.awayTeam.name}</span>
        </div>
        <div className={style.item_section_result}>
          <span>
            {match.awayScore} : {match.homeScore}
          </span>
          <CardStatus matchStatus={match.status} />
        </div>
        <div className={style.item_section_right}>
          <div className={style.item_section_team}>
            <span>{match.homeTeam.name}</span>
            <TeamIcon />
          </div>
          <div className={style.item_arrow} onClick={() => setVisible(!visible)}>
            {visible ? <ArrowUp /> : <ArrowDown />}
          </div>
        </div>
      </div>
      {visible && <MatchDescription match={match} />}
    </div>
  );
}
