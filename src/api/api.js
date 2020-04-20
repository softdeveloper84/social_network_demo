import axios from "axios";


const instanse = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "413b2ce7-d766-46be-9f84-9ccd2f9adba6"
    }
});

export const getUsers = (currentPage=1, pageSize=1) => {
    return instanse.get(`Users?page=${currentPage}&count=${pageSize}`,)
        .then(response => response.data);
};

export const authMe = () =>{
    return instanse.get(`/auth/me`)
        .then(response => response.data);
};

export const getProfile = (userId) => {
    return instanse.get(`profile/${userId}`);
};

export const unfollow = (userId) => {
    return instanse.delete(`follow/${userId}`)
};

export const follow = (userId) => {
    return instanse.post(`follow/${userId}`)
};
