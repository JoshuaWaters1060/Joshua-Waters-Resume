document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelectorAll("nav a").forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelectorAll("nav a").forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  
    if (window.location.pathname === link.getAttribute("href")) {
      link.classList.add("active");
    }
  });
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelectorAll("nav a").forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  
    if (window.location.pathname === link.getAttribute("href")) {
      link.classList.add("active");
    }
  });