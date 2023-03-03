import React, { useState } from "react";
import logo from "../../imgs/logo.png";
import { CHANGE_SEARCH_TITLE  } from '../../constants/actionTypes'
import { connect } from "react-redux";
import agentObj from "../../agent";
const Banner = (props) => {
  const [queryTitle, setQueryTitle] = useState("");
  const handleQueryChange = (value) => {
    if(queryTitle.length)
    if (value?.length >= 3) {
      props.onSearchTitle(value)
    } else if (value?.length === 0) {
      props.onSearchTitle('')

    }
    setQueryTitle(value)
  }
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          <input id="search-box" value={queryTitle} onChange={e => {
            handleQueryChange(e.target.value)
          }} />
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => { 
  return state
}

const mapDispatchToProps = (dispatch) => { 
  return {
    onSearchTitle: (title) => dispatch({ type: CHANGE_SEARCH_TITLE, payload: agentObj.Items.byTitle(title)})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Banner);
