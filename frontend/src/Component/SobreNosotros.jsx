import axios from "axios"
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../Css/SobreNosotros.css"
import Pagination from 'rc-pagination';

export const SobreNosotros = () => {
    const [clientes, setClientes] = useState([])
    const [documento_usuario, setDocumento_usuario] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [teléfono, setTeléfono] = useState("")
    const [dirección, setDirección] = useState("")
    const [correoElectrónico, setCorreoElectrónico] = useState("")
    const [númeroAuxiliar, setNúmeroAuxiliar] = useState("")
    const [fechaNacimiento, setFechaNacimiento] = useState("")
    const [edit, setEdit] = useState(false) /*para poder editar registros */

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState("");

    useEffect(() => {
        getData(page)
    }, [page]);

    const cleanData = () => {
        setDocumento_usuario("")
        setNombre("")
        setApellido("")
        setTeléfono("")
        setDirección("")
        setCorreoElectrónico("")
        setNúmeroAuxiliar("")
        setFechaNacimiento("")
        setEdit(false)
    }

    const getClienteByid = async (id) => {
        try {

        } catch (error) {
            if (!error.response.data.ok) {
                return alert(error.response.data.message)
            }
            console.log("error en getUserByid", error.message)
        }
    }

    const getData = async (pageCurrent) => {
        const { data } = await axios.get(
            `/api/cliente/list/?page=${pageCurrent}`
            );
        console.log(data.clientes.docs);
        setClientes(data.clientes.docs);
        setPage(data.clientes.page);
        setTotalPages(data.clientes.totalPages);
    };

    const onchangePage = (page) => {
        getData(page);
    }

    const saveClientes = async () => {   /*Guardar clientes en la tabla */
        try {
            const newUser = {
                documento_usuario,
                nombre,
                apellido,
                teléfono,
                dirección,
                correoElectrónico,
                númeroAuxiliar,
                fechaNacimiento
            }
            await axios.post('/api/cliente/add', newUser)
            cleanData()
            getData()
        } catch (error) {
            if (!error.response.data.ok) {
                return alert(error.response.data.message)
            }
            console.log("error en saveClientes", error.message)
        }
    };

    const updateCliente = async () => {  /*Nos permite llamar a la funcion de actulizar clientes */
        try {
            const id = localStorage.getItem('id')
            const newUser = {
                documento_usuario,
                nombre,
                apellido,
                teléfono,
                dirección,
                correoElectrónico,
                númeroAuxiliar,
                fechaNacimiento
            }
            const { data } = await axios.put("/api/cliente/update/" + id, newUser)
            cleanData()
            getData()
            Swal.fire({  /*Alerta */
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1500
            })
        } catch (error) {
            if (!error.response.data.ok) {
                return alert(error.response.data.message)
            }
            console.log("error en updateClientes", error.message)
        }
    }

    const actions = (e) => {
        e.preventDefault();
        /* saveClientes();  asi se llama las funciones, con todas es lo mismo*/
        edit ? updateCliente() : saveClientes();

    };

    const completeDataFields = (item) => {  /*Con esto podemos editar nuestros registros */
        setEdit(true)  /*Esta llamada nos permite cambiar de falso a verdadero */
        setDocumento_usuario(item.documento_usuario)
        setNombre(item.nombre)
        setApellido(item.apellido)
        setTeléfono(item.teléfono)
        setDirección(item.dirección)
        setCorreoElectrónico(item.correo_Electrónico)
        setNúmeroAuxiliar(item.número_auxiliar)
        setFechaNacimiento(item.fechaNacimiento)
        localStorage.setItem("id", item._id) /*guardamos id en local storage*/
    }

    const deteleClientes = async (id) => {   /*funcionalidad al boton de borrar */
        try {
            Swal.fire({  /*Esta es la alerta para saber si estamos seguros de borrar el registro */
                title: '¿Estás seguro?',
                text: "!No podrás revertír el proceso!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const { data } = await axios.delete("/api/cliente/delete/" + id)  /*con esta dirección borramos el usuario */
                    Swal.fire({
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        } catch (error) {
            if (!error.response.data.ok) {
                return alert(error.response.data.message)
            }
            console.log("error en deleteClientes", error.message)
        }
    }

    return (
        <div className="container">
            {/*Inicio formulario */}
            <div className="container_1">
                <div className="container_2">
                    <div className="card">
                        <h1 className="crud">CRUD</h1>
                        <div className="body">
                            <div className="form_content">
                                <form onSubmit={actions}>
                                    <div>
                                        <input type="text" placeholder="Documento" className="form-control" value={documento_usuario} required onChange={e => setDocumento_usuario(e.target.value)} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Nombre" className="form-control" value={nombre} required onChange={e => setNombre(e.target.value)} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Apellido" className="form-control" value={apellido} required onChange={e => setApellido(e.target.value)} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Teléfono" className="form-control" value={teléfono} required onChange={e => setTeléfono(e.target.value)} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Dirección" className="form-control" value={dirección} required onChange={e => setDirección(e.target.value)} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Correo" className="form-control" value={correoElectrónico} required onChange={e => setCorreoElectrónico(e.target.value)} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="NumAuxiliar" className="form-control" value={númeroAuxiliar} required onChange={e => setNúmeroAuxiliar(e.target.value)} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="FechaNacimiento" className="form-control" value={fechaNacimiento} required onChange={e => setFechaNacimiento(e.target.value)} />
                                    </div>

                                    <button className="btn_form " type="submit">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Final formulario */}
            {/*Inicio Tabla para guardar registros */}
            <table className="table_info">
                <thead className="table_info2">
                    <tr>
                        <th>#</th>
                        <th>Documento</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Teléfono</th>
                        <th>Dirección</th>
                        <th>Correo</th>
                        <th>NumAuxiliar</th>
                        <th>FechaNacimiento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map((item, i) => (
                            <tr key={item._id}>
                                <td>{i + 1}</td>
                                <td>{item.documento_usuario}</td>
                                <td onClick={() => getClienteByid(item._id)}>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td>{item.teléfono}</td>
                                <td>{item.dirección}</td>
                                <td>{item.correoElectrónico}</td>
                                <td>{item.númeroAuxiliar}</td>
                                <td>{item.fechaNacimiento}</td>
                                <td>
                                    <i className=" btn_D fas fa-trash" onClick={() => deteleClientes(item._id)}></i> {/*Asi estamos llamando al boton para poder borrar el usuario, despues de dar click*/}
                                    <i className=" btn_W fas fa-edit" onClick={() => completeDataFields(item)}></i>{/*Boton de editar */}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {/*Final Tabla para guardar registros */}

            <div className=".my-5 d-flex justify-content-center">
                <Pagination
                    className="pagination"
                    current={page}
                    total={totalPages}
                    pageSize={1}
                    onChange={onchangePage}
                />
            </div>
        </div>
    );
};
