import axios from "axios";
const baseUrl = "http://localhost:5000";
export async function getOrgan(path, info) {
    try {
        const getAllOrgan = await axios.get(baseUrl + path, info);
        return getAllOrgan.data;
    } catch (err) {
        console.log(err);
    }
}

export async function createOrganization(task) {
    try {
        const todo = await axios.post(baseUrl, task);
        return todo.data;
    } catch (err) {
        console.log(err);
    }
}