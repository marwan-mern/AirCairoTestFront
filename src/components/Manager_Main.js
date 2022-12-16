import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import api from '../api/items.js'

const Manager_Main = () => {
  const navigate = useNavigate()


    useEffect(()=>{
        GetUserData()
    },[])
    const GetUserData = async () => {
        const response = await api.get('/User/UserData', { params: { UserId: localStorage.getItem(`UserId`) } })
        if(response.data.length >0 && response.data[0].role==='1'){
          
        }else{
          navigate(`/`)
        }
      }
    return (
        <div className='container mx-auto mt-[110px]'>
            <Navbar />
            <div>
                <div className='flex flex-wrap justify-around items-center gap-[20px] '>
                    <button className=' p-[10px] text-lg font-black text-[#470d67] rounded-lg bg-[#fd8503] border-[2px] border-solid border-[#470d67]'>
                        <Link to={`/Table/Line`}>Line Training Form</Link>
                    </button>
                    <button className=' p-[10px] text-lg font-black text-[#470d67] rounded-lg bg-[#fd8503] border-[2px] border-solid border-[#470d67]'>
                        <Link to={`/Table/Details`}>Flight Details Form</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Manager_Main
