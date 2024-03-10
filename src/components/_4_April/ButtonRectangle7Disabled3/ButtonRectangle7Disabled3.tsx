import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './ButtonRectangle7Disabled3.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    rectangle7?: boolean;
  };
}
/* @figmaId 21:13899 */
export const ButtonRectangle7Disabled3: FC<Props> = memo(function ButtonRectangle7Disabled3(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.rectangle7 && <div className={classes.rectangle7}></div>}
    </button>
  );
});
