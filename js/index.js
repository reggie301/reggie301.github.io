const navToggle = document.querySelector ('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')
const navopen = document.querySelectorAll ('.nav-open')
const mediaQuery = window.matchMedia('(min-width: 700px)')



navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

const nav2 = document.querySelector(".nav2");

window.addEventListener("scroll", () => {
    scrollAmount = window.scrollY;
    if(scrollAmount > 200 && mediaQuery.matches) {
      nav2.classList.add("sho");
      document.body.classList.remove('nav-open');
    } else {
      nav2.classList.remove("sho");
    }
  });



// hidden stuff
const observer = new IntersectionObserver((entries) => {
    entries.forEach ((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }

    })

})

const hiddenElements = document.querySelectorAll ('.hidden');
hiddenElements.forEach((el) => observer.observe(el))

const hiddenElements2 = document.querySelectorAll ('.hidden2');
hiddenElements2.forEach((el) => observer.observe(el))

