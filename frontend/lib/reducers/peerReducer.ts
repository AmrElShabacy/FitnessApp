import { ADD_PEER, REMOVE_PEER } from "../actions/peerAction";

export type peerState = Record<
  string,
  {
    stream: MediaStream;
  }
>;

type peerAction =
  | {
      type: typeof ADD_PEER;
      payload: { peerId: string; stream: MediaStream };
    }
  | {
      type: typeof REMOVE_PEER;
      payload: { peerId: string };
    };

export const peerReducer = (state: peerState, action: peerAction) => {
  switch (action.type) {
    case ADD_PEER:
      return {
        ...state,
        [action.payload.peerId]: {
          stream: action.payload.stream,
        },
      };
    case REMOVE_PEER:
      const { [action.payload.peerId]: _, ...rest } = state;
      return rest;
    default:
      return { ...state };
  }
};
