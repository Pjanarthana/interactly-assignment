import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ConfigPanel from '../components/ConfigPanel';

const Home = () => {
  return (
    <div className="flex justify-between items-start p-4">
      <VideoPlayer />
      <ConfigPanel />
    </div>
  );
};

export default Home;
