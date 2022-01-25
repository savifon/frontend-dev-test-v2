import axios from "axios";

export const api = axios.create({
    baseURL: "https://tf378xyae1.execute-api.sa-east-1.amazonaws.com/prod",
});

export const getImages = async () => {
    return api.get("/images");
};
