import React from "react";
import preivew from "./images/preview.png";
import user from "./images/user.svg";
import ImageZoom from "react-medium-image-zoom";
import Numeral from "numeral";

function postView(props) {
  function isData(data) {
    if (data) {
      return data;
    } else {
      return "NA";
    }
  }

  function isImage(img) {
    const extensions = [".gif", ".png", ".jpg", ".jpeg"];
    const validImg = extensions.some(e => img.includes(e));
    if (img.includes("gifv")) {
      return preivew;
    } else if (validImg) {
      return img;
    } else {
      return preivew;
    }
  }

  function numerals(num) {
    const result = Numeral(num).format("0a");
    return result;
  }
  return (
    <div>
      <div className="card text-left mb-2 shadow">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <img src={user} alt="user" className="user-icon" />
            <div className="title-text text-left">
              <p className="card-text-author">{isData(props.author)}</p>
              <p className="card-text-time d-block">
                <span className="text-secondary time-sub">Posted on </span>
                {props.time}
              </p>
            </div>
          </div>
          <p className="mt-3 card-title">{isData(props.title)}</p>
        </div>
        <div className="img-view">
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
        </div>

        {/* <img className="card-img-top" src={isImage(props.url)}) alt="post" /> */}

        <div className="card-body bg-light border  d-flex  justify-content-between px-md-4">
          <div className="d-flex align-items-baseline">
            <span className="fa fa-thumbs-up mr-1 fa-icon d-none d-md-block"></span>
            <span className="small-text mr-1">Likes</span>
            <p className="card-text">{numerals(props.score)}</p>
          </div>

          <div className="d-flex align-items-baseline">
            <span className="fa fa-comment mr-1 fa-icon d-none d-md-block"></span>
            <span className="small-text mr-1">Comments</span>
            <p className="card-text">{numerals(props.comments)}</p>
          </div>

          <div className="d-flex align-items-baseline">
            <span className="fa fa-users mr-1 fa-icon d-none d-md-block"></span>
            <span className="small-text mr-1">Subscribers</span>
            <p className="card-text">{numerals(props.subscribers)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default postView;
