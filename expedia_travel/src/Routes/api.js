import axios from 'axios';

export const getStays = ({ page = 1, limit = 10, sort = "name", order = "asc" }) => {
    return axios({
        method: 'get',
        url: "https://blog-database-p9we.vercel.app/Stays",
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
        url: "https://blog-database-p9we.vercel.app/Stays",
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
        url: `https://blog-database-p9we.vercel.app/Stays/${id}`,
    });
};

export const ToggleStatus = (id, newStatus) => {
    return axios({
        method: 'patch',
        url: `https://blog-database-p9we.vercel.app/Stays/${id}`,
        data: { isStatus: newStatus }
    });
};