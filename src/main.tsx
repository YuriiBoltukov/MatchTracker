import { createRoot } from 'react-dom/client';
import './index.scss';
import { Provider } from 'react-redux';
import { MatchTracker } from './components/MatchTracker/MatchTracker.tsx';
import { store } from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MatchTracker />
  </Provider>,
);
