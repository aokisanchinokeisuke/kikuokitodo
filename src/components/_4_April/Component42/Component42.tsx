import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component42.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 17:13793 */
export const Component42: FC<Props> = memo(function Component42(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.term}>Term</div>
      <div className={classes.rectangle6}></div>
      <div className={classes.yYYYMMDD}>YYYY/MM/DD</div>
    </div>
  );
});
