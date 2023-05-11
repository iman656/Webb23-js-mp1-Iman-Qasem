


// fem liner med färg, Jag skapar  for loop 5 gånger
//varja gång öka stårlik fontSize= (i*10), 
// och byta färgi hsl(pHue+(i*6), i*10 +90 %, 80%)

for(let i=1; i<6; i++){

    let pHue = 100+i*10; //(i*10)+100//
    const p = document.createElement('p');
    document.body.append(p);
    p.style.fontSize = `${i*10}px`;
    p.style.color = `hsl(260,90%,70%)`; 
    p.innerText = `Rad ${i}`;
    p.style.backgroundColor = `hsl(${pHue+(i*6)}, ${(i*10)+90}%, ${90-(i*4)}%)`;
    p.style.textAlign = 'center';

}

// set main box (section) balck border, 400x800 px.
// jag skafar flex box, row ,space-evenly 
const section = document.createElement('section');
document.body.append(section);
section.style.display = 'flex';
section.style.flexDirection = 'row';
section.style.justifyContent = 'space-evenly';
section.style.alignItems = 'center';

section.style.border = '2px solid black';
section.style.height = '400px';
section.style.width = '800x';
section.style.margin = '100px';


//for loop 3 gång att skapa 3 box
// if condition att sort number j=0 -> från 0 till nio
// if j=1 -> sort numer från 9 till 0

for(let j=0; j<3; j++){

const div = document.createElement('div');
console.log(div)
document.body.append(div);
section.appendChild(div);
div.style.border ='15px solid hsl(259, 50%, 80%)';
div.style.width = "50px";
div.style.margin = '60px';
div.style.marginBottom = '120px';

if ( j === 0){
    for(let i=0; i<10; i++){

    const p = document.createElement('p');
    div.append(p);
    p.innerText = ` ${i}`;
    p.style.margin = '0';
    
    if (i%2 === 0 && i != 4  ){
        p.style.backgroundColor = "black"; 
        p.style.color = `hsl(0, 50%, 100%)`;
    }
    else if ( i == 4){
        p.style.backgroundColor = 'hsl(259, 50%, 80%)'; 
    }
    
    else{p.style.backgroundColor = `wight`;
    p.style.color = `hsl(0, 50%, 0%)`;
        }
    }
}
else if( j === 1) {for( let i=9; i>=0; i--)
    {
        const p = document.createElement('p');
        div.append(p);
        p.innerText = ` ${i}`;
         p.style.margin = '0px';
        p.style.textAlign = 'center';
    
        if (i%2 === 0 && i != 8  )
        {
            p.style.backgroundColor = "black"; 
            p.style.color = `hsl(0, 50%, 100%)`;
        }
        else if ( i == 8){
            p.style.backgroundColor = 'hsl(259, 50%, 80%)'; 
        }
        
        else{p.style.backgroundColor = `wight`;
        p.style.color = `hsl(0, 50%, 0%)`;
        }
    }
}
// här använder jag Array att skapa tregja box i main box
else if ( j === 2 ) { 
     const myArray = ['ett','två','tre','fyra','fem','sex','sju','åtta','nio','tio'];
    console.log(myArray,myArray.length); // jag vill se mitt Array i consile  
    const s = document.createElement('div');
    document.body.append(s);
    section.appendChild(s);
    div.append(s);

for(let i=0; i<10; i++){  
        const p = document.createElement('p');
        s.append(p);
        p.innerText = myArray[i];
        p.style.margin = '0';
        p.style.textAlign = 'right';
        p.style.width = "50px";

    
    if (i%2 === 0 && i != 5  ){
        p.style.backgroundColor = "black"; 
        p.style.color = `hsl(0, 50%, 100%)`;
    }
    else if ( i == 5){
        p.style.backgroundColor = 'hsl(259, 50%, 80%)'; 
        }
    
    else{p.style.backgroundColor = `wight`;
    p.style.color = `hsl(0, 50%, 0%)`;
        }
    }
}

}


 










