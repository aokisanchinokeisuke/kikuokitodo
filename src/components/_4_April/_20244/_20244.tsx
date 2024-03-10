import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Day } from '../Day/Day.js';
import { JanualyAugust } from '../JanualyAugust/JanualyAugust.js';
import classes from './_20244.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 36:212667 */
export const _20244: FC<Props> = memo(function _20244(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes._20244}>
        <JanualyAugust className={classes.janualyAugust} />
        <JanualyAugust className={classes.janualyAugust2} />
        <JanualyAugust className={classes.janualyAugust3} />
        <JanualyAugust className={classes.janualyAugust4} />
        <JanualyAugust className={classes.janualyAugust5} />
        <JanualyAugust className={classes.janualyAugust6} />
        <Day className={classes.day} />
      </div>
    </div>
  );
});
