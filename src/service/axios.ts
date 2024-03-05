import axios from "axios";
import { URL_API } from "./const";

export const Axios = axios.create({baseURL:URL_API});