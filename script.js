// document.addEventListener("DOMContentLoaded",init,false);
// function init(){
//     console.log('Hi');
// const brand=document.getElementById("brand");
// brand.addEventListener("click",()=>{
//     console.log('event triggered');
// });}






const canva=document.getElementById('canva');
canva.width=window.innerWidth;
canva.height=window.innerHeight;
const context=canva.getContext("2d");
const starlist=[];
let speed=5;
let num=3500;
const orig_num=3500;
const orig_speed=5;
if (window.matchMedia("(max-width: 640px)").matches) {
    //small screens
    num = 1800;
    speed=3;
}
window.addEventListener('resize', responsiveSpeed);
function responsiveSpeed()
{
    if (window.matchMedia("(max-width: 640px)").matches) {
        //small screens
        num = 1800;
        speed=3;
    }
    else
    {
        num=orig_num;
        speed=orig_speed;
    }
    //console.log(num);
}
//initial mouse cursor at the center so animation will start from the center
let mx=canva.width/2;
let my=canva.height/2;

function makeStar()
{
    let x=Math.random()*canva.width;
    let y=Math.random()*canva.height;
    //to ensure that star is atleast three units away from cursor position
    while(Math.hypot(x-mx,y-my)<3)
    {
        x=Math.random()*canva.width;
        y=Math.random()*canva.height;
    }
    return{
        x,
        y,
        //o is opacity
        o:Math.random(),
        //z-axis
        z: Math.random()*canva.width,
        //between 3 and 6 size
        size: Math.random()*3+3
    };
}

function fillStars()
{
    starlist.length=0;
    //creating star and pushing it in starlist
    for(i=0;i<num;i++)
    {
        starlist.push(makeStar());
    }
}

canva.addEventListener('mousemove',(event)=>{
    //console.log('event triggered');
    mx=event.clientX;
    my=event.clientY;
});
canva.addEventListener('touchmove', (event) => {
    //console.log('Touch move event triggered');
    
    // Accessing the first touch point
    if (event.touches.length > 0) {
        mx = event.touches[0].clientX;
        my = event.touches[0].clientY;
        //console.log(`Touch coordinates: (${mx}, ${my})`);
    }
    
    // Prevent default behavior (like scrolling) if necessary
    event.preventDefault();
});

function updateFrame()
{
    //clearing the frame before populating it again
    context.clearRect(0,0,canva.width, canva.height);
    for(let star of starlist)
    {
        //decreasing  z axis so that stars appear larger
        star.z-=speed;
        //if it reaches the closest then we can place it again at the end
        if(star.z<=0)
        {
            Object.assign(star,makeStar());
            //placing it at the end
            star.z=canva.width;
        }
        //scalind x,y and z according to z value
        const nx=(star.x-mx)*(canva.width/star.z)+mx;
        const ny=(star.y-my)*(canva.width/star.z)+my;
        const nsz=(1-star.z/canva.width)*star.size;
        context.fillStyle="white";
        context.fillRect(nx,ny,nsz,nsz);
    }
    requestAnimationFrame(updateFrame);
}
fillStars();
updateFrame();

const skills=['HTML','CSS','Javascript','React.js','Node.js','Git','C++','SQL'];
let ind=0;
function typeWrite() {
    const typew = document.getElementsByClassName('typewrite')[0];
    typew.innerText = '';
    const curr = skills[ind];
    let i = 0;
    //console.log(curr);
    function type() {
        if (i < curr.length) {
            //console.log(typew.innerText);
            typew.innerText += curr.charAt(i);
            i++;
            setTimeout(type, 100); // Delay between each character
        } else {
            setTimeout(() => {
                typew.innerText = '';
                ind = (ind + 1) % skills.length;
                typeWrite();
            }, 1000); // Pause before starting the next text
        }
    }
    type();
}

typeWrite();

/*const toggleBtn=document.querySelector('.toggle-button');
const dropdown=document.querySelector('.dropdown');
toggleBtn.addEventListener("click",()=>{
    //console.log("clicked");
dropdown.classList.toggle('-top-[100vh]');
    //console.log(dropdown.classList);
});

// const navDialog=document.getElementById('nav-dialog');
// console.log(navDialog);
// const oc=document.getElementsByClassName('openclose')[0];
// console.log(oc);
// oc.addEventListener('click',()=>
// {
//     console.log('toggle triggerd');
//     navDialog.classList.toggle('hidden');
// });*/

const navDialog=document.getElementById('nav-dialog');
//console.log(navDialog);
function handleClick()
{
    //console.log('toggle triggerd');
    navDialog.classList.toggle('hidden');
}

const dynamicBtn = document.getElementById('dynamicBtn');
const targetArray = [
    { content: 'Projects', dest: './Projects.html' },
    { content: 'Experience', dest: './Experience.html' },
    { content: 'Education', dest: './Education.html' }
];

let currInd = 0;
dynamicBtn.textContent = targetArray[currInd].content;
dynamicBtn.onclick = () => {
    window.location.href = targetArray[currInd].dest;
};

setInterval(() => {
    // Capture the current index to avoid closure issues
    currInd = (currInd + 1) % targetArray.length;
    const currentContent = targetArray[currInd].content;
    const currentDest = targetArray[currInd].dest;

    // Update the button's text and destination link
    dynamicBtn.textContent = currentContent;
    dynamicBtn.onclick = () => {
        window.location.href = currentDest;
    };

    // Move to the next index, looping back to the start if necessary
    
}, 3000);
