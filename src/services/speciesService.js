const API = "http://localhost:3001/species";


// CREATE
export async function createSpecies(data) {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!res.ok) {
    throw new Error("Erro ao criar espécie");
  }

  return res.json();
}

// GET ALL
export async function getSpecies() {
  const res = await fetch(API);

  if (!res.ok) {
    throw new Error("Erro ao buscar espécies");
  }

  return res.json();
}

// GET BY ID
export async function getSpecieById(id) {
  const res = await fetch(`${API}/${id}`);

  if (!res.ok) {
    throw new Error("Espécie não encontrada");
  }

  return res.json();
}

// UPDATE
export async function updateSpecies(id, data) {
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
export async function deleteSpecies(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });
}