import axios from "axios";
const baseURL = "http://localhost:5000";
const getOrganOwner = async (path, info) => {
    try {
        const result = await axios.post(baseURL + path, info);
        return result.data;

    } catch (error) {
        console.log(error);
    }
}
const getTeacher = async (path, info) => {
    try {
        const result = await axios.post(baseURL + path, info)
        return result.data
    } catch (error) {
        console.log(error);
    }
}
const getStudent = async (path, info) => {
    try {
        const result = await axios.post(baseURL + path, info)
        return result.data
    } catch (error) {
        console.log(error);
    }
}
export { getOrganOwner, getTeacher, getStudent }