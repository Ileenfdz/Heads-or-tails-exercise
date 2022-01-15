const parent = document.getElementById('main');

let result = document.createElement('h3');
result.innerHTML = 'x';

export function random(){
    // console.log("Connected to random");
    let num = Math.floor( Math.random() * 2 )

    // console.log(num == 1?'Cara':'Cruz');

    if(num == 1){
        result.innerHTML = 'Cara';
        parent.appendChild(result);
    }else{
        result.innerHTML = 'Cruz';
        parent.appendChild(result);
    }

}