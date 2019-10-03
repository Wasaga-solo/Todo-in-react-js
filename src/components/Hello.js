import React from 'react'

const Hello=({name,heroName,children}) =>{
    return(
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
        </div>
    )
    // return React.createElement('div',
    // {id:'wewe'},
    // React.createElement('h1',{className:'mimi'},'halilili')
    // )
}
export default Hello