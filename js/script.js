// toogle class active
const containerMenu = document.querySelector(".container-menu");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  containerMenu.classList.toggle("active");
};

// klik diluar menu navbar hilang
const menu = document.querySelector('#menu')

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !containerMenu.contains(e.target)) {
    containerMenu.classList.remove('active')
    }
}
)