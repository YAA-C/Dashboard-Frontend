import React, { useState, useEffect } from "react";
import "./fights.css";

export const PlayerTargetAnimation = ({ data }) => {
  const [frameIndex, setFrameIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isPlaying && data && data.length > 0) {
      interval = setInterval(() => {
        setFrameIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isPlaying, data]);

  const goToFirstFrame = () => {
    setFrameIndex(0);
  };

  const goToPreviousFrame = () => {
    setFrameIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data && data.length ? data.length - 1 : 0
    );
  };

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const goToNextFrame = () => {
    setFrameIndex(
      (prevIndex) => (prevIndex + 1) % (data && data.length ? data.length : 1)
    );
  };

  const goToLastFrame = () => {
    setFrameIndex(data && data.length ? data.length - 1 : 0);
  };

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const { playerX, playerY, targetX, targetY, isHurt } = data[frameIndex];
  const coordinates = data.map(({ playerX, playerY, targetX, targetY }) => [
    playerX,
    playerY,
    targetX,
    targetY,
  ]);

  const minX = Math.min(
    ...coordinates.map(([x1, y1, x2, y2]) => Math.min(x1, x2))
  );
  const maxX = Math.max(
    ...coordinates.map(([x1, y1, x2, y2]) => Math.max(x1, x2))
  );
  const minY = Math.min(
    ...coordinates.map(([x1, y1, x2, y2]) => Math.min(y1, y2))
  );
  const maxY = Math.max(
    ...coordinates.map(([x1, y1, x2, y2]) => Math.max(y1, y2))
  );

  let LB = minX;
  let RB = maxX;
  let TB = minY;
  let BB = maxY;

  const padding = 4;

  if (maxX - minX > maxY - minY) {
    LB -= (maxX - minX) / padding;
    RB += (maxX - minX) / padding;

    const rangeX = RB - LB;
    const midY = (maxY + minY) / 2;

    TB = midY - rangeX / 2;
    BB = midY + rangeX / 2;
  } else {
    TB -= (maxY - minY) / padding;
    BB += (maxY - minY) / padding;

    const rangeY = TB - BB;
    const midX = (maxX + minX) / 2;

    LB = midX - rangeY / 2;
    RB = midX + rangeY / 2;
  }

  const normalizeCoordinate = (value, minValue, maxValue) => {
    return ((value - minValue) / (maxValue - minValue)) * 100;
  };

  const normalizedPlayerX = normalizeCoordinate(playerX, LB, RB);
  const normalizedPlayerY = normalizeCoordinate(playerY, TB, BB);
  const normalizedTargetX = normalizeCoordinate(targetX, LB, RB);
  const normalizedTargetY = normalizeCoordinate(targetY, TB, BB);

  return (
    <div className="rutu_chart">
      <svg viewBox="0 0 100 100" width="100%" height="400">
        {/* Legend */}
        <text fontSize="4" x="2" y="5" fill="blue">
          Player
        </text>
        <circle cx="16" cy="4" r="1" fill="blue" />
        <text fontSize="4" x="22" y="5" fill="red">
          Target
        </text>
        <circle cx="37" cy="4" r="1" fill="red" />
        <text fontSize="4" x="46" y="5" fill="black">
          Line indicates - Target is hurt
        </text>
        <text fontSize="4" x="72" y="10" fill="black">
          #Frame - {frameIndex + 1}
        </text>

        {/* Player and Target */}
        {isHurt && (
          <line
            x1={normalizedPlayerX}
            y1={normalizedPlayerY}
            x2={normalizedTargetX}
            y2={normalizedTargetY}
            stroke="black"
          />
        )}
        <circle
          cx={normalizedPlayerX}
          cy={normalizedPlayerY}
          r="1.5"
          fill="blue"
        />
        <circle
          cx={normalizedTargetX}
          cy={normalizedTargetY}
          r="1.5"
          fill="red"
        />
      </svg>
      <div className="rutu_controls" style={{ marginTop: "2vh" }}>
        <button
          style={{ fontSize: "2.5vh", overflow: "hidden" }}
          onClick={goToFirstFrame}
          className="btn btn-danger"
        >
          1st frame
        </button>
        <button
          style={{ fontSize: "2.5vh" }}
          onClick={goToPreviousFrame}
          className="btn btn-primary"
        >
          prev
        </button>
        <button
          style={{ fontSize: "2.5vh" }}
          onClick={togglePlayPause}
          className="btn btn-success"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          style={{ fontSize: "2.5vh" }}
          onClick={goToNextFrame}
          className="btn btn-primary"
        >
          next
        </button>

        <button
          style={{ fontSize: "2.5vh" }}
          onClick={goToLastFrame}
          className="btn btn-danger"
        >
          last frame
        </button>
      </div>
    </div>
  );
};
