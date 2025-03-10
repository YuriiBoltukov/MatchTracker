import { UserCard } from '../UserCard/UserCard.tsx';
import { Player, Team } from '../../types/types.ts';
import style from './teamcard.module.scss';

export function TeamCard({ team }: { team: Team }) {
  const totalKills: number = team.players.reduce(
    (acc: number, player: Player): number => acc + player.kills,
    0,
  );

  return (
    <div className={style.card}>
      {team.players.map((player: Player) => {
        return <UserCard user={player} key={player.username} />;
      })}
      <div className={style.card_team}>
        <p className={style.card_team_points}>
          <span>Points:</span> {team.points}
        </p>
        <p className={style.card_team_points}>
          <span>Место:</span> {team.place}
        </p>
        <p className={style.card_team_points}>
          <span>Всего убийств:</span> {totalKills}
        </p>
      </div>
    </div>
  );
}
