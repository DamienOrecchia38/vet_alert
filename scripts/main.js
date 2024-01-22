document.addEventListener('DOMContentLoaded', function () {
  // Les données des prochains rendez-vous
  const notificationsData = [
    { photo: 'images/chat_zombie.jpg', title: 'Rendez-vous avec chat zombie très malade', date: '2024-02-01', description: 'Check-up des organes qui sont encore fonctionnels et vaccin de la mort subite en urgence !' },
    { photo: 'images/zombie_chat.png', title: 'Réunion stratégique avec Minou le stratège', date: '2024-02-15', description: 'Consultation confidentielle pour discuter de ses projets de domination mondiale par le biais de siestes prolongées et de sa stratégie machiavélique pour conquérir le monde des boites en cartons' },
    { photo: 'images/dog_hypochondriac.jpg', title: 'Rendez-vous fictif avec chien hypochondriaque en pleine forme', date: '2024-03-01', description: 'Simuler une consultation pour encaisser le chèque.' },
    { photo: 'images/chien_super_héro.png', title: 'Rendez-vous avec Super-Dog, le chien super héros en manque de reconnaissance', date: '2025-04-15', description: 'Déterminer le super héros qui habite le corps du patient.' },
    { photo: 'images/madame_plume.jpg', title: 'Débat philosphique avec Madame Plume, le perroquet philosophe', date: '2025-05-01', description: 'Proposer un débat intense sur la signification profonde de la vie des oiseaux, des discussions existentielles et des réflexions plumeuses.' },
    { photo: 'images/poisson_rouge_peur.jpg', title: 'Consultation de psychothérapie pour Oscar le poisson rouge', date: '2025-06-02', description: 'Oscar souhaite discuter de ses angoissess existentielles liées à la taille de son bocal. Se préparer à plonger dans les profondeurs de l\'esprit du poisson rouge.' },
    { photo: 'images/meditation_cat.jpg', title: 'Séance de méditation avec Monsieur Miaou', date: '2025-07-08', description: 'La patient souhaite atteindre un niveau supérieur de zénitude féline et aimerait ronronner en harmonie avec l\'univers.' },
    { photo: 'images/bulldog.jpg', title: 'Exposition d\'art canin avec Pablo le bulldog narcissique', date: '2025-09-14', description: 'Pablo le bulldog expose ses dernières œuvres d\'art abstraites, dont sa célèbre toile \'Le Chien Qui Rêve\'. Admirer ses talents artistiques pour regonfler son égo.".' },
    { photo: 'images/lapin.jpg', title: 'Réunion Secrète des Lapins Philanthropes', date: '2025-09-14', description: 'Les lapins philanthropes se réunissent pour discuter de leur mission secrète visant à distribuer des carottes à tous les animaux nécessiteux. Penser à apporter des légumes frais.' },
    { photo: 'images/panda.jpg', title: 'Thérapie de groupe pour animaux insomniaques', date: '2025-09-14', description: 'Diffuser des ASMR de ronflements apaisants.' },
  ];

  // Sélectionner le conteneur des notifications
  const notificationsContainer = document.getElementById('notifications-container');

  // Ajouter chaque notification au conteneur
  notificationsData.forEach(notification => {
    const notificationElement = createNotificationElement(notification);
    notificationsContainer.appendChild(notificationElement);
  });
});

// Fonction pour créer un élément de notification
function createNotificationElement(notification) {
  const notificationCard = document.createElement('div');
  notificationCard.classList.add('col-md-6', 'col-lg-3', 'mb-4');

  notificationCard.innerHTML = `
  <div class="card h-100 bg-light shadow">
  <img src="${notification.photo}" class="card-img-top" alt="${notification.title}">
  <div class="card-body">
    <h6 class="card-title">${notification.title}</h6>
    <p class="card-text">${notification.description}</p>
    <p class="card-text"><small class="text-muted">${formatDate(notification.date)}</small></p>
  </div>
</div>
  `;

  return notificationCard;
}

// Fonction pour formater la date
function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
}
