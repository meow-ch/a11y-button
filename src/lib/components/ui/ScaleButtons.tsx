import React, { useMemo, useCallback } from 'react';
import { generateMinOneMaxArray } from '../../utils/scale';
import { ButtonGroup } from './ButtonGroup';
import { IconButton } from './IconButton';

type ComponentProps = {
  onChange: (newScale: number, index: number, scaleArray: number[]) => void;
  currentIndex: number;
  labelIncrease: string;
  labelDecrease: string;
  textScaleFactor: number;
  gapScale: number;
  icon?: React.ReactNode;
} & ({
  min: number;
  max: number;
  steps: number;
  stepsArray?: never;
} | {
  min?: never;
  max?: never;
  steps?: never;
  stepsArray: number[];
});

const ScaleButtons: React.FC<ComponentProps> = ({
  min,
  max,
  steps,
  onChange,
  currentIndex,
  labelIncrease,
  labelDecrease,
  textScaleFactor,
  gapScale,
  stepsArray,
  icon
}) => {
  // Generate the scale array with an evenly spaced set of values between min and max.
  const scaleArray = useMemo(() => stepsArray || generateMinOneMaxArray(min, max, steps), [min, max, steps, stepsArray]);

  // Handlers to change the current index.
  const handleDecrease = useCallback(() => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      onChange(scaleArray[newIndex], newIndex, scaleArray);
    }
  }, [currentIndex, scaleArray]);

  const handleIncrease = useCallback(() => {
    if (currentIndex < scaleArray.length - 1) {
      const newIndex = currentIndex + 1;
      onChange(scaleArray[newIndex], newIndex, scaleArray);
    }
  }, [currentIndex, scaleArray]);

  console.log('CRRENT', currentIndex, labelIncrease);

  return (
    <ButtonGroup gapScale={gapScale}>
      <IconButton
        icon={icon}
        text="-"
        label={labelDecrease}
        onClick={handleDecrease}
        disabled={currentIndex === 0}
        scale={textScaleFactor}
      />
      <IconButton
        icon={icon}
        text="+"
        label={labelIncrease}
        onClick={handleIncrease}
        disabled={currentIndex === scaleArray.length - 1}
        scale={textScaleFactor}
      />
    </ButtonGroup>
  );
};

export default ScaleButtons;
