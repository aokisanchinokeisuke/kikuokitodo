import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component4_1NotThisMonth.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _1?: ReactNode;
  };
}
/* @figmaId 9:18 */
export const Component4_1NotThisMonth: FC<Props> = memo(function Component4_1NotThisMonth(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle3}></div>
      {props.text?._1 != null ? props.text?._1 : <div className={classes._1}>1</div>}
    </div>
  );
});
