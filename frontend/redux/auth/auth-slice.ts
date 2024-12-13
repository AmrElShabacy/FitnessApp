import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sign } from "crypto";
import { v4 as UUID, v4 } from "uuid";

type InitialState = {
  values: AuthValues;
};
type AuthValues = {
  id: string;
  peerId?: string;
  username: string;
  email: string;
  password: string;
  token: string;
};

const initialState = {
  values: {
    id: "",
    peerId: "",
    username: "",
    email: "",
    password: "",
    token: "",
  } as AuthValues,
} as InitialState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updatePeerId: (state, action: PayloadAction<{ peerId: string }>) => {
      return {
        ...state,
        values: {
          ...state.values,
          peerId: action.payload.peerId,
        },
      };
    },
    logIn: (state, action: PayloadAction<AuthValues>) => {
      return {
        ...state,
        values: action.payload,
      };
    },
    logOut: (state) => {
      return {
        ...state,
        values: {
          id: "",
          peerId: "",
          username: "",
          name: "",
          email: "",
          password: "",
          token: "",
        },
      };
    },
    signUp: (state, action: PayloadAction<AuthValues>) => {
      return {
        ...state,
        values: action.payload,
      };
    },
  },
});

export const { logIn, logOut, signUp, updatePeerId } = authSlice.actions;
