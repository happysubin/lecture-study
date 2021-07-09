import bcrypt from "bcrypt";

let users = [
  {
    username: "bob",
    password: "1q2w3e4r",
    name: "bob",
    email: "123@123",
    url: "naverdaum.com",
  },
];

export async function findByUsername(username) {
  const user = users.find((t) => {
    return t.username === username;
  });
  console.log(user);
  return user;
}

export async function creatUser(newUser) {
  const user = { ...newUser, id: Date.now().toString() };
  users.push(user);
  return user;
}

export const findById = async (id) => {
  return users.find((user) => {
    return user.id === id;
  });
};
