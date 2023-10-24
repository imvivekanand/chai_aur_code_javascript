//for loop

// for (let i = 0; i < 5; i++) {
//     const element = i;
//     console.table(element);
// }

// for(let i = 1; i<=10; i++){
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} X ${j} = ${i * j}`);
//     }
// }

for (let i = 0; i < 10; i++) {
    if(i === 5){
        console.log("5 Break");
        break; //Break breaks out of the loop.
    }

    console.log(i);
    
}

for (let i = 11; i < 20; i++) {
    if(i === 15){
        console.log("15 Continue");
        continue;
        //Continue skips the on check.
    }

    console.log(i);
    
}