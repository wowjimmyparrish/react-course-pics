import axios from "axios";

const searchImages = async (data) => {
  const response =  await axios.get("https://api.unsplash.com/search/photos", {
        headers: {
            Authorization: "Client-ID KQbQVhYkRis7H3JHVDxIozUd0AGjz0qfd_E3mMcULTc"
        },
        params: {
            query: data,
        }
    })
    
    return response.data.results
}

export default searchImages