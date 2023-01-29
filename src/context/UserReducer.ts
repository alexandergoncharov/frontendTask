export interface UserState {
  userToken?: string;
}

export const initialState = {
  userToken: localStorage.getItem("userToken") || undefined,
};

type UserAction = { type: "logged_in"; token: string } | { type: "logged_out" };

export function reducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case "logged_in":
      return { ...state, userToken: action.token };
    case "logged_out":
      return { ...state, userToken: undefined };
  }
}
