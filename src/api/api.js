import axios from "axios";


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "413b2ce7-d766-46be-9f84-9ccd2f9adba6"
    }
});

export const userAPI = {
    getUsers(currentPage=1, pageSize=1){
        return instance.get(`Users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data);
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`);
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    }
};

export const authAPI = {
    me(){
        return instance.get(`/auth/me`)
            .then(response => response.data);
    }
};
