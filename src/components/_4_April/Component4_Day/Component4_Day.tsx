import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component4_Day.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    mon?: ReactNode;
  };
}
/* @figmaId 21:57994 */
export const Component4_Day: FC<Props> = memo(function Component4_Day(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
      {props.text?.mon != null ? props.text?.mon : <div className={classes.mon}>Mon</div>}
    </div>
  );
});
