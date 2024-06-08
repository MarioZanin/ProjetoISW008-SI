const apiEndpoint = 'https://reqres.in/api/users';
let users = [];

// Fetch API wrapper
const fetchApi = (url, options = {}) => fetch(url, options).then(res => {
  if (!res.ok) {
    return res.text().then(text => { throw new Error(text) });
  }
  return res.json();
});

// Create
const addUser = (firstName, lastName, email) => {
  return fetchApi(apiEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ first_name: firstName, last_name: lastName, email }),
  }).then(data => {
    console.log('Usuário Adicionado:', data);
    const newUser = { id: data.id, first_name: firstName, last_name: lastName, email };
    users.push(newUser);
    displayUsers();
  }).catch(error => console.error('Erro ao Adicionar o Usuário:', error));
};

// Read
const displayUsers = () => {
  const usersContainer = document.getElementById('users');
  usersContainer.innerHTML = users.map(user => 
    `<div>
      <span>${user.first_name} ${user.last_name}: ${user.email}</span>
      <button class="update-btn" data-firstname="${user.first_name}" data-lastname="${user.last_name}" data-email="${user.email}">Atualiza</button>
      <button class="delete-btn" data-firstname="${user.first_name}" data-lastname="${user.last_name}">Excluir</button>
    </div>`
  ).join('');

  document.querySelectorAll('.update-btn').forEach(button => {
    button.addEventListener('click', () => {
      const firstName = button.getAttribute('data-firstname');
      const lastName = button.getAttribute('data-lastname');
      const email = button.getAttribute('data-email');
      updateUser(firstName, lastName, email);
    });
  });

  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', () => {
      const firstName = button.getAttribute('data-firstname');
      const lastName = button.getAttribute('data-lastname');
      deleteUser(firstName, lastName);
    });
  });
};

// Update
const updateUser = (firstName, lastName, email) => {
  const newEmail = prompt("Coloque o novo email", email);
  if (!newEmail) return;

  console.log(`Atualizado o Usuário com nome: ${firstName} ${lastName}`);

  const user = users.find(user => user.first_name === firstName && user.last_name === lastName);
  if (!user) {
    console.error(`O Usuário com nome ${firstName} ${lastName} não está cadastrado na lista de usuários`);
    return;
  }

  return fetchApi(`${apiEndpoint}/${user.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ first_name: firstName, last_name: lastName, email: newEmail }),
  }).then(data => {
    console.log('Usuário Atualizado:', data);

    user.email = newEmail;
    displayUsers();
  }).catch(error => console.error('Erro ao Atualizar o Usuário:', error));
};

// Delete
const deleteUser = (firstName, lastName) => {
  const user = users.find(user => user.first_name === firstName && user.last_name === lastName);
  if (!user) {
    console.error(`O Usuário com nome ${firstName} ${lastName} não está cadastrado na lista de usuários`);
    return;
  }

  return fetch(`${apiEndpoint}/${user.id}`, {
    method: 'DELETE',
  }).then(res => {
    if (!res.ok) {
      return res.text().then(text => { throw new Error(text) });
    }
    console.log('Usuário Deletado:', user.id);
    users = users.filter(u => u.id !== user.id);
    displayUsers();
  }).catch(error => console.error('Error deleting user:', error));
};

// Event listeners
document.getElementById('addUserBtn').addEventListener('click', () => {
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const email = document.getElementById('email').value.trim();
  if (firstName && lastName && email) {
    addUser(firstName, lastName, email);
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
  }
});

// Fetch existing users (optional step to fetch initial data)
fetchApi(apiEndpoint).then(data => {
  users = data.data.map(user => ({ id: user.id, first_name: user.first_name, last_name: user.last_name, email: user.email }));
  displayUsers();
}).catch(error => console.error('Erro ao Buscar usuários:', error));
