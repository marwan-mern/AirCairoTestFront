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
                                    })) : (
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
