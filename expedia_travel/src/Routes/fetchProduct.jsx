import axios from "axios";

const fetchProduct = (query, page, limit = 10) => {
    if (!query) {
        return Promise.reject("query should be provided");
    }
    return axios.get("http://localhost:3000/Stays", {
        params: {
            q: query,
            _limit: limit,
            _page: page,
        }
    });
}

export { fetchProduct };