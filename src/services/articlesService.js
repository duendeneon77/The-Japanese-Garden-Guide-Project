const API = "http://localhost:3001/articles";


// GET ALL
export async function getArticles() {
  const res = await fetch(API);
  return res.json();
}

// CREATE
export async function createArticle(data) {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

// UPDATE
export async function updateArticle(id, data) {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

// DELETE
export async function deleteArticle(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });
}