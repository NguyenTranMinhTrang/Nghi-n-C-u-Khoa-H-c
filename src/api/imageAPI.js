import axiosClient from "./axiosClient";

const imageAPI = {
    getAll: (params) => {
        const url = '/image';
        return axiosClient.get(url, { params });
    },
}

export default imageAPI;