


let users = [{ id:1, name: "Alice",lastname:"Pessoa", bithday: new Date("1990-01-01"), email: "aliceprado@yopmail.com"},
  { id:2, name: "Henry",lastname:"Pessoa", bithday: new Date("2022-01-01"), email: "henrydias@yopmail.com"}
]

export const userList = (req: any, res: any) => {
    res.json(users);
} 

export const searchUserById = (req: any, res: any) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Usuário não encontrado');  
  res.json(user);
}

export const createUser = (req: any, res: any) => {
  const newUser = {id: users.length + 1, ...req.body};
  users.push(newUser);
  res.status(201).json(newUser);
}

export const updateUser = (req: any, res: any) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) return res.status(404).send('Usuário não encontrado');

  user.name = req.body.name || user.name;
  user.lastname = req.body.lastname || user.lastname;
  user.bithday = req.body.bithday || user.bithday;
  user.email = req.body.email || user.email;

  res.json(user);
}

export const deleteUser = (req: any, res: any) => {
  const userIndex = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).send();
}

