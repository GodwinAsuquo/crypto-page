// Get all the elements you want to show on scroll
const elements = document.querySelectorAll(".js-show-on-scroll"); 

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry=>{
        entry.target.classList.toggle('motion-safe:animate-fadeIn', entry.isIntersecting)
    })
}, {
    threshold: 0.5,
}
);

elements.forEach(element => {
element.classList.add('opacity-0'),
observer.observe(element)
})

