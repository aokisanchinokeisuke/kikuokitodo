import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import { _4_April } from './components/_4_April/_4_April.js';
import resets from './components/_resets.module.css';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <_4_April />
    </div>
  );
});
