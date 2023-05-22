import {useState} from "react"  // hooks em react

const ManageData = () => {

const[number,setnumber]=useState(6)

  return (
    <div>
        <div>
            <p>valor:{number}</p>
            <button onClick={() => setnumber(25)}>Muda o numero</button>     {/* altera o valor da variavel com o hook */}
        </div>
    </div>
  )
}

export default ManageData

