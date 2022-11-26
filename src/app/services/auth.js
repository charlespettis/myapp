import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/api/',
        credentials:'include'
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (creds) =>({
                url: 'register',
                method: 'POST',
                body: creds
            })
        }),
        login: builder.mutation({
            query: (creds) =>({
                url: 'login',
                method: 'POST',
                body: creds
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'logout',
                method: 'POST'
            })
        }),
        authorize: builder.query({
            query: () => 'authorize'
        })
    })
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useAuthorizeQuery
} = api;