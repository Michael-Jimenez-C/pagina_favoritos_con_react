const e = React.createElement;
const root = ReactDOM.createRoot(
    document.getElementById('favs')
);

function boton(imagen, titulo, descripcion){
    let b=e('div',{className:"favorito"},
        [e('img',{'src':imagen},null),
        e('h4',{},titulo)]
    );
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

let b1=boton("../multimedia/f1.jpg",'Meme1',"Na pá");
let b2=boton("../multimedia/f1.jpg",'Meme2',"Na pá");
root.render(cuad([b1,b2]));
//const element = e('h1',{},"Prueba");
//const s=e('p',{},"asdasdas")
//root.render([element,s]);