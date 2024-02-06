const base_URL = "https://dummyjson.com/";

//Get All user

export const getAllUser = async () =>
  await (await fetch(`${base_URL}users`)).json();

export const getUser = async (id) =>
  await (await fetch(`${base_URL}users/${id}`)).json();

export const updateUser = async (user) =>
  await (
    await fetch(`${base_URL}users/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
  ).json();

export const deleteUser = async (id) =>
  await (
    await fetch(`${base_URL}users/${id}`, {
      method: "DELETE",
    })
  ).json();
 
export const searchUsers = async (word) =>
  await (await fetch(`${base_URL}users/search?q=${word}`)).json();
