import * as httpRequet from '~/utils/httpRequet';


export const search = async (type, page, accessToken = '') => {
    try {
        const res = await httpRequet.get('video', {
           
            headers: {
                Authorization: `Bearer ${accessToken}`,
              },

            params: {
                type: type,
                page: page,
            },
        });
        return res.data
        
    } catch (error) {
        console.log(error)
    }
};