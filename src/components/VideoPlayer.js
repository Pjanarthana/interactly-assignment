import React from 'react';
import { useSelector } from 'react-redux';
import TextBox from './TextBox';

const VideoPlayer = () => {
  const textBoxes = useSelector(state => state.text.textBoxes);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <video id="video-player" controls className="w-full h-auto">
        <source src="sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {textBoxes.map((textBox) => (
        <TextBox key={textBox.id} {...textBox} />
      ))}
    </div>
  );
};

export default VideoPlayer;
