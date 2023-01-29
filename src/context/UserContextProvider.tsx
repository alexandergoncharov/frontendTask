import { useReducer, ReactNode } from 'react';
import { UserContext } from './UserContext';
import { initialState, reducer } from './UserReducer';

type Props = {
    children: ReactNode;
};

export default function UserContextProvider({ children }: Props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function loginUser(token: string) {
        localStorage.setItem('userToken', token);
        dispatch({
            type: 'logged_in',
            token
        });
    }

    function logoutUser() {
        localStorage.removeItem('token');
        dispatch({
            type: 'logged_out'
        });
    }

    return (
        <UserContext.Provider value={{
            userToken: state.userToken,
            loginUser,
            logoutUser,
        }}>
            {children}
        </UserContext.Provider>
    );
}