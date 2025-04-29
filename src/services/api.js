export async function login(email, password) {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  return {
    status: response.status,
    body: data.body,
    message: data.message,
  };
}

export async function getUserProfile(token) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  return {
    status: response.status,
    body: data.body,
    message: data.message,
  };
}

export async function updateUserProfile(token, firstName, lastName) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName }),
    // JSON.stringify({ firstName: "Marie", lastName: "Durand" }) stringify permet de convertir un objet js en en chaine de caractere json
  });

  const data = await response.json();
  return {
    status: response.status,
    body: data.body,
    message: data.message,
  };
}
