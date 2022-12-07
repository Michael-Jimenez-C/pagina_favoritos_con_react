const e = React.createElement;
const root = ReactDOM.createRoot(
    document.getElementById('favs')
);

function desc(titulo, desc){
    let c=e("div",{className:"favdesc"},[
        e('h4',{},titulo),
        e('br',{},null),
        e('h5',{},desc)
    ]);
    return c;
}

function boton(imagen, titulo, descripcion){
    let b=e('div',{className:"favorito"},[
        e('img',{'src':imagen},null),
        e('h4',{},titulo),
        desc(titulo,descripcion)
    ]);
    return b;
}


function cuad(botones){
    let li=[];
    for(let i of botones){
        li.push(e('li',{},i));
    }
    let ul= e('ol',{className:"cuadricula"}, li);
    return ul;
}


/*inicializacion de la página*/
let rutas=["../multimedia/f1.jpg","../multimedia/1.jpg","../multimedia/f1.jpg","../multimedia/1.jpg","../multimedia/f1.jpg"]
let titulos=['Meme1345678765434567765432345676543','Meme2','Meme3','Meme4','Meme5']
let b=[]
for(let i in rutas){
    b.push(boton(rutas[i],titulos[i],"na pá"))
}
root.render(cuad(b));
//const element = e('h1',{},"Prueba");
//const s=e('p',{},"asdasdas")
//root.render([element,s]);