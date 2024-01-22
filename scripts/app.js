let clients = [];

function renderClientTable() {
  const tableBody = document.getElementById('clientTableBody');
  tableBody.innerHTML = '';

  clients.forEach(client => {
    const row = `<tr>
                  <td>${client.name}</td>
                  <td>${client.description}</td>
                  <td>${client.email}</td>
                  <td>
                    <a href="#" onclick="openClientDetails(${client.id})">Voir la Fiche</a>
                  </td>
                </tr>`;
    tableBody.innerHTML += row;
  });
}

function openClientDetails(clientId) {
  const client = clients.find(c => c.id === clientId);
  if (client) {
    // Ouvrir la page de la fiche client avec les détails
    window.open(`client_page.html?id=${clientId}`, '_blank');
  }
}

function openAddClientForm() {
  // Ouvrir la page du formulaire pour ajouter un client
  window.open('add-client.html', '_blank');
}

function addClient() {
  const name = document.getElementById('clientName').value;
  const description = document.getElementById('clientDescription').value;
  const email = document.getElementById('clientEmail').value;

  const newClient = {
    id: clients.length + 1,
    name: name,
    description : description,
    email: email,
  };

  clients.push(newClient);
  renderClientTable();

  // Réinitialiser le formulaire
  document.getElementById('addClientForm').reset();
}

// Exemple de clients pré-remplis
clients = [
  { id: 1, name: 'Madame La Plume', description: 'Perroquet', email: 'laplume@gmail.com' },
  { id: 2, name: 'Pablo le bulldog', description: 'Chien', email: 'pablo@gmail.com' },
  { id: 2, name: 'Minou le stratège', description: 'Chat', email: 'minou@hotmail.fr' },
  { id: 2, name: 'Super-dog', description: 'Chien', email: 'superdog@hotmail.fr' },
];

// Initialiser la table des clients lors du chargement de la page principale
document.addEventListener('DOMContentLoaded', function () {
  renderClientTable();
});
