import '../TodoList/Todo.css'
import { useState, useEffect  } from 'react';
import axios from 'axios'



const Todo = () => {
    const [data, setData]= useState('');
    const [name, setName]= useState([]);
   

    const dataFetch = async () =>{
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setName(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        dataFetch();
    },[])


    const inputSearch = name.filter((value)=>{
        if(data===''){
            return value;
        } else if(value.name.toLowerCase().includes(data.toLowerCase())){
return value
        }
    }).map((info) => <h5  key={info.id}>{info.name}</h5>)
    
  return (
    <div className="todolist">
        <h1>TodoList</h1>
         <div className="">
            <input onChange={(e)=>setData(e.target.value)}  className='input'  type="text" placeholder='Name'/>
            {
               inputSearch
              
               
            }
            
         </div>
    </div>
  )
}

export default Todo;