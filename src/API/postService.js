import axios from "axios";

export default class PostService {
    static async getData() {
        let response = await axios.get(`https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow`);
        return response;
    }
}