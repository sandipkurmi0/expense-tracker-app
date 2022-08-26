import axios from "axios";
import { API_URL } from "../../config/index";

export function __login(formData) {
  return new Promise((resolve, rejects) => {
    axios
      .post(`${API_URL}/login`, formData)
      .then(async (response) => {
        resolve(response.data);
      })
      .catch((error) => {
        rejects(error);
      });
  });
}
