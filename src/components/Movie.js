import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import MovieInfoPopup from "./MovieInfoPopup";
import Bgcolor from "./bgcolor.module.css";
import Spinner from "react-bootstrap/Spinner";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.min.css";
import {
  MainContainer,
  Container,
  Detail,
  Date,
  ImgClass,
  Btn,
} from "./StyleComponent";
import {
  IMG_URL,
  ImageUrl,
  Base_url,
  Type,
  End_point,
  Short_by,
  Lang,
} from "./Variable";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [show, setShow] = useState(false);
  const [indata, setIndata] = useState([]);
  const [disable, setDisable] = useState(true);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setDisable(true);
    await axios
      .get(
        `${Base_url}${Type}${End_point}?sort_by=${Short_by}&api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      )
      .then((res) => {
        setMovies([...movies, ...res.data.results]);
        setLoading(true);
        setDisable(false);
      });
  };

  useEffect(() => {
    getData();
  }, [page]);

  const loadMore = () => {
    setPage(page + 1);
  };

  const movieInfo = (id) => {
    axios
      .get(
        `${Base_url}${End_point}${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${Lang}&page=${page}`
      )
      .then((infodata) => {
        setShow(true);
        setIndata(infodata.data);
      });
  };

  return (
    <>
      <MainContainer>
        {loading ? (
          movies.map((item, index) => {
            return (
              <Container
                className={Bgcolor.bgcolor}
                key={index}
                onClick={() => movieInfo(item.id)}
              >
                <ImgClass
                  src={
                    item.backdrop_path
                      ? `${IMG_URL}${item.backdrop_path}`
                      : ImageUrl
                  }
                  alt="./Images/download.png"
                />
                <Detail>
                  <h3>{item.original_title}</h3>
                  <p>
                    {item.vote_average} <FontAwesomeIcon icon={faStar} />
                  </p>
                </Detail>
                <Date>
                  <p>
                    Release Dtate :{" "}
                    {moment(item.release_date).format("MMM Do YY")}
                  </p>
                </Date>
              </Container>
            );
          })
        ) : (
          <Spinner
            className="loadingdisplay"
            animation="border"
            variant="warning"
          />
        )}
      </MainContainer>
      {!disable && (
        <Btn disabled={disable} onClick={loadMore}>
          Load More
        </Btn>
      )}
      <MovieInfoPopup
        show={show}
        onClose={() => setShow(false)}
        indata={indata}
        image_path={IMG_URL}
        ImageUrl={ImageUrl}
      />
    </>
  );
};

export default Movie;
