import { Player } from '../../types/types.ts';
import style from './userCard.module.scss';

export function UserCard({ user }: { user: Player }) {
  return (
    <div className={style.user}>
      <div className={style.user_player}>
        <span className={style.user_player_avatar}></span>
        <span>{user.username}</span>
      </div>
      <p>
        <span>Убийств: </span>
        {user.kills}
      </p>
    </div>
  );
}
