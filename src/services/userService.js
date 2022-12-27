import * as httpRequet from '~/utils/httpRequet';

export const getSuggested = async ({ page, perPage }) => {
    try {
        const res = await httpRequet.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
 export const getFollowing = async ({ page, accessToken }) => {
    try {
        const res = await httpRequet.get('me/followings', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
            params: {
                page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}; 
