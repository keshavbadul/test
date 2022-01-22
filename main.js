//Intersection observers
const nav_items = document.querySelectorAll('.nav-item')
const sections = document.querySelectorAll('.kb-section')

const setObserver = (indicator, options, section) => {
    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                indicator.classList.add('current-section')
            }else {
                indicator.classList.remove('current-section')
            }
        })
    }, options)
    sectionObserver.observe(section)
}

for(let i = 0; i < nav_items.length; i++) {
    if(i == 0) {
        setObserver(nav_items[i], {rootMargin: "-50% 0px 0px 0px"}, sections[i])
    }else if(i == nav_items.length-1) {
        setObserver(nav_items[i], {rootMargin: "0px 0px -50% 0px"}, sections[i])
    }else {
        setObserver(nav_items[i], {rootMargin: "-50% 0px -50% 0px"}, sections[i])
    }
}
//-------------------------------------------------------------------------------------

//Mobile navigation
const btn = document.querySelector('.hamburger')
const nav = document.querySelector('.main-nav')

btn.addEventListener("click", () => {
  btn.querySelectorAll("span").forEach((span) => span.classList.toggle("open"))
  nav.classList.toggle('open')
});

nav_items.forEach(nav_item => {
    nav_item.addEventListener('click', () => {
        btn.querySelectorAll("span").forEach((span) => span.classList.toggle("open"))
        nav.classList.toggle('open')
    })
})
//-------------------------------------------------------------------------------------