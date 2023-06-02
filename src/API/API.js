import axios from "axios";
const baseURL = "http://localhost:5000";
const getAllOrgan = async (path, info) => {
    // console.log(path);
    try {
        const result = await axios.post(baseURL + path, info);
        return result.data;
        // const result = await axios.post(baseURL + path, info);
        // return result.data;

    } catch (error) {
        console.log(error);
    }
}
export { getAllOrgan }