import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import { SET_FOCUS, UNSET_FOCUS } from "../../actionTypes";
import { toggleDoubleSizeMode } from "../../actionCreators";

const ClutterBar = props => (
  <div id="clutter-bar">
    <div id="button-o" />
    <div id="button-a" />
    <div id="button-i" />
    <div
      title={"Toggle Doublesize Mode"}
      id="button-d"
      className={classnames({ selected: props.doubled })}
      onMouseUp={props.handleMouseUp}
      onMouseDown={props.handleMouseDown}
    />
    <div id="button-v" />
  </div>
);

const mapStateToProps = state => ({
  doubled: state.display.doubled
});

const mapDispatchToProps = dispatch => ({
  handleMouseDown: () => dispatch({ type: SET_FOCUS, input: "double" }),
  handleMouseUp: () => {
    dispatch(toggleDoubleSizeMode());
    dispatch({ type: UNSET_FOCUS });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ClutterBar);
