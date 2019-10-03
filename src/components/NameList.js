import React from 'react'
import Person from './Person'

function NameList() {
const names=['Wasaga','Mbuthia','Wasaga','Albert']
    //     const person=[
// {name:'Wasaga',
//  age:22
// },
// {name:'Mbuthia',
//  age:23},
// {name:'albert',
//  age:24
// }
// ]
    const nameList= names.map((name,index) =><Person hey={index} key={index} boy={name}/>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
