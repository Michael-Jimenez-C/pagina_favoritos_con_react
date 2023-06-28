import { Component } from 'react'
import styles from './page.module.css'

let IFavs=[
    ["https://i.ytimg.com/vi/W2MpGCL8-9o/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3kGUdhrVUVPeiSPM_CbYkWZv_ytYw",'Beggin','aaaa','https://www.youtube.com/watch?v=W2MpGCL8-9o'],
    ["https://i.ytimg.com/vi/wMsazR6Tnf8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDvoF-uL7bx7vO_l7SdvNXBJjjDqQ","I Love Rock 'N Roll","bbbb","https://www.youtube.com/watch?v=wMsazR6Tnf8"],
    ["https://i.ytimg.com/vi/VFwmKL5OL-Q/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDv7dnMLyYAT85-GZY9hPOZ6gWW9w",'Bloody Mary','cccc','https://www.youtube.com/watch?v=VFwmKL5OL-Q'],
    ['https://i.ytimg.com/vi/dFp_b5DPIIo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFZIfOVCl1mA7yPSfOf1AQA9x2iA','Señorita','dddd','https://www.youtube.com/watch?v=dFp_b5DPIIo'],
    ['https://i.ytimg.com/vi/dT2owtxkU8k/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD9T_GnkUEJtAlXDJfGae7bPM5GMQ',"There's Nothing Holdin' Me Back",'eeee','https://www.youtube.com/watch?v=dT2owtxkU8k'],
    ['https://lh3.googleusercontent.com/dUxy0YAYYSac_aGTXmwdbPhv1dI0C-Z04ScVVVaN4rW14ADoMp0IkAdbYSVxDDIFRViBFStKgy7XGtRR=w60-h60-l90-rj',"Heart Ahead",'ffff', 'https://www.youtube.com/watch?v=-wyfXbwSelc&list=RDAMVM-wyfXbwSelc'],
    ['https://i.ytimg.com/vi/KQ6zr6kCPj8/sddefault.jpg?sqp=-oaymwEWCJADEOEBIAQqCghqEJQEGHgg6AJIWg&rs=AMzJL3l6mlE63vSRhlwqnY2EjEpEy8F0Fw','Party Rock anthem','gggg','https://youtube.com/watch?v=KQ6zr6kCPj8'],
    ['https://lh3.googleusercontent.com/c1Veen8vcnsnqR5lvvh7zkmMIHP6DikluDN349oFlUQE-hJhuNVeWdzfQNgyxU0bhh9i64D9VCG65_Xq=w60-h60-l90-rj','Le Bien qui fait mal','hhhh','https://music.youtube.com/watch?v=s1L2f5BIPGg']]
  
  function popUp(titulo:string,desc:string,url:string){
    return(
        <div className={styles.popup}>
            <div className={styles.xButton}>
                <div className={styles.PopUpContenido}>
                    <h1>{titulo}</h1>
                    {desc}
                    <a href={url}>{"Escuchar en youtube"}</a>
                </div>
            </div>
        </div>
    )
  }
  
  function descripcion(titulo:string,desc:string){
    return(<div className={styles.favdesc}>
        <h4>{titulo}</h4>
        <br/>
        <h5>{desc}</h5>
    </div>)
  }
  
  function tarjeta(imagen:string,titulo:string,desc:string){
    return(
    <div className={styles.favorito}>
    <img src={imagen}/>
    <h4>{titulo}</h4>
    {descripcion(titulo,desc)}
    </div>
    )
  }

export default function Home() {
  let tarjetas=IFavs.map(fav=>
    <li>{tarjeta(fav[0],fav[1],fav[2])}</li>
  )
  
  
  return (
    <main>
      <header id={styles.header}><h1>Favoritos</h1></header>
      <div>
        <ol className={styles.cuadricula}>
          {tarjetas}
        </ol>
      </div>
      <div id={styles.popUpContainer}>

      </div>
    </main>
  )
}
