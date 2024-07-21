//const API_BASE_URL = "http://localhost:4000";
const API_BASE_URL =
  "http://ec2-3-143-110-192.us-east-2.compute.amazonaws.com:3000/";

export const createTransactionAPI = async (body) => {
  try {
    const url = `${API_BASE_URL}/transactions`;
    const req = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await req.json();
    return Promise.resolve(data);
  } catch (error) {
    return Promise.resolve(error);
  }
};
