import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import api from '../api/items.js'
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Navbar = () => {
    const navigate = useNavigate()

    const [UserData,setUserData]=useState([])

    useEffect(()=>{
        GetUserData()
    },[])

    const GetUserData = async()=>{
        
        const response = await api.get('/User/UserData', { params: { UserId: localStorage.getItem(`UserId`) } })
        if(response.data.length>0){
            setUserData(response.data)
        }else{
            navigate(`/`)
        }

    }

    const Logout = ()=>{
        navigate(`/`)
        localStorage.removeItem(`UserId`)
        notifyFail()
    }



    const notifyFail = () => {
        toast.error(<><p className='text-white font-bold text-lg'>Logout Successfully</p></>, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom
        });
    };

    return (
        <div>
            <nav className="bg-white px-2 sm:px-4  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
                <div className="container flex flex-row items-center justify-around mx-auto">
                    <Link to={`/`} className="flex items-center">
                        <img alt='Air-Cairo-logo' src='/air-cairo.png' className="h-6 mr-3 sm:h-9 " />
                    </Link>
                    <div className="items-center justify-between mt-4 w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-row   border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <p className="relative inline-flex items-center justify-center p-0.5  mr-2 mb-3 text-xl font-black text-gray-900 rounded-lg group bg-gradient-to-br ">
                                    <span className="relative px-2 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        {UserData.length>0 && UserData[0].Full_Name}
                                    </span>
                                </p>
                            </li>
                            <li>
                                <button onClick={Logout} className="relative inline-flex items-center justify-center p-0.5  mr-2 mb-3 text-sm font-medium text-white rounded-lg group bg-gradient-to-br ">
                                    <span className="relative px-2 py-2 transition-all ease-in duration-75 bg-[#b41919]  rounded-md ">
                                        Logout
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
