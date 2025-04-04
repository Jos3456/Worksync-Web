// Check if user is logged in
async function checkAuth() {
    const res = await fetch("/api/check-auth", { credentials: "include" });
    if (!res.ok) window.location.href = "/login";
  }
  
  // Logout function
  function logout() {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
  }
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js")
        .then(reg => console.log("Service Worker registered"))
        .catch(err => console.log("Registration failed: ", err));
    });
  }
  // In your auth.js or main JS file
function initializeData() {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
  }
  if (!localStorage.getItem('attendanceLogs')) {
    localStorage.setItem('attendanceLogs', JSON.stringify([]));
  }
}
initializeData();

// For any delete actions (e.g., logout button)
document.getElementById('logoutBtn').addEventListener('click', (e) => {
  if (!confirm('Are you sure you want to log out?')) {
    e.preventDefault();
  }
});
// In admin.js or protected script
function resetAllData() {
  const adminPassword = prompt("Enter admin password to reset ALL data:");
  if (adminPassword === "worksyncadmin12025") {
    localStorage.clear();
    alert("All data has been reset");
    location.reload();
  } else {
    alert("Incorrect password");
  }
}