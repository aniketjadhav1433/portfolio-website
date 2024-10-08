let float = document.querySelectorAll('.float-nav a')

let remove = ()=>{
    float.forEach((nav)=>{
        nav.classList.remove("active")
    })
}

float.forEach((nav)=>{
    nav.addEventListener("click",()=>{
        remove()
        nav.classList.add("active")
    })
})



// =========================== adding js to experience page =============================

let buttons = document.querySelectorAll(".exp-left button")



let removeBtn = ()=>{
    buttons.forEach((butt)=>{
        butt.classList.remove("butt-act")
    })
}

buttons.forEach((butt)=>{
    butt.addEventListener("click",()=>{
        removeBtn()
        butt.classList.add("butt-act")
    })
})


let expButt = document.querySelector(".exp-butt")
let eduButt = document.querySelector(".edu-butt")
let skillButt = document.querySelector(".skill-butt")
let abtButt = document.querySelector(".abt-butt")

let rightDiv = document.querySelector(".exp-right")

let expContent = `
    <h2 class="primary center">experience</h2>
            <p class= "center" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero?</p>

            <div class="cards">

                <div class="box">
                    <h3>2018-2020</h3>
                    <h2>intern</h2>
                    <p>mobile company</p>
                </div>
                <div class="box">
                    <h3>2018-2020</h3>
                    <h2>intern</h2>
                    <p>mobile company</p>
                </div>
                <div class="box">
                    <h3>2018-2020</h3>
                    <h2>intern</h2>
                    <p>mobile company</p>
                </div>
                <div class="box">
                    <h3>2018-2020</h3>
                    <h2>intern</h2>
                    <p>mobile company</p>
                </div>
            </div>
`

rightDiv.innerHTML = expContent

expButt.addEventListener("click",()=>{
    rightDiv.innerHTML = expContent
})


let eduContent = `
  <h2 class="primary center">education</h2>
            <p class= "center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero?</p>

            <div class="cards">

                <div class="box">
                    <h3>12th </h3>
                    <h2>80%</h2>
                    <p>Lorem ipsum, dolor sit aadipisicing elit. Dolore, corporis!</p>
                </div>
                <div class="box">
                    <h3>10th</h3>
                    <h2>80%</h2>
                    <p>Lorem ipsum dolor sit amet  molestiae ex obcaecati.</p>
                </div>
                <div class="box">
                    <h3>graduation</h3>
                    <h2>80%</h2>
                    <p>Lorem ipsum dolor sit amet consicing elit.</p>
                </div>
                <div class="box">
                    <h3>backend</h3>
                    <h2>all backend</h2>
                    <p>Lorem ipsum dolor sit amet consectipisicing elit. Id.</p>
                </div>
            </div>
`

eduButt.addEventListener("click",()=>{
    rightDiv.innerHTML = eduContent
})

let skillContent = `
     <h2 class="primary center">skills</h2>
            <p class= "center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero?</p>

            <div class="card-img">

                <div class="box-img">
                    <img src="assets/mongo.jpg" alt="">
                </div>

                <div class="box-img">
                    <img src="assets/react.webp" alt="">
                </div>

                <div class="box-img">
                    <img src="assets/next.png" alt="">
                </div>

                <div class="box-img">
                    <img src="assets/node.png" alt="">
                </div>

                <div class="box-img">
                    <img src="assets/jwt.png" alt="">
                </div>

                <div class="box-img">
                    <img src="assets/prisma.png" alt="">
                </div>

                <div class="box-img">
                    <img src="assets/tailwind.png" alt="">
                </div>

                <div class="box-img">
                    <img src="assets/websocket.png" alt="">
                </div>
                
            </div>
`

skillButt.addEventListener("click",()=>{
    rightDiv.innerHTML = skillContent
})

let abtContent = `
     <h2 class="primary center">about me</h2>
            <p class= "center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero?</p>

            <div class="abt-info">
                <img src="assets/avatar2.jpg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
`

abtButt.addEventListener("click",()=>{
    rightDiv.innerHTML = abtContent
})




// ================================== faq ===========================

let faqBox = document.querySelectorAll(".box1")

faqBox.forEach((boxes=>{

    boxes.addEventListener('click',()=>{
        let ans = boxes.querySelector(".ans")
        let icon = boxes.querySelector("i")
        
        icon.classList.toggle("rotate")
        ans.classList.toggle("show")
    })

}))


// ================================== theme ===========================

let moon = document.querySelector("#moon")
let body = document.querySelector("body")
moon.addEventListener("click",()=>{
    if (moon.classList.contains("fa-moon")) {
        moon.classList.remove("fa-moon")
        moon.classList.add("fa-sun")
    }else{
        moon.classList.add("fa-moon")
    }

    body.classList.toggle("dark-theme")
    
})




// ================================== js for project show ===========================


let proCards  = document.querySelectorAll(".projects-card .card1")
let all = document.querySelector(".all")
let proButton = document.querySelectorAll('menu button')

let removeProBtn = ()=>{
    proButton.forEach((btns)=>{
        btns.classList.remove("pro-act")
    })
}

proButton.forEach((btns)=>{
    btns.addEventListener("click",()=>{
        removeProBtn()
        btns.classList.add("pro-act")
    })
})

proButton.forEach((butts)=>{
    let value = butts.textContent.toLocaleLowerCase()

   

    butts.addEventListener("click",()=>{


        proCards.forEach((cards)=>{
            var h3 = cards.querySelector("h3").textContent.toLocaleLowerCase()

            all.addEventListener("click",()=>{
                cards.style.display = "flex"
            })
            
            if (h3.indexOf(value) != -1){
                cards.style.display = "flex"
            }else{
                cards.style.display = "none"
            }
        })
    

        
    })

    
})

// ================================== gsap ===========================
 
let tl = gsap.timeline()

tl.from(".info img",{
    y:200,
    duration:1,
    opacity:0,
    scrub:1
})
tl.from(".info h3",{
    y:100,
    duration:0.5,
    scrub:1,
    opacity:0
})
tl.from(".info h2",{
    y:100,
    duration:0.5,
    scrub:1,
    opacity:0
})
tl.from(".info p",{
    y:100,
    duration:0.5,
    opacity:0,
    scrub:1
})



gsap.from(".exp-left button",{
    x:-100,
    opacity:0,
    duration:2,
    stagger:0.4,
    scrollTrigger:{
        trigger:".exp-left",
        scroll:"body",
        start:"top 10%",
        end:"top 40%",
        scrub:2
    }
})

gsap.from(".exp-right .cards",{
    x:-100,
    duration:2,
    scale:0,
    opacity:0,
    scrollTrigger:{
        trigger:".exp-right",
        scroll:"body",
        start:"top 10%",
        end:"top 30%",
        scrub:2
    }
})