import style from './cardStatus.module.scss';
import { MatchStatus } from '../../types/types.ts';

type StatusClass = 'live' | 'waiting' | 'finished';

export function CardStatus({ matchStatus }: { matchStatus: MatchStatus }) {
  function resolveStatus(status: MatchStatus): StatusClass {
    switch (status) {
      case MatchStatus.Ongoing:
        return 'live';
      case MatchStatus.Scheduled:
        return 'waiting';
      case MatchStatus.Finished:
        return 'finished';
      default:
        return 'waiting';
    }
  }

  const statusClass: StatusClass = resolveStatus(matchStatus);

  return <div className={`${style.status} ${style['status_' + statusClass]}`}>{matchStatus}</div>;
}
