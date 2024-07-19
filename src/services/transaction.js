const API_BASE_URL = "http://localhost:3000";
//const API_BASE_URL = "http://localhost:4000";

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
