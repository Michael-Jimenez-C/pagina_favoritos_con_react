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
let IFavs=[
    ["https://i.ytimg.com/vi/W2MpGCL8-9o/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kGUdhrVUVPeiSPM_CbYkWZv_ytYw",'Begging','Esta cancion es de las GOD']]
let b=[]
for(let i of IFavs){
    b.push(boton(i[0],i[1],i[2]))
}
root.render(cuad(b));