import axios from 'axios';

export const getStays = ({ page = 1, limit = 10, sort = "name", order = "asc" }) => {
    return axios({
        method: 'get',
        url: "http://localhost:3000/Stays",
        params: {
            _page: page,
            _limit: limit,
            _sort: sort,
            _order: order
        }
    });
};

export const addStays = (data) => {
    return axios({
        method: 'post',
        url: "http://localhost:3000/Stays",
        data: {
            image_url: data.image_url,
            name: data.name,
            location: data.location,
            rating: data.rating,
            price: +(data.price),
            isStatus: data.isStatus
        }
    });
};

export const deleteStays = (id) => {
    return axios({
        method: 'delete',
        url: `http://localhost:3000/Stays/${id}`,
    });
};

export const ToggleStatus = (id, newStatus) => {
    return axios({
        method: 'patch',
        url: `http://localhost:3000/Stays/${id}`,
        data: { isStatus: newStatus }
    });
};