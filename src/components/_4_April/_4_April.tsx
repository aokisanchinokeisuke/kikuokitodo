import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './_4_April.module.css';
import { _20244 } from './_20244/_20244.js';
import { MacBookAir1 } from './MacBookAir1/MacBookAir1.js';

interface Props {
  className?: string;
  hide?: {
    rectangle7?: boolean;
    rectangle72?: boolean;
    rectangle73?: boolean;
    rectangle74?: boolean;
    rectangle75?: boolean;
    rectangle76?: boolean;
    rectangle77?: boolean;
    rectangle78?: boolean;
    rectangle79?: boolean;
    rectangle710?: boolean;
    rectangle711?: boolean;
    rectangle712?: boolean;
    rectangle713?: boolean;
    rectangle714?: boolean;
  };
}
/* @figmaId 42:383579 */
export const _4_April: FC<Props> = memo(function _4_April(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <MacBookAir1
        className={classes._4_April}
        text={{
          mM: <div className={classes.mM}>April</div>,
          _4: <div className={classes._4}>4</div>,
        }}
      />
      <_20244 className={classes._20244} />
    </div>
  );
});
