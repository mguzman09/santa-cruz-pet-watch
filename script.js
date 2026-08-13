const petReports = [
  {
    "id": "lf001",
    "status": "Lost",
    "name": "Rumba",
    "species": "Dog",
    "breed": "Dachshund",
    "area": "Urubo",
    "date": "2026-08-08",
    "image": "https://placedog.net/500/500?id=12",
    "contact": "777-12345",
    "description": "Female dachshund, very friendly but might be scared. Wearing a red collar."
  },
  {
    "id": "lf002",
    "status": "Found",
    "name": "Unknown",
    "species": "Cat",
    "breed": "Domestic Shorthair",
    "area": "Equipetrol",
    "date": "2026-08-09",
    "image": "https://placekitten.com/500/500",
    "contact": "777-98765",
    "description": "Found hiding under a car near the Ventura Mall. Very vocal, no collar."
  },
  {
    "id": "lf003",
    "status": "Lost",
    "name": "Max",
    "species": "Dog",
    "breed": "Golden Retriever",
    "area": "Sirari",
    "date": "2026-08-05",
    "image": "https://placedog.net/500/500?id=43",
    "contact": "777-55555",
    "description": "Large male Golden, microchipped. Wandered off during the storm."
  }
];

const feed = document.querySelector('#pet-feed');
const statusFilter = document.querySelector('#status-filter');
const areaFilter = document.querySelector('#area-filter');
const clearFilters = document.querySelector('#clear-filters');
const resultsCount = document.querySelector('#results-count');
const emptyState = document.querySelector('#empty-state');
const petForm = document.querySelector('#pet-form');
const formMessage = document.querySelector('#form-message');

function formatDate(dateString) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(`${dateString}T00:00:00`));
}

function renderPets(reports) {
  feed.innerHTML = reports.map((pet) => {
    const statusClass = pet.status.toLowerCase() === 'lost' ? 'status-lost' : 'status-found';

    return `
      <article class="pet-card">
        <img src="${pet.image}" alt="${pet.status} pet report for ${pet.name} - ${pet.breed}" loading="lazy">
        <div class="pet-card-content">
          <span class="status-badge ${statusClass}">${pet.status}</span>
          <h3 class="pet-name">${pet.name}</h3>
          <p class="pet-meta">${pet.species} • ${pet.breed}</p>
          <p class="pet-description">${pet.description}</p>
          <div class="pet-details">
            <p><strong>Area:</strong> ${pet.area}</p>
            <p><strong>Reported:</strong> ${formatDate(pet.date)}</p>
            <p><strong>Contact:</strong> ${pet.contact}</p>
          </div>
        </div>
      </article>
    `;
  }).join('');

  resultsCount.textContent = `${reports.length} ${reports.length === 1 ? 'report' : 'reports'} shown`;
  emptyState.hidden = reports.length !== 0;
}

function applyFilters() {
  const selectedStatus = statusFilter.value;
  const selectedArea = areaFilter.value;

  const filteredReports = petReports.filter((pet) => {
    const matchesStatus = selectedStatus === 'All' || pet.status === selectedStatus;
    const matchesArea = selectedArea === 'All' || pet.area === selectedArea;
    return matchesStatus && matchesArea;
  });

  renderPets(filteredReports);
}

statusFilter.addEventListener('change', applyFilters);
areaFilter.addEventListener('change', applyFilters);

clearFilters.addEventListener('click', () => {
  statusFilter.value = 'All';
  areaFilter.value = 'All';
  applyFilters();
});

petForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!petForm.checkValidity()) {
    petForm.reportValidity();
    return;
  }

  formMessage.textContent = 'Report form validated successfully. A backend is not connected in this version.';
  petForm.reset();
});

renderPets(petReports);
