import React from "react";
import Select from "react-select";

function dropdown(props) {
  const subreddits = [
    "alternative",
    "pics",
    "gifs",
    "advice animals",
    "cats",
    "images",
    "photoshop battles",
    "hmmm",
    "all",
    "aww"
  ];

  const optionValues = array => {
    return array.map(item => {
      return {
        value: item,
        label: item
      };
    });
  };
  const options = optionValues(subreddits);

  function handleChange(e) {
    props.getSubreddit(e.value);
  }

  return (
    <div className="dropdown-container">
      <p className="m-0 p-0 text-capitalize ">
        <span className="fa fa-swap mr-1 "></span>
        <span className="small-text"> switch b/w different subreddits </span>
      </p>
      <Select
        className="dropdown"
        options={options}
        onChange={handleChange}
        placeholder="subreddits"
      />
    </div>
  );
}

export default dropdown;
