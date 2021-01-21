import React, { useEffect, useState } from "react";
import VideoItem from "./VideoItem";
import { Video } from "./VideoInterface";
import * as videoService from "./VideoService";

function VideoList() {
  const [videos, setVideos] = useState<Video[]>([]); //use state es de tipo Video interface

  const loadVideos = async () => {
    const res = await videoService.getVideos();
    setVideos(res.data);
  };

  useEffect(() => {
    loadVideos();
  }, []); //la funcion es para saber lo que se va a a ejecutar y el arreglo es para saber cuando se ejecutara la funcion dependiendo de una variable cuando cambie
  return (
    <div>
      {videos.map((video) => {
        return <VideoItem video={video} />;
      })}
    </div>
  );
}

export default VideoList;
