import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './_4.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    _4?: ReactNode;
  };
}
/* @figmaId 21:57833 */
export const _4: FC<Props> = memo(function _4(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?._4 != null ? props.text?._4 : <div className={classes._4}>4</div>}
    </div>
  );
});
