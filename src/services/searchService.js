import * as httpRequet from '~/utils/httpRequet';


export const search = async (q, type ='less') => {
    try {
        const res = await httpRequet.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data
        
    } catch (error) {
        console.log(error)
    }
};