import React , {useState} from 'react'
// import {  useDispatch } from 'react-redux'
import api from '../api/items.js'
import { useNavigate } from "react-router-dom"
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {

    // const dispatch = useDispatch()
    const navigate = useNavigate()

    const [UserId, setUserId] = useState()
    const [Pass, setPass] = useState()

    const ChangeUserCode = (e) => {
        setUserId(e.target.value)
    }

    const ChangePass = (e) => {
        setPass(e.target.value)
    }

    const Submit = async (e) => {
        e.preventDefault()

        const response = await api.get('/User/Login', { params: { UserName: UserId , Pass:Pass } })
        if(response.data.length>0){
            localStorage.setItem(`UserId`,response.data[0]._id)
            notifySuccess()
            response.data[0].role===`1` ? navigate(`/Manager`) : response.data[0].role===`2` ? navigate(`/Captin`) : navigate(`/`)
        }else{
            notifyFail()
        }

        // User[0].role === `1` ? navigate(`/Distributer`) : User[0].role === `3` ? navigate(`/Form`) : navigate(`/Consumer`)
    }

    const notifySuccess = () => {
        toast.success(<><p className='text-white font-bold text-lg'>Login Successfully</p></>, {
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

    const notifyFail = () => {
        toast.error(<><p className='text-white font-bold text-lg'>Wrong user Name Or Password</p></>, {
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
        <div className='max-w-[100%] m-auto p-4 h-screen'>
            <div className="container px-6 py-12 h-full">
                <div className="flex justify-center items-center h-full g-6 text-gray-800">
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={Submit} >
                            <div className="mb-[8%] flex items-center justify-center">
                                <img alt='logo' src='./air-cairo.png' className="h-9" />
                            </div>
                            <div className="mb-6">
                                <input
                                    onChange={ChangeUserCode}
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#470d67] rounded transition ease-in-out m-0"
                                    placeholder="User Id"
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    onChange={ChangePass}
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#470d67] rounded transition ease-in-out m-0"
                                    placeholder="Password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-[#470d67] text-[#fd8503] font-bold text-lg leading-snug  rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0   active:shadow-lg transition duration-150 ease-in-out w-[50%]"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
