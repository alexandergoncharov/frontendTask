/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { initialState, UserState } from "./UserReducer";

export interface UserContextState extends UserState {
  loginUser: (token: string) => void;
  logoutUser: () => void;
}

export const initialContextState: UserContextState = {
  ...initialState,
  userToken: localStorage.getItem("token") || undefined,
  loginUser: () => {},
  logoutUser: () => {},
};

export const UserContext = createContext<UserContextState>(initialContextState);
