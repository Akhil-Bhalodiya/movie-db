import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment/moment";
import { ImageClass } from "./StyleComponent";

const MovieInfoPopup = ({ show, onClose, indata, image_path, ImageUrl }) => {
  
  return (
    <div>
      <Modal
        show={show}
        indata={indata}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <ImageClass
              src={
                indata.backdrop_path
                  ? `${image_path}${indata.backdrop_path}`
                  : ImageUrl
              }
              alt="No Poster found"
            ></ImageClass>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h3> {indata.original_title} </h3>
            <p>{indata.overview}</p>
          </div>
          <div>
            <b>IMDB rating : </b>
            {indata.vote_average} <i className="fas fa-star"></i>
            <br></br>
            <b>Release Dtate : </b>
            {moment(indata.release_date).format("MMM Do YY")}
            <br></br>
            <b>Status : </b>
            {indata.status}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieInfoPopup;
