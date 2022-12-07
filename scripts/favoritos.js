const e = React.createElement;
const rootd=document.getElementById('favs');
const root = ReactDOM.createRoot(rootd);

/*
function borrarEmergente(){
    s=document.querySelector(".popupfondo");
    if(s!=null){
        s.remove();
    }
}

function popup(){
    let c=e('div',{className:"popupfondo"},
        e('div',{className:'popup'},[e('div',{className:"xButton",'onClick':borrarEmergente},'x')]));
    return c;
}*/

function desc(titulo, desc,url){
    let c=e("div",{className:"favdesc"},[
        e('h4',{},titulo),
        e('br',{},null),
        e('h5',{},desc)
    ])
    let w=e("a",{'href':url},c);
    return w;
}

function boton(imagen, titulo, descripcion,url){
    let b=e('div',{className:"favorito"},[
        e('img',{'src':imagen},null),
        e('h4',{},titulo),
        desc(titulo,descripcion,url)
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
    ["https://i.ytimg.com/vi/W2MpGCL8-9o/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kGUdhrVUVPeiSPM_CbYkWZv_ytYw",'Begging','Esta cancion es de las GOD','https://www.youtube.com/watch?v=W2MpGCL8-9o']]
let b=[]
for(let i of IFavs){
    b.push(boton(i[0],i[1],i[2],i[3]));
}

s=cuad(b);

let cont=e('div',{},s);
root.render(cont);