const apiEndpoint = 'https://reqres.in/api/users';
let users = [];

// Fetch API wrapper
const fetchApi = (url, options = {}) => fetch(url, options).then(res => res.json());

// Create
const addUser = (name, job) => {
  return fetchApi(apiEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, job }),
  }).then(data => {
    const newUser = { id: data.id, name, job };
    users.push(newUser);
    displayUsers();
  });
};

// Read
const displayUsers = () => {
  const usersContainer = document.getElementById('users');
  usersContainer.innerHTML = users.map(user => 
    `<div>
      <span>${user.name}: ${user.job}</span>
      <button onclick="updateUser(${user.id}, '${user.name}', '${user.job}')">Update</button>
      <button onclick="deleteUser(${user.id})">Delete</button>
    </div>`
  ).join('');
};

// Update
const updateUser = (id, name, job) => {
  const newJob = prompt("Enter new job", job);
  if (!newJob) return;
  return fetchApi(`${apiEndpoint}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, job: newJob }),
  }).then(() => {
    const user = users.find(user => user.id === id);
    user.job = newJob;
    displayUsers();
  });
};

// Delete
const deleteUser = id => {
  return fetchApi(`${apiEndpoint}/${id}`, {
    method: 'DELETE',
  }).then(() => {
    users = users.filter(user => user.id !== id);
    displayUsers();
  });
};

// Event listeners
document.getElementById('addUserBtn').addEventListener('click', () => {
  const userName = document.getElementById('userName').value.trim();
  const userJob = document.getElementById('userJob').value.trim();
  if (userName && userJob) {
    addUser(userName, userJob);
    document.getElementById('userName').value = '';
    document.getElementById('userJob').value = '';
  }
});

// Fetch existing users (optional step to fetch initial data)
fetchApi(apiEndpoint).then(data => {
  users = data.data.map(user => ({ id: user.id, name: user.first_name, job: user.last_name }));
  displayUsers();
});
