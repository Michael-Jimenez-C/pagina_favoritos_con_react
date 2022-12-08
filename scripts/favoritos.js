const e = React.createElement;
const rootd=document.getElementById('favs');
const root = ReactDOM.createRoot(rootd);

/*todo esto funciona pero no he podido hacer que aparezca al pulsar la caratula de la cancion
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
/*Orden: Imagen, titulo, descripccion, link*/
let IFavs=[
    ["https://i.ytimg.com/vi/W2MpGCL8-9o/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kGUdhrVUVPeiSPM_CbYkWZv_ytYw",'Begging','Esta cancion es de las GOD','https://www.youtube.com/watch?v=W2MpGCL8-9o'],
    ["https://i.ytimg.com/vi/wMsazR6Tnf8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDvoF-uL7bx7vO_l7SdvNXBJjjDqQ","I Love Rock 'N Roll","Simplemente perfecta","https://www.youtube.com/watch?v=wMsazR6Tnf8"],
    ["https://i.ytimg.com/vi/VFwmKL5OL-Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDv7dnMLyYAT85-GZY9hPOZ6gWW9w",'Bloody Mary','','https://www.youtube.com/watch?v=VFwmKL5OL-Q'],
    ['https://i.ytimg.com/vi/dFp_b5DPIIo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFZIfOVCl1mA7yPSfOf1AQA9x2iA','Señorita','Un clasico de pandemia','https://www.youtube.com/watch?v=dFp_b5DPIIo'],
    ['https://i.ytimg.com/vi/dT2owtxkU8k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9T_GnkUEJtAlXDJfGae7bPM5GMQ',"There's Nothing Holdin' Me Back",'Para los chicos malos','https://www.youtube.com/watch?v=dT2owtxkU8k'],
    ['https://lh3.googleusercontent.com/dUxy0YAYYSac_aGTXmwdbPhv1dI0C-Z04ScVVVaN4rW14ADoMp0IkAdbYSVxDDIFRViBFStKgy7XGtRR=w60-h60-l90-rj',"Heart Ahead",'', 'https://www.youtube.com/watch?v=-wyfXbwSelc&list=RDAMVM-wyfXbwSelc'],
    ['https://i.ytimg.com/vi/KQ6zr6kCPj8/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3l6mlE63vSRhlwqnY2EjEpEy8F0Fw','Party Rock anthem','','https://youtube.com/watch?v=KQ6zr6kCPj8'],
    ['https://lh3.googleusercontent.com/c1Veen8vcnsnqR5lvvh7zkmMIHP6DikluDN349oFlUQE-hJhuNVeWdzfQNgyxU0bhh9i64D9VCG65_Xq=w60-h60-l90-rj','Le Bien qui fait mal','No se de que trata la letra, pero suena bien, y eso es más que suficiente','https://music.youtube.com/watch?v=s1L2f5BIPGg']]
let b=[]
for(let i of IFavs){
    b.push(boton(i[0],i[1],i[2],i[3]));
}

s=cuad(b);

let cont=e('div',{},s);
root.render(cont);