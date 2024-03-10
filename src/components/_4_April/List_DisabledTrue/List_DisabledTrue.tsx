import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { ButtonRectangle7Disabled3 } from '../ButtonRectangle7Disabled3/ButtonRectangle7Disabled3.js';
import classes from './List_DisabledTrue.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    rectangle7?: boolean;
  };
  text?: {
    toDoContent?: ReactNode;
    mMDD?: ReactNode;
    H?: ReactNode;
  };
}
/* @figmaId 21:13913 */
export const List_DisabledTrue: FC<Props> = memo(function List_DisabledTrue(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <ButtonRectangle7Disabled3
        className={classes.buttonRectangle7Disabled3}
        hide={{
          rectangle7: true,
        }}
      />
      {props.text?.toDoContent != null ? (
        props.text?.toDoContent
      ) : (
        <div className={classes.toDoContent}>ToDo Content</div>
      )}
      {props.text?.mMDD != null ? props.text?.mMDD : <div className={classes.mMDD}>MM/DD</div>}
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle9}></div>
      {props.text?.H != null ? props.text?.H : <div className={classes.H}>-h</div>}
    </div>
  );
});
