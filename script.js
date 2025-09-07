function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const topbar = document.querySelector(".topbar");
  const mainContent = document.querySelector(".main-content");

  if (sidebar.style.left === "-220px") {
    sidebar.style.left = "0";
    topbar.style.left = "220px";
    mainContent.style.marginLeft = "220px";
  } else {
    sidebar.style.left = "-220px";
    topbar.style.left = "0";
    mainContent.style.marginLeft = "0";
  }
}
