import React from "react";
import ReactPlayer from 'react-player/youtube'
import "../Css/Home.css"
import { Link } from "react-router-dom";


const Home=()=>{
    return(
        <body>
            <header className="header">
                <div className="header-content container">
                    <div className="header-txt">
                        <h1>Adquiere lo mejor de lo mejor</h1>
                        <p>Somos una empresa dedicada a la venta de videojuegos. Tenemos un gran catalogo, variado para todo tipo de consolas (nuevas generaciones), ademas de tener gran variedad de juegos para pc de escritorio.       
                        </p>
                        <Link to="/Registrate" className='btn-1'>Información</Link>
                    </div> 
            
        
                    <div className="header-img">
                        <Link to="/" >
                            <i className="red fa-brands fa-facebook" />   
                        </Link>
                        <Link to="/https://www.instagram.com/npm" >
                            <i className="red fa-brands fa-instagram" />    
                        </Link>
                        <Link to="/" >
                            <i className="red fa-brands fa-twitter" />    
                        </Link>
                        <Link to="/" >
                            <i className="red fa-brands fa-youtube" />     
                        </Link>
                    </div> 
                </div>
            </header>  

            <main className="tours">
                <h2>Algunos productos</h2>
                <p>Mira algunos de nuestros productos mas famosos y vendidos </p>
                <div className="tour-content">
                    <div className="tour-1">
                        <div className="tour-txt">
                            <h3>Elden Ring </h3>
                        </div>
                    </div>
                    <div className="tour-2">
                        <div className="tour-txt">
                            <h3>God of War</h3>
                        </div>
                    </div>
                    <div className="tour-3">
                        <div className="tour-txt">
                            <h3>GtaV</h3>
                        </div>
                    </div>
                    <div className="tour-4">
                        <div className="tour-txt">
                            <h3>The last of us</h3>
                        </div>
                    </div>
                </div>
            </main>    

            <section className="video">
                <div className="video-content container">
                    <div className="video-1">
                        <h2>¡Explora este mundo de videojuegos!</h2>
                        <p>Ven y mira nuestro gran catalogo, tenemos todo tipo de videojuegos, ya sea para consola o para tu pc.
                        </p>
                        <Link to="/" className='btn-1'>Información</Link>
                    </div>
                    <div className="video-2">

                        <ReactPlayer className="v1" url='https://www.youtube.com/watch?v=iD1rJe6TxR8&ab_channel=LastPlayerxD' controls />{/*preguntarle al prfeo como se pone video, que uno mismo descarga*/}

                
                        <ReactPlayer className="v2" url='https://www.youtube.com/watch?v=Q-Digg8_cnc&ab_channel=Guisterix' controls />{/*preguntarle al prfeo como se pone video, que uno mismo descarga*/}

                    </div> 
                </div>

            </section>    

            <footer>
                <div className="footer-bg ">
                    <h2>¡Haz tu pedido!</h2>
                    <form>
                        <div className="campo-1">
                            <input className="campo" type="text" placeholder="Nombre"></input>
                            <input className="campo"type="number" placeholder="Telefono"></input>
                        </div>
                        <div className="campo-1">
                            <input className="campo" type="text" placeholder="Direccion"></input>
                            <input className="campo" type="email" placeholder="Correo"></input>
                        </div>
                            <textarea className="campoG" cols="30" rows="10" placeholder="Texto"></textarea>
                        
                    </form>
                    <input type="submit" className="btn-4" value="Enviar"></input>
                </div>
                <div className="footer-txt">
                    <p>Derechos reservados -2023</p>
                </div>
            </footer>
        </body>
    )
}

export default Home;