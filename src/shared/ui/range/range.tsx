'use client'

import React from 'react';
import {Range as ReactRange, getTrackBackground} from "react-range";

import {RangeType, RangeTypeProps} from "@/shared/ui/range/range.type";
import style from './range.module.scss';

const GREY =  '#BFC2C8';
const PRIMARY = '#2B8B7C';

const Range = (props: RangeTypeProps) => {
  const {
    rtl = false,
    min = 0,
    max = 100,
    values = [30, 80],
    step = 1,
    onChange,
    labels = ['от', 'до'],
    placeholder,
    placeholderType,
    setFinalValue,
    isDisabled,
  } = props;

  const getLabel = (position: number) => {
    if (labels && labels[position]) {
      return (
        <div className={style.label}>
          {labels[position]}
        </div>
      );
    }

    return null;
  };

  const getValue = (position: number) => (
    <div className={style.value}>
      {values[position]}
    </div>
  );

  const getOutput = () => {
    if (placeholder) {
      return (
        <output
          className={style.output}
          id="output"
        >
          <div className={style.value_with_placeholder}>
            {getValue(0)}
            <div className={style.type}>
              {placeholderType}
            </div>
          </div>
        </output>
      );
    }

    return (
      <output
        className={style.output}
        id="output"
      >
        <div className={style.output_value}>
          {getLabel(0)}
          {getValue(0)}
        </div>
        {
          labels?.length === 2 && (
            <>
              <div className={style.dash} />
              <div className={style.output_value}>
                {getLabel(1)}
                {getValue(1)}
              </div>
            </>
          )
        }
      </output>
    );
  };

  return (
    <div
      className={style.range_wrapper}
    >
      {getOutput()}
      <ReactRange
        disabled={isDisabled}
        values={values}
        step={step}
        min={min}
        max={max}
        rtl={rtl}
        onChange={(values) => console.log(values)}
        onFinalChange={(values) => null}
        // onChange={(values) => onChange(values)}
        // onFinalChange={(values) => setFinalValue(values)}
        renderTrack={({props, children}) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{...props.style}}
            className={style.range_track}
          >
            <div
              ref={props.ref}
              className={style.range_track_background}
              style={{
                background: getTrackBackground({
                  values,
                  colors: [GREY, PRIMARY, GREY],
                  min: min,
                  max: max,
                  rtl,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({props}) => (
          <div
            {...props}
            className={style.range_thumb}
            style={{...props.style}}
          />
        )}
      />
    </div>
  );
};

export default Range;
