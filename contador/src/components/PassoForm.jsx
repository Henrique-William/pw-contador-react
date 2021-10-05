import React from 'react'

export default props => {
    return(
        <h2>
            <label htmlFor="passoImput">Passo: </label>
            <input 
                id="passoImput"
                type="number"
                value={props.passo}
                //o parametro event é o  melhor da tag (imput nesse caso)
                //o sinal de + converte o value (que por padrãpo é string) para number
                onChange={event => props.setPasso(+event.target.value)}
            />
        </h2>
    )
}