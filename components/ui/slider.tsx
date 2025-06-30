import React from 'react';

type RangeSliderProps = {
  value: [number, number];
  onValueChange: (value: [number, number]) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
};

export function Slider({ value, onValueChange, min = 0, max = 100, step = 1, className }: RangeSliderProps) {
  const [minValue, maxValue] = value;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(e.target.value), maxValue - step);
    onValueChange([newMin, maxValue]);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(e.target.value), minValue + step);
    onValueChange([minValue, newMax]);
  };

  return (
    <div className={`relative w-full ${className || ''}`} style={{ height: 40 }}>
      {/* Track */}
      <div className="absolute w-full h-1 bg-gray-200 rounded top-1/2 left-0 transform -translate-y-1/2" />
      {/* Range highlight */}
      <div
        className="absolute h-1 bg-blue-400 rounded top-1/2"
        style={{
          left: `${((minValue - min) / (max - min)) * 100}%`,
          width: `${((maxValue - minValue) / (max - min)) * 100}%`,
          transform: 'translateY(-50%)',
        }}
      />
      {/* Min input */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minValue}
        onChange={handleMinChange}
        className="absolute w-full bg-transparent"
        style={{ zIndex: minValue < maxValue - step ? 2 : 3 }}
        aria-label="Minimum value"
      />
      {/* Max input */}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxValue}
        onChange={handleMaxChange}
        className="absolute w-full bg-transparent"
        style={{ zIndex: 3 }}
        aria-label="Maximum value"
      />
    </div>
  );
}