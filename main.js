// Responsividade do menu Hamburger
document.querySelector(".menu-active").addEventListener("click", () => {
  const navigation = document.querySelector(".navbar-navigation");
  navigation.classList.toggle("response-active");
});
