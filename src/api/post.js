import client from "./client";

export const getPosts = async (pageNo, limit) => {
    try{
        const { data } = await client(`/blogPost/posts?pageNo=${pageNo}&limit=${limit}`);

        //ISSUE: Displays no data
        // {console.log('Get post data: ')}
        // {console.log(data)}


        return data;
    } catch(error) {
        const { response } = error;

        if(response?.data){
            return response.data;
        }

        return { error: error.message || error };  
    }
}