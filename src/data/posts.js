const API_URL = import.meta.env.VITE_FOODBLOG_URL;

const baseURL = `${API_URL}/posts`;

const getPosts = async () => {
  const res = await fetch(`${baseURL}`);
  if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

  const data = await res.json();
  return data;
};

const getPostById = async postId => {
  const res = await fetch(`${baseURL}/${postId}`);
  if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);

  const data = await res.json();

  return data;
};

const updatePost = async (postId, updatePost) => {
  const res = await fetch(`${baseURL}/${postId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatePost)
  });
  if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);
  const data = await res.json();
  return data;
};

const deletePost = async postId => {
  const res = await fetch(`${baseURL}/${postId}`, { method: 'DELETE' });
  if (!res.ok) throw new Error(`${res.status}. Something went wrong!`);
};

export { getPosts, getPostById, updatePost, deletePost };
