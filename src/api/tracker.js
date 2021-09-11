import axios from "axios";  
import AsyncStorage from "@react-native-async-storage/async-storage";
const instance = axios.create({
  baseURL: "http://d65b-106-76-71-138.ngrok.io",
});
instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const tok = JSON.parse(token);
      config.headers.Authorization = `Bearer ${tok}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
