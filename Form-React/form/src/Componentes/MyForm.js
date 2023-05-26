import "./MyForm.css"
import {useState} from "react"

const MyForm=()=>{

const [name,setName]=useState()
const [email,setEmail]=useState()
const [bio,setBio]=useState("")

const HandleName = (e) => {
    //console.log("Nome alterado");
    setName(e.target.value);
  }
  

// para dar submit ao formulario
const handleSubmit=(event)=>{
    event.preventDefault()
    console.log("A enviar formulario")
    console.log(name,email)

    // para limpar o formulario
    setName("")
    setEmail("")
}
    
return(
     <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                 <input type="text" name="name" placeholder="Insira o seu nome" onChange={HandleName} />
            </div>  
                <input className="inputenviar" type="submit" value="Enviar" />
 

        {/* label envolvendo input */}

        <label>
           <span>Email</span> 
                             {/* simplificaçao de manipulaçao de state */}

            <input type="email" name="Email" placeholder="Insira o seu email" onChange={(e)=>setEmail(e.target.value)} />
            <input type="submit" value="Enviar" />
        </label>

         {/* Text area */}
            <label>
                <span>Bio</span>
                <textarea name="bio" placeholder="Descriçao do usuario" onChange={(e)=>setBio(e.target.value)} value={"bio"}> </textarea>
            </label>
        </form>
     </div>
    )
}

export default MyForm

