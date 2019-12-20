import React from "react";
import preivew from "./preview.png";
import ImageZoom from "react-medium-image-zoom";

function postView(props) {
  function isData(data) {
    if (data) {
      return data;
    } else {
      return "NA";
    }
  }

  function isImage(img) {
    const extensions = [".gif", ".png", ".jpg"];
    const validImg = extensions.some(e => img.includes(e));
    if (img.includes("gifv")) {
      return preivew;
    } else if (validImg) {
      return img;
    } else {
      return preivew;
    }
  }

  return (
    <div>
      <div className="card text-left mb-2 shadow">
        <div className="card-body">
          <div className="d-flex align-items-baseline">
            <span className="fa fa-user mr-2 user-icon"></span>
            <p className="card-text-author">{isData(props.author)}</p>
          </div>
          <p className="mt-2 card-title">{isData(props.title)}</p>
        </div>
        <ImageZoom
          image={{
            src: isImage(props.url),
            alt: "Post images",
            className: "card-img-top"
          }}
          zoomImage={{
            src: isImage(props.url),
            alt: "Post images"
          }}
        />

        {/* <img className="card-img-top" src={isImage(props.url)}) alt="post" /> */}

        <div className="card-body bg-light border  d-flex justify-content-between px-md-5">
          <div className="d-flex align-content-center">
            <span className="small-text mr-1">Likes</span>
            <p className="card-text">{props.score}</p>
          </div>

          <div className="d-flex">
            <span className="small-text mr-1">Comments</span>
            <p className="card-text">{props.comments}</p>
          </div>

          <div className="d-flex">
            <span className="small-text mr-1">Subscribers</span>
            <p className="card-text">{props.subscribers}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default postView;
