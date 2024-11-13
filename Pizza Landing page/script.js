let food1 = document.getElementById('food1');
let food2 = document.getElementById('food2');
let food = document.getElementById('food');

food1.addEventListener('click', ()=>{
    food.style.backgroundImage="url('food1.jpg')";
})

food2.addEventListener('click', ()=>{
    food.style.backgroundImage="url('food2.jpg')";
})
