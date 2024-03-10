import { memo, SVGProps } from 'react';

const Polygon2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 60 60' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M60 30L15 55.9808L15 4.01924L60 30Z' fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Polygon2Icon);
export { Memo as Polygon2Icon };
