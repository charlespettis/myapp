import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const api = createApi({
    refetchOnMountOrArgChange: 5,
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://www.skillcenterapp.com/api/',
        baseUrl: 'http://localhost:5000/api/',
        credentials:'include',
        mode: 'cors'
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
        managePendingGroupItem: builder.mutation({
            query: data => ({
                url: 'managePendingGroupItem',
                method: 'PATCH',
                body: data  
            })
        }),
        getVideo: builder.query({
            query: id => ({url: 'getVideo', method:'GET',params:{id:id}}),
        }),
        getCategoriesByType: builder.query({
            query: data => ({
                url: 'getCategoriesByType',
                method:'GET',
                params:{
                    ...data
                }
            })
        }),
        getItemsByCategory: builder.query({
            query: data => ({
                url: 'getItemsByCategory',
                method: "GET",
                params: {
                    ...data
                }
            })
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
        }),
        createCategory: builder.mutation({
            query: data => ({
                url: 'createCategory',
                method: 'POST',
                body: data
            })
        }),
        getSubscribedGroupsCategories: builder.query({
            query: () => 'getSubscribedGroupsCategories'
        }),
        deleteCategory: builder.mutation({
            query: id => ({
                url: 'deleteCategory',
                method: 'DELETE',
                body: {
                    id
                }
            })
        }),
        searchGroups: builder.query({
            query: search => ({
                url: 'searchGroups',
                method: "GET",
                params: {search: search}
            })
        }),
        createCheckoutSession: builder.mutation({
            query: data => ({
                url:'create-checkout-session',
                method: 'POST',
                body: data
            })
        }),
        orderSuccess: builder.query({
            query: data => ({
                url: 'order/success',
                method: 'GET',
                params: data
            })
        }),
        customerPortal: builder.query({
            query: () => ({
                url: 'customer-portal',
                method: 'GET'
            })
        }),
        deleteUserItem: builder.mutation({
            query: data => ({
                url: 'deleteUserItem',
                method: 'DELETE',
                body: data
            })
        }),
        getSubscribedUserGroups: builder.query({
            query: () => ({
                url: 'getSubscribedUserGroups',
                method: 'GET'
            })
        }),
        createForum: builder.mutation({
            query: data => ({
                url: 'createForum',
                method:'POST',
                body: data
            })
        }),
        getForums: builder.query({
            query: data => ({
                url: 'getForums',
                method: 'GET',
                params: data
            })
        }),
        getForumPosts: builder.query({
            query: data => ({
                url: 'getForumPosts',
                method: 'GET',
                params: data
            })
        }),
        createForumPost: builder.mutation({
            query: data => ({
                url: 'createForumPost',
                method: 'POST',
                body: data
            })
        }),
        getForumPost: builder.query({
            query: data => ({
                url: 'getForumPost',
                method: 'GET',
                params: data
            })
        }),
        createForumPostReply: builder.mutation({
            query: data => ({
                url: 'createForumPostReply',
                method: 'POST',
                body: data
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
    useManagePendingGroupItemMutation,
    useGetVideoQuery,
    useGetCategoriesByTypeQuery,
    useLazyGetCategoriesByTypeQuery,
    useLazyGetItemsByCategoryQuery,
    useGetItemsByCategoryQuery,
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
    useJoinGroupMutation,
    useCreateCategoryMutation,
    useGetSubscribedGroupsCategoriesQuery,
    useDeleteCategoryMutation,
    useLazySearchGroupsQuery,
    useCreateCheckoutSessionMutation,
    useOrderSuccessQuery,
    useCustomerPortalQuery,
    useDeleteUserItemMutation,
    useGetSubscribedUserGroupsQuery,
    useCreateForumMutation,
    useGetForumsQuery,
    useGetForumPostsQuery,
    useCreateForumPostMutation,
    useGetForumPostQuery,
    useCreateForumPostReplyMutation

} = api;