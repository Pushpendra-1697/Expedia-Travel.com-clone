import axios from "axios";

const fetchProduct = (query, page, limit = 10) => {
    if (!query) {
        return Promise.reject("query should be provided");
    }
    return axios.get("https://blog-database-p9we.vercel.app/Stays", {
        params: {
            q: query,
            _limit: limit,
            _page: page,
        }
    });
}

export { fetchProduct };