import React from "react";
import { connect } from "react-redux";
import {
  reverseList,
  randomizeList,
  sortListByTitle,
  downloadHtmlPlaylist
} from "../../actionCreators";

import { Hr, Node } from "../ContextMenu";
import ContextMenuTarget from "../ContextMenuTarget";
import PlaylistMenu from "./PlaylistMenu";

/* eslint-disable no-alert */
/* TODO: This should really be kitty-corner to the upper right hand corner of the MiscMenu */
const SortContextMenu = props => (
  <ContextMenuTarget
    style={{ width: "100%", height: "100%" }}
    top
    handle={<div />}
  >
    <Node label="Sort list by title" onClick={props.sortListByTitle} />
    <Hr />
    <Node label="Reverse list" onClick={props.reverseList} />
    <Node label="Randomize list" onClick={props.randomizeList} />
  </ContextMenuTarget>
);

const ConnectedSortContextMenu = connect(null, {
  reverseList,
  randomizeList,
  sortListByTitle
})(SortContextMenu);

const MiscOptionsContextMenu = props => (
  <ContextMenuTarget
    style={{ width: "100%", height: "100%" }}
    top
    handle={<div />}
  >
    <Node onClick={props.downloadHtmlPlaylist} label="Generate HTML playlist" />
  </ContextMenuTarget>
);

const ConnectedMiscOptionsContextMenu = connect(null, { downloadHtmlPlaylist })(
  MiscOptionsContextMenu
);

const MiscMenu = () => (
  <PlaylistMenu id="playlist-misc-menu">
    <div className="sort-list" onClick={e => e.stopPropagation()}>
      <ConnectedSortContextMenu />
    </div>
    <div
      className="file-info"
      onClick={() => alert("Not supported in Webamp")}
    />

    <div className="misc-options" onClick={e => e.stopPropagation()}>
      <ConnectedMiscOptionsContextMenu />
    </div>
  </PlaylistMenu>
);

export default MiscMenu;
