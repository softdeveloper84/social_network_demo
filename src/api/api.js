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
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    getProfile(userId){
        console.warn("Obsolete method. Use ProfileAPI object");
        return profileAPI.getProfile(userId);
    }
};

export const authAPI = {
    me(){
        return instance.get(`/auth/me`)
            .then(response => response.data);
    },
    login(email, password, rememberMe, captcha=null){
        return instance.post('/auth/login', {email: email, password: password, rememberMe: rememberMe, captcha: captcha})
            .then(response => response.data);
    },
    logout(){
        return instance.delete('/auth/login');
    }
};

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/` + userId);
    },
    getStatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile){
        return instance.put(`profile`, profile)
    }
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`);
    }
};
