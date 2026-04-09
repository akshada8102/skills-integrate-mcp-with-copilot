document.addEventListener("DOMContentLoaded", () => {
  const activitiesList = document.getElementById("activities-list");
  const addActivityBtn = document.getElementById("add-activity-btn");

  // Function to fetch activities from API
  async function fetchActivities() {
    try {
      const response = await fetch("/activities");
      const activities = await response.json();

      // Clear loading message
      activitiesList.innerHTML = "";

      // Populate activities list
      Object.entries(activities).forEach(([name, details]) => {
        const activityCard = document.createElement("div");
        activityCard.className = "activity-card";

        const spotsLeft =
          details.max_participants - details.participants.length;

        // Create participants HTML
        const participantsHTML =
          details.participants.length > 0
            ? `<div class="participants-section">
              <h5>Participants:</h5>
              <ul class="participants-list">
                ${details.participants
                  .map(
                    (email) =>
                      `<li>${email}</li>`
                  )
                  .join("")}
              </ul>
            </div>`
            : `<p><em>No participants yet</em></p>`;

        activityCard.innerHTML = `
          <h4>${name}</h4>
          <p>${details.description}</p>
          <p><strong>Schedule:</strong> ${details.schedule}</p>
          <p><strong>Max Participants:</strong> ${details.max_participants}</p>
          <p><strong>Current Participants:</strong> ${details.participants.length}</p>
          <div class="participants-container">
            ${participantsHTML}
          </div>
          <button class="edit-btn" data-activity="${name}">Edit</button>
          <button class="delete-btn" data-activity="${name}">Delete</button>
        `;

        activitiesList.appendChild(activityCard);
      });

      // Add event listeners
      document.querySelectorAll(".edit-btn").forEach((button) => {
        button.addEventListener("click", handleEdit);
      });
      document.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", handleDelete);
      });
    } catch (error) {
      activitiesList.innerHTML =
        "<p>Failed to load activities. Please try again later.</p>";
      console.error("Error fetching activities:", error);
    }
  }

  // Placeholder for edit
  function handleEdit(event) {
    const activity = event.target.getAttribute("data-activity");
    alert(`Edit ${activity} - Feature not implemented yet`);
  }

  // Placeholder for delete
  function handleDelete(event) {
    const activity = event.target.getAttribute("data-activity");
    if (confirm(`Delete ${activity}?`)) {
      alert(`Delete ${activity} - Feature not implemented yet`);
    }
  }

  // Placeholder for add
  addActivityBtn.addEventListener("click", () => {
    alert("Add New Activity - Feature not implemented yet");
  });

  // Initialize app
  fetchActivities();
});