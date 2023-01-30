/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from "react";
import { initialState, ProfileState } from "./ProfileReducer";

export interface ProfileContextState extends ProfileState {
  loadContent: () => void;
  cancelLoad: () => void;
}

export const initialContextState = {
  ...initialState,
  loadContent: () => {},
  cancelLoad: () => {},
};

export const ProfileContext =
  createContext<ProfileContextState>(initialContextState);
