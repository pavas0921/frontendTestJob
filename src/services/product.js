//const API_BASE_URL = "http://localhost:3000";
const API_BASE_URL = "https://testbackend-sabn.onrender.com";

export const getAllProductsAPI = async () => {
  try {
    const url = `${API_BASE_URL}/products`;
    const req = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await req.json();

    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(error);
  }
};
