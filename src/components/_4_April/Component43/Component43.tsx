import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component43.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 21:16128 */
export const Component43: FC<Props> = memo(function Component43(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle10}></div>
      <div className={classes.H}>-h</div>
      <div className={classes.time}>Time</div>
    </div>
  );
});
