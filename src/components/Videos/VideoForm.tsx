import React, { ChangeEvent, useState,FormEvent } from "react";
import { Video } from "./VideoInterface";
import * as videoService from './VideoService'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;


function VideoForm() {

    const initialState = {
        title: '',
        description: '',
        url: ''
    }

    const [video, setVideo]= useState<Video>(initialState); 

    const handleInputChange = (e: InputChange) => { //e es de tipo ChangeEvent HTMLInputElement o HTMLTextAreaElement, vienen de los onchange

        setVideo({...video,[e.target.name]:e.target.value});//le paso el video inizial, despues porcada elemento le cambio por suu valor
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       const res =  await videoService.createVideo(video);
       console.log(res)
    }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card border-primary">
          <div className="card-body">
            <h3>Agregar Video</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  placeholder="titulo video"
                  onChange={handleInputChange}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  className="form-control"
                  placeholder="url video, ejemplo https://ejemplo.com"
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="description"
                  placeholder="descripcion del video"
                  rows={3}
                  className="form-control"
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button className="btn btn-primary btn-block">Agregar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoForm;
