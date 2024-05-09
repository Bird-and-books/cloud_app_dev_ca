const BASE_URL = 'http://localhost:4000'
const GET_ALL_URL = `${BASE_URL}/articles`
const GET_URL = (id) => `${BASE_URL}/articles/${id}`
const POST_URL = `${BASE_URL}/articles/new`
const DEL_URL = (id) => `${BASE_URL}/articles/${id}`
const PUT_URL = (id) => `${BASE_URL}/articles/${id}/edit`

const headers = { Accept: "application/json" };

const request = async (url, options) => {
  let result = '';
  let error = '';
  try {
    const response = await fetch(url, options);
    result = await response.json();
    console.log("Success:", result);
  } catch (err) {
    error = err
    console.error("Error:", err);
  }

  return {result, error}
}

export const post = async (data) => await request(POST_URL, {
  method: "POST",
  headers,
  body: JSON.stringify(data),
})

export const put = async (id, data) => await request(PUT_URL(id), {
  method: "PUT",
  headers,
  body: JSON.stringify(data),
})

export const getAll = async () => await request(GET_ALL_URL, { headers });
export const get = async (id) => await request(GET_URL(id), { headers });
export const delReq = async (id) => await request(DEL_URL(id), { method: 'DELETE', headers });
