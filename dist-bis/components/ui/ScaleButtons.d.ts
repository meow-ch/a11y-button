import React from 'react';
type ComponentProps = {
    onChange: (newScale: number, index: number, scaleArray: number[]) => void;
    initialPosition?: number;
    initialValue?: number;
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
declare const ScaleButtons: React.FC<ComponentProps>;
export default ScaleButtons;
