const board = document.querySelector('.board');

r = Math.floor(Math.random()*256);

g = Math.floor(Math.random()*256);

b = Math.floor(Math.random()*256);

// for(let i = 0; i < 500; i++) {
//     let block = document.createElement('div');

//     block.classList.add('box');
    
//     board.appendChild(block);


//     block.addEventListener('mouseover', () => {
//         block.style.background ='red';
//     })

//     block.addEventListener('mouseleave', () => {
//         block.style.background = '#1d1515';
//     })
// }

for(let i = 0; i < 500; i++) {
    let block = document.createElement('div');

    block.classList.add('box');
    
    board.appendChild(block);

    block.addEventListener('mouseover', () =>{
        block.style.background = "#" + (Math.random() * 0xFFFFFF << 0).toString(16);
    })

    block.addEventListener('mouseleave', () => {
        block.style.background = '#1d1515';
    })
}