document.getElementById('last').textContent = document.lastModified

let options = { year: "numeric"};

document.getElementById("currentYear").textContent = new Date().toLocaleDateString('en-US', options);


const barnavbutton = document.querySelector('.barnav');
const mainnav = document.querySelector('.navigation')

barnavbutton.addEventListener('click', () =>
{mainnav.classList.toggle('responsive')}, false);

let show = new Date();

if(show.getDay() == 6 ){
    document.getElementById("pancakes").style.display = "block";
} else{
    document.getElementById("pancakes").style.display = "none";
}