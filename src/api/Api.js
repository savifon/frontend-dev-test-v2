import axios from "axios";

export const api = axios.create({
    baseURL: "https://raw.githubusercontent.com/savifon/frontend-dev-test-v2",
});

export const getImages = async () => {
    return api.get("/master/src/api/images.json");
};
