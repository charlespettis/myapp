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
        }),
        getUserDetails: builder.query({
            query: () => 'getUserDetails'
        }),
        createVideo: builder.mutation({
            query: (data) =>({
                url: 'createVideo',
                method: 'POST',
                body: data
            })
        }),
        getPendingGroupItems: builder.query({
            query: id => ({url: `getPendingGroupItems`,method:'GET',params:{id:id}})
        }),
        approvePendingGroupItem: builder.mutation({
            query: data => ({
                url: 'approvePendingGroupItem',
                method: 'PATCH',
                body: data  
            })
        }),
        getVideo: builder.query({
            query: id => ({url: 'getVideo', method:'GET',params:{id:id}}),
        }),
        getAllVideos: builder.query({
            query: () => 'getAllVideos'
        }),
        createArticle: builder.mutation({
            query: data => ({
                url: 'createArticle',
                method: 'POST',
                body: data
            })
        }),
        getAllArticles: builder.query({
            query: () => 'getAllArticles'
        }),
        getArticle: builder.query({
            query: id => ({url: 'getArticle', method:'GET', params:{id:id}})
        }),
        createCourse: builder.mutation({
            query: data => ({
                url: 'createCourse',
                method:'POST',
                body: data
            })
        }),
        getAllCourses: builder.query({
            query: () => 'getAllCourses'
        }),
        getCourse: builder.query({
            query: id => ({url: 'getCourse', method:'GET',params: {id: id}})
        }),
        search: builder.query({
            query: data => ({url:'search', method:'GET',params: {...data}})
        }),
        createRoadmap: builder.mutation({
            query: data => ({
                url: 'createCourse',
                method: 'POST',
                body: data
            })
        }),
        createGroup: builder.mutation({
            query: data => ({
                url: 'createGroup',
                method: 'POST',
                body: data
            })
        }),
        getAllGroups: builder.query({
            query: () => 'getAllGroups'
        }),
        joinGroup: builder.mutation({
            query: id => ({
                url: 'joinGroup',
                method: 'POST',
                body: {id: id}
            })
        })
    })
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useLogoutMutation,
    useAuthorizeQuery,
    useGetUserDetailsQuery,
    useCreateVideoMutation,
    useGetPendingGroupItemsQuery,
    useApprovePendingGroupItemMutation,
    useGetVideoQuery,
    useGetAllVideosQuery,
    useCreateArticleMutation,
    useGetAllArticlesQuery,
    useGetArticleQuery,
    useCreateCourseMutation,
    useGetAllCoursesQuery,
    useGetCourseQuery,
    useLazySearchQuery,
    useCreateRoadmapMutation,
    useCreateGroupMutation,
    useGetAllGroupsQuery,
    useJoinGroupMutation
} = api;