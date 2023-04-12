import React from "react";
import "../Css/Contacto.css";
import img1 from "../Imagenes/pixel3.jpg";
import { useForm } from 'react-hook-form';

export default function Contacto() {

  const { register, handleSubmit,formState: { errors } } = useForm()
  const onSubmit = data => console.log(data);
  
return (
  <section>
    <body>
      <div className="register">
          <div className="col-1">
              <h2>Contáctanos</h2>
              <span>¡Y adquiere, nuestros servicios!</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='Nombre' />
                    <input type="text" {...register("password")} placeholder='Apellido' />
                    <input type="text" {...register("confirmpwd")} placeholder='Correo electronico' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Numero de teléfono' />
                    {errors.mobile?.type === "required" && "El numero de telefono, es requerido"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn4'>Enviar</button>
                </form>
          </div>
            <div className="col-2">
            <img src={img1} alt="" />
          </div>
      </div>
      </body>
  </section>
)
}

