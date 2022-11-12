import axios from "axios";

const fetchProduct = (query, page, limit = 10) => {
    if (!query) {
        return Promise.reject("query should be provided");
    }
    return axios.get("https://rct101-mock-server.herokuapp.com/api/Stays", {
        params: {
            q: query,
            _limit: limit,
            _page: page,
        }
    });
}

export { fetchProduct };