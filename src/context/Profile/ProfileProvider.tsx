import { ReactNode, useReducer } from 'react';
import { getAuthor, getQuote } from '../../service/Content';
import { AuthorResponse, QuoteResponse } from '../../utils/types';
import { ProfileContext } from './ProfileContext';
import { initialState, reducer } from './ProfileReducer';

type Props = {
    children: ReactNode;
};

export default function ProfileContextProvider({ children }: Props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const token = localStorage.getItem("userToken")!;

    const loadContent = () => {
        const authorRequest = getAuthor(token);
        const quoteRequest = getQuote(token, authorRequest);

        dispatch({
            type: 'loading_content', payload: {
                authorPromise: authorRequest, quotesPromise: quoteRequest
            }
        });

        authorRequest.then((response) => {
            const authorResponse = response as unknown as AuthorResponse;
            const authorName: string = authorResponse.name;

            dispatch({ type: 'author_loaded', authorName });
        });

        quoteRequest.then(response => {
            const quote = response as unknown as QuoteResponse;
            const quoteText = quote.quote;

            dispatch({
                type: 'quote_loaded',
                quoteText
            });
        });
    };

    const cancelLoad = () => {
        state.authorPromise?.cancel();
        state.quotesPromise?.cancel();
        dispatch({ type: 'cancel_update' });
    };

    return (
        <ProfileContext.Provider value={{
            ...state,
            loadContent,
            cancelLoad,
        }}>
            {children}
        </ProfileContext.Provider>
    );
}