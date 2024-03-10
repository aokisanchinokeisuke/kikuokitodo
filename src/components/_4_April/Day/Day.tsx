import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Component4_Day } from '../Component4_Day/Component4_Day.js';
import classes from './Day.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 21:61591 */
export const Day: FC<Props> = memo(function Day(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Component4_Day
        className={classes.component10}
        text={{
          mon: <div className={classes.mon}>Sat</div>,
        }}
      />
      <Component4_Day
        className={classes.component11}
        text={{
          mon: <div className={classes.mon2}>Fri</div>,
        }}
      />
      <Component4_Day
        className={classes.component9}
        text={{
          mon: <div className={classes.mon3}>Thu</div>,
        }}
      />
      <Component4_Day
        className={classes.component8}
        text={{
          mon: <div className={classes.mon4}>Wed</div>,
        }}
      />
      <Component4_Day
        className={classes.component7}
        text={{
          mon: <div className={classes.mon5}>Tue</div>,
        }}
      />
      <Component4_Day
        className={classes.component5}
        text={{
          mon: <div className={classes.mon6}>Sun</div>,
        }}
      />
      <Component4_Day className={classes.component6} />
    </div>
  );
});
