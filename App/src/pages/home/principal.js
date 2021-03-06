import React, {useState, useEffect} from 'react'
import { Cabecalho } from '../../componentes/cabecalho'
import { ClassroomList } from '../../componentes/classroom/lista'

import axios from 'axios'

const URL = 'http://localhost:3000/api/classrooms'

export const HomePage = props => {

    const [classrooms, setClassrooms] = useState([])

    useEffect(()=>{
        try{
            const getClassrooms = async _ => {
                const result = await axios.get(URL)
                if(result.data){
                    setClassrooms(result.data)
                }
            }
            getClassrooms()
        }
        catch(e){
            console.log(e)
        }

    }, [setClassrooms])

    return (
        <div className="container">
            <Cabecalho titulo="RoomAlloc" subtitulo="seja bem vindo ao sistema de alocação de salas!"/>
            <ClassroomList classrooms={classrooms} isAdmin={false}/>
        </div>
    )
}