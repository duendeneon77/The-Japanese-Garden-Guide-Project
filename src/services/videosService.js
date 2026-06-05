const API = "http://localhost:3001/videos";


// GET ALL
export async function getVideos() {
  const res = await fetch(API);
  return res.json();
}


// CREATE
export async function createVideo(data) {
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
export async function updateVideo(id, data) {
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
export async function deleteVideo(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });
}