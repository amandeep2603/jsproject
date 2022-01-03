const cards=document.querySelectorAll('.card')

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {        
        entry.target.classList.toggle('dark', entry.isIntersecting)
    })
},{
    threshold:0.8,
    rootMargin:'50px'
})

cards.forEach((card,index)=>{
    observer.observe(card)
})
