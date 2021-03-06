import {
  CLOSE_WINAMP,
  SET_SKIN_DATA,
  START_WORKING,
  STEP_MARQUEE,
  STOP_WORKING,
  TOGGLE_DOUBLESIZE_MODE,
  TOGGLE_LLAMA_MODE,
  TOGGLE_VISUALIZER_STYLE,
  SET_PLAYLIST_SCROLL_POSITION,
  LOADED
} from "../actionTypes";

const defaultDisplayState = {
  doubled: false,
  marqueeStep: 0,
  loading: true,
  llama: false,
  closed: false,
  working: false,
  skinImages: {
    EQ_PREAMP_LINE:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAABCAYAAADpXEERAAAAE0lEQVQoU2Pcdfruf4ZRMKRDAAD1lwNjTqcaUQAAAABJRU5ErkJggg==",
    EQ_GRAPH_LINE_COLORS:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAATCAYAAABRC2cZAAAAR0lEQVQYV2O4rCT9n+F9kOJ/hvfViv8ZHkzSQCE2afxneH/HEJm49Nr0PwOYWPLIAkp0PjL4z1B41uQ/Q9QGnf8MWrPEIAQANWYwvnlToNIAAAAASUVORK5CYII="
  },
  skinColors: [
    "rgb(0,0,0)",
    "rgb(24,33,41)",
    "rgb(239,49,16)",
    "rgb(206,41,16)",
    "rgb(214,90,0)",
    "rgb(214,102,0)",
    "rgb(214,115,0)",
    "rgb(198,123,8)",
    "rgb(222,165,24)",
    "rgb(214,181,33)",
    "rgb(189,222,41)",
    "rgb(148,222,33)",
    "rgb(41,206,16)",
    "rgb(50,190,16)",
    "rgb(57,181,16)",
    "rgb(49,156,8)",
    "rgb(41,148,0)",
    "rgb(24,132,8)",
    "rgb(255,255,255)",
    "rgb(214,214,222)",
    "rgb(181,189,189)",
    "rgb(160,170,175)",
    "rgb(148,156,165)",
    "rgb(150,150,150)"
  ],
  skinCursors: null,
  skinPlaylistStyle: null,
  skinRegion: {},
  visualizerStyle: 2,
  playlistScrollPosition: 0
};

const display = (state = defaultDisplayState, action) => {
  switch (action.type) {
    case TOGGLE_DOUBLESIZE_MODE:
      return { ...state, doubled: !state.doubled };
    case TOGGLE_LLAMA_MODE:
      return { ...state, llama: !state.llama };
    case STEP_MARQUEE:
      // TODO: Prevent this from becoming huge
      return { ...state, marqueeStep: state.marqueeStep + 1 };
    case STOP_WORKING:
      return { ...state, working: false };
    case START_WORKING:
      return { ...state, working: true };
    case CLOSE_WINAMP:
      return { ...state, closed: true };
    case LOADED:
      return { ...state, loading: false };
    case SET_SKIN_DATA:
      return {
        ...state,
        loading: false,
        skinImages: action.skinImages,
        skinColors: action.skinColors,
        skinPlaylistStyle: action.skinPlaylistStyle,
        skinCursors: action.skinCursors,
        skinRegion: action.skinRegion,
        skinGenLetterWidths: action.skinGenLetterWidths
      };
    case TOGGLE_VISUALIZER_STYLE:
      return { ...state, visualizerStyle: (state.visualizerStyle + 1) % 3 };
    case SET_PLAYLIST_SCROLL_POSITION:
      return { ...state, playlistScrollPosition: action.position };
    default:
      return state;
  }
};

export default display;
