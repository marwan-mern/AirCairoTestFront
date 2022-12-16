import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faEye, faLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate, useParams } from 'react-router-dom'
import api from '../api/items.js'



const TABLE_LINE_TRANING_FORM = () => {
    const navigate = useNavigate()
    let { Location } = useParams();

    const [SearchResults, setSearchResults] = useState([])
    const Search = async (Value) => {
        const response = await api.get('/Forms/Search', { params: { Param: Value, Location } })
        setSearchResults(response.data)
    }

    const [Data, setData] = useState([])

    useEffect(() => {
        GetUserData()
    }, [])

    const GetUserData = async () => {

        const response = await api.get('/User/UserData', { params: { UserId: localStorage.getItem(`UserId`) } })
        if (response.data.length > 0 && response.data[0].role === '1') {
            if (Location === `Line`) { getLineTableData() }
            else if (Location === `Details`) { getDetailsTableData() }
        } else {
            navigate(`/`)
        }


    }

    const getLineTableData = async () => {
        const response = await api.get('/Forms/TablesLineTraining')
        setData(response.data)
    }

    const getDetailsTableData = async () => {
        const response = await api.get('/Forms/TablesDetailsTraining')
        setData(response.data)
    }
    return (
        <div className='container mx-auto mt-[80px]' >
            <Navbar />
            <button onClick={() => { navigate(`/Manager`) }} className='fixed top-[90px] right-0 bg-[#470d67] text-[#fd8503] px-[10px]   border text-[30px]  rounded'><FontAwesomeIcon icon={faLeftLong} /></button>

            <div className="flex flex-col">
                <div >
                    <div className="py-3 pl-2">
                        <div className="relative ">
                            <label htmlFor="hs-table-search" className="sr-only">
                                Search
                            </label>
                            <input
                                onChange={(e) => { Search(e.target.value) }}
                                type="text"
                                name="hs-table-search"
                                id="hs-table-search"
                                className="block w-[90%] p-1 pl-10 text-lg border-[#470d67] border-[2px] border-solid rounded-md "
                                placeholder="Search..."
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                                <FontAwesomeIcon icon={faSearch} />
                            </div>
                        </div>
                    </div>

                    <div className="p-1.5 w-full inline-block align-middle text-center">
                        <div className="  overflow-y-scroll  h-[60vh] ">
                            <table className="min-w-full text-center ">
                                <thead className="sticky top-0  bg-[#fd8503] text-[#470d67] text-lg font-black  ">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-2 py-2 border-[1px] border-solid border-[#470d67] uppercase "
                                        >
                                            ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-2 border-[1px] border-solid border-[#470d67] uppercase "
                                        >
                                            Sender
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-2 border-[1px] border-solid border-[#470d67] uppercase "
                                        >
                                            Subject
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-2 py-2 border-[1px] border-solid border-[#470d67] uppercase "
                                        >
                                            Date
                                        </th>
                                        <th
                                            scope="col"
                                            className=" py-2 border-[1px] border-solid border-[#470d67] uppercase "
                                        >
                                            Preview
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {(Data.length > 0 && SearchResults.length === 0) ? (Data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="px-2 py-2 border-[1px] border-solid border-[#470d67] text-md font-medium  whitespace-nowrap">
                                                    {index + 1}
                                                </td>
                                                <td className="px-2 py-2 border-[1px] border-solid border-[#470d67] text-md  whitespace-normal">
                                                    {item.User_Name}
                                                </td>
                                                <td className="px-2 py-2 border-[1px] border-solid border-[#470d67] text-md  w-content max-w-[250px] whitespace-normal">
                                                    {Location === `Line` ? item.Name : Location === `Details` ? item.FlightDetails : null}
                                                </td>
                                                <td className="px-2 py-2 border-[1px] border-solid border-[#470d67] text-md font-medium  whitespace-nowrap">
                                                    {item.createdAt.split(`.`)[0].split(`T`)[0] + ` ` + item.createdAt.split(`.`)[0].split(`T`)[1]}
                                                </td>
                                                <td className="px-2  border-[1px] border-solid border-[#470d67] text-md font-medium  whitespace-nowrap">
                                                    {Location === `Line` ? <Link to={`/ReadLine/${item._id}`} className="text-[#470d67] text-[30px] " ><FontAwesomeIcon icon={faEye} /></Link>
                                                        : Location === `Details` ? <Link to={`/ReadDetails/${item._id}`} className="text-[#470d67] text-[30px] " ><FontAwesomeIcon icon={faEye} /></Link>
                                                            : null}
                                                </td>
                                            </tr>
                                        )
                                    })) : SearchResults.length > 0 ? (
                                        SearchResults.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="px-2 py-2 border-[1px] border-solid border-[#470d67] text-md font-medium  whitespace-nowrap">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-2 py-2 border-[1px] border-solid border-[#470d67] text-md  whitespace-normal">
                                                        {item.User_Name}
                                                    </td>
                                                    <td className="px-2 py-2 border-[1px] border-solid border-[#470d67] text-md  w-content max-w-[250px] whitespace-normal">
                                                        {Location === `Line` ? item.Name : Location === `Details` ? item.FlightDetails : null}
                                                    </td>
                                                    <td className="px-2 py-2 border-[1px] border-solid border-[#470d67] text-md font-medium  whitespace-nowrap">
                                                        {item.createdAt.split(`.`)[0].split(`T`)[0] + ` ` + item.createdAt.split(`.`)[0].split(`T`)[1]}
                                                    </td>
                                                    <td className="px-2  border-[1px] border-solid border-[#470d67] text-md font-medium  whitespace-nowrap">
                                                        {Location === `Line` ? <Link to={`/ReadLine/${item._id}`} className="text-[#470d67] text-[30px] " ><FontAwesomeIcon icon={faEye} /></Link>
                                                            : Location === `Details` ? <Link to={`/ReadDetails/${item._id}`} className="text-[#470d67] text-[30px] " ><FontAwesomeIcon icon={faEye} /></Link>
                                                                : null}
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        )
                                    ) : (
                                        <tr >
                                            <td colSpan={5} className="text-center">
                                                <div role="status ">
                                                    <svg className="inline mr-2 w-[50px] h-[#50px] text-gray-200 animate-spin dark:text-gray-600 fill-[#470d67]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                    </svg>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TABLE_LINE_TRANING_FORM
