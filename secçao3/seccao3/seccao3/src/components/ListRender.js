import {useState} from "react"
const ListRender=()=>{

const [lista]=useState(["Miguel","Liliana","Dinis","Ronaldo"])    // listas com o UseState

// metodo mais usado é com id´s:

const [users]=useState([
    {id:323,nome:"Miguel",idade:32},
    {id:3232,nome:"Liliana",idade:23},
    {id:454,nome:"Maria",idade:43},
    {id:454545,nome:"Manuel",idade:87}

])

    return(
        <div>
            <ul>
                {lista.map((item,i)=>(   // Importar listas no JSX
                <li key={i}>{item}</li>  // colocar uma key
                ))}
            </ul>
                   {/* metodo correcto: */}
            <ul>
                {users.map((user)=>(                   
                    <li key={user.id}>             {/* importar lista por ID */}

                        {user.nome}-{user.idade}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender

