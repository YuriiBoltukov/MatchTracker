import style from './error.module.scss';
import { Alert } from '../../assets/icons/icons.tsx';

export function ErrorMessage({ message }: { message: string }) {
  return (
    <div className={style.error}>
      <span className={style.error_icon}>
        <Alert />
      </span>
      <span>{message}</span>
    </div>
  );
}
