import { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import { Input } from '@/components';
import s from './range-slider.module.scss';

export type RangeSliderProps = {
  low?: number;
  up: number;
  min: number;
  max: number;
}

export const RangeSlider = (props: RangeSliderProps) => {
  const { min, max, low = 0, up } = props;

  const [lowValue, setLowValue] = useState(low);
  const [upValue, setUpValue] = useState(up);

  const handleValueChange = (value:  number[]) => {
    setLowValue(value[0]);
    setUpValue(value[1]);
  };

  return (
    <div className={s.rangeSlider}>
      <Input type={'number'} className={s.input} value={lowValue} onChange={(e) => setLowValue(+e.target.value)} />
      <Slider.Root className={s.slider} min={min} max={max} defaultValue={[low, up]} onValueCommit={handleValueChange}>
        <Slider.Track className={s.track}>
          <Slider.Range className={s.range} />
        </Slider.Track>
        <Slider.Thumb className={s.thumb} aria-label="Volume" />
        <Slider.Thumb className={s.thumb} aria-label="Volume" />
      </Slider.Root>
      <Input type={'number'} className={s.input} value={upValue} onChange={(e) => setUpValue(+e.target.value)} />
    </div>
  );
};