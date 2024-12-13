import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import sockectIoClient from "socket.io-client";
type RoomValues = {
  WS: "https://localhost:8080";
};
type InitialState = {
  values: RoomValues;
};

const initialState = {
  values: {
    WS: "https://localhost:8080",
  } as RoomValues,
} as InitialState;

export const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    createRoom: (state, action: PayloadAction<RoomValues>) => {
      return {
        ...state,
        values: action.payload,
      };
    },
    joinRoom: (state, action: PayloadAction<RoomValues>) => {
      return {
        ...state,
        values: action.payload,
      };
    },
  },
});
