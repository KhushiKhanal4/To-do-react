import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ progress }) => {
  return (
    <CircularProgressbar
      value={progress}
      text={`${progress}%`}
      styles={buildStyles({
        pathColor: `#3498db`,
        textColor: '#3498db',
        trailColor: '#e6e6e6',
      })}
    />
  );
};

export default ProgressBar;
