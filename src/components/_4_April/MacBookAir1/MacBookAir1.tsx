import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { _4 } from '../_4/_4.js';
import { Button_1 } from '../Button_1/Button_1.js';
import { Button_DisabledTrue } from '../Button_DisabledTrue/Button_DisabledTrue.js';
import { Component41 } from '../Component41/Component41.js';
import { Component42 } from '../Component42/Component42.js';
import { Component43 } from '../Component43/Component43.js';
import { Day } from '../Day/Day.js';
import { List_DisabledTrue } from '../List_DisabledTrue/List_DisabledTrue.js';
import classes from './MacBookAir1.module.css';
import { Polygon1Icon } from './Polygon1Icon.js';
import { Polygon2Icon } from './Polygon2Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
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
  text?: {
    mM?: ReactNode;
    _4?: ReactNode;
  };
}
/* @figmaId 31:79569 */
export const MacBookAir1: FC<Props> = memo(function MacBookAir1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle11}></div>
      <Component42 className={classes.component42} />
      <Component41 className={classes.component41} />
      <Button_DisabledTrue
        className={classes.button2}
        text={{
          button: <div className={classes.button}>Delete</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list}
        text={{
          toDoContent: <div className={classes.toDoContent}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD}>MM/DD</div>,
          H: <div className={classes.H}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list2}
        text={{
          toDoContent: <div className={classes.toDoContent2}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD2}>MM/DD</div>,
          H: <div className={classes.H2}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list3}
        text={{
          toDoContent: <div className={classes.toDoContent3}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD3}>MM/DD</div>,
          H: <div className={classes.H3}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list4}
        text={{
          toDoContent: <div className={classes.toDoContent4}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD4}>MM/DD</div>,
          H: <div className={classes.H4}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list5}
        text={{
          toDoContent: <div className={classes.toDoContent5}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD5}>MM/DD</div>,
          H: <div className={classes.H5}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list6}
        text={{
          toDoContent: <div className={classes.toDoContent6}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD6}>MM/DD</div>,
          H: <div className={classes.H6}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list7}
        text={{
          toDoContent: <div className={classes.toDoContent7}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD7}>MM/DD</div>,
          H: <div className={classes.H7}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list8}
        text={{
          toDoContent: <div className={classes.toDoContent8}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD8}>MM/DD</div>,
          H: <div className={classes.H8}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list9}
        text={{
          toDoContent: <div className={classes.toDoContent9}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD9}>MM/DD</div>,
          H: <div className={classes.H9}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list10}
        text={{
          toDoContent: <div className={classes.toDoContent10}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD10}>MM/DD</div>,
          H: <div className={classes.H10}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list11}
        text={{
          toDoContent: <div className={classes.toDoContent11}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD11}>MM/DD</div>,
          H: <div className={classes.H11}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list12}
        text={{
          toDoContent: <div className={classes.toDoContent12}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD12}>MM/DD</div>,
          H: <div className={classes.H12}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list13}
        text={{
          toDoContent: <div className={classes.toDoContent13}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD13}>MM/DD</div>,
          H: <div className={classes.H13}>-h</div>,
        }}
      />
      <List_DisabledTrue
        className={classes.list14}
        text={{
          toDoContent: <div className={classes.toDoContent14}>ToDo Content</div>,
          mMDD: <div className={classes.mMDD14}>MM/DD</div>,
          H: <div className={classes.H14}>-h</div>,
        }}
      />
      <Component43 className={classes.component43} />
      {props.text?.mM != null ? props.text?.mM : <div className={classes.mM}>MM</div>}
      <_4
        className={classes._42}
        text={{
          _4: props.text?._4 || <div className={classes._4}>M</div>,
        }}
      />
      <div className={classes.polygon1}>
        <Polygon1Icon className={classes.icon} />
      </div>
      <div className={classes.polygon2}>
        <Polygon2Icon className={classes.icon2} />
      </div>
      <Day className={classes.day} />
      <Button_1 className={classes.button3} />
    </div>
  );
});
