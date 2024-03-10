import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component41.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 17:13792 */
export const Component41: FC<Props> = memo(function Component41(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.todo}>Todo</div>
      <div className={classes.rectangle5}></div>
      <div className={classes.input}>input</div>
    </div>
  );
});
