// Function to toggle between light and dark mode
function toggleMode() {
    const body = document.body;
    const isDarkMode = body.getAttribute("data-theme") === "dark";
  
    // Toggle the data-theme attribute and update styles
    if (isDarkMode) {
      body.removeAttribute("data-theme");
    } else {
      body.setAttribute("data-theme", "dark");
    }
  }
  
  // Add event listener to the mode toggle button
  const modeToggleBtn = document.getElementById("mode-toggle");
  modeToggleBtn.addEventListener("click", toggleMode);

  // Sample data
const leagueData = [
    { team: 'JS King', matchesPlayed: 10, wins: 7, losses: 3 },
    { team: 'Web Warrior', matchesPlayed: 12, wins: 9, losses: 3 },
    { team: 'JS Punk', matchesPlayed: 11, wins: 6, losses: 5 },
    { team: 'Hyper Web', matchesPlayed: 10, wins: 4, losses: 6 },
    { team: 'JScorpian', matchesPlayed: 9, wins: 3, losses: 6 },
    { team: 'Jaguar Scriptor', matchesPlayed: 11, wins: 8, losses: 3 },
    { team: 'The Binary Force', matchesPlayed: 12, wins: 10, losses: 2 },
    // Add more data if needed
  ];
  
  // Variables for pagination
  const rowsPerPage = 5;
  let currentPage = 1;
  
  // Function to generate table rows based on current page
  function generateTableRows() {
    const tableBody = document.querySelector('#league-table tbody');
    tableBody.innerHTML = '';
  
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
  
    for (let i = startIndex; i < endIndex; i++) {
      if (i >= leagueData.length) break;
  
      const { team, matchesPlayed, wins, losses } = leagueData[i];
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${team}</td>
        <td>${matchesPlayed}</td>
        <td>${wins}</td>
        <td>${losses}</td>
      `;
  
      tableBody.appendChild(row);
    }
  }
  
  // Function to generate pagination links
  function generatePaginationLinks() {
    const pagination = document.querySelector('#pagination');
    pagination.innerHTML = '';
  
    const numPages = Math.ceil(leagueData.length / rowsPerPage);
  
    for (let i = 1; i <= numPages; i++) {
      const link = document.createElement('li');
      link.classList.add('page-item');
      if (i === currentPage) link.classList.add('active');
      link.innerHTML = `<a class="page-link" href="#">${i}</a>`;
      link.addEventListener('click', () => {
        currentPage = i;
        generateTableRows();
        generatePaginationLinks();
      });
  
      pagination.appendChild(link);
    }
  }
  
  // Initial table and pagination generation
  generateTableRows();
  generatePaginationLinks();

  // Get the form element
const form = document.querySelector('#myForm');

// Submit event listener
form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (form.checkValidity()) {
    // Perform form submission or validation success actions here
    console.log('Form submitted successfully');
  } else {
    event.stopPropagation();
  }
  form.classList.add('was-validated');
});

// Function to create an alert
function showAlert(type, message) {
    const alertContainer = document.querySelector('#alertContainer');
    
    // Create the alert element
    const alert = document.createElement('div');
    alert.classList.add('alert', `alert-${type}`);
    alert.setAttribute('role', 'alert');
    alert.innerHTML = message;
  
    // Add the alert to the container
    alertContainer.appendChild(alert);
  
    // Automatically remove the alert after a certain duration (e.g., 5 seconds)
    setTimeout(() => {
      alert.remove();
    }, 5000);
  }
  
  // Get the button element
  const showAlertBtn = document.querySelector('#showAlertBtn');
  
  // Button click event listener
  showAlertBtn.addEventListener('click', function() {
    showAlert('success', 'Bravo! you are registerd.');
  });
// Get the canvas element
const sportsChartCanvas = document.querySelector('#sportsChart');

// Create the chart
const sportsChart = new Chart(sportsChartCanvas, {
  type: 'bar',
  data: {
    labels: ['JS King', 'Web Warrior', 'JS Punk', 'Hyper Web', 'JScorpian','Jaguar Scriptor','The Binary Force'],
    datasets: [{
      label: 'Wins',
      data: [7, 9, 6, 4, 3, 8, 10],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
  