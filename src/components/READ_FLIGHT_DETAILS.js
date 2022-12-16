import React, { useState, useRef, useEffect } from 'react'
import { useReactToPrint } from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
import api from '../api/items.js'
import { useNavigate, useParams } from "react-router-dom"

const READ_FLIGHT_DETAILS = () => {
    let { id } = useParams();
    const navigate = useNavigate()


    const [Data, setData] = useState([])

    useEffect(() => {
        GetUserData()
    }, [])
    const GetUserData = async () => {

        const response = await api.get('/User/UserData', { params: { UserId: localStorage.getItem(`UserId`) } })
        if (response.data.length > 0 && response.data[0].role === '1') {
            getLineData()
        } else {
            navigate(`/`)
        }
    }

    const getLineData = async () => {
        const response = await api.get('/Forms/DataFlightDetails', { params: { DataID: id } })
        setData(response.data)
    }


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const Print = () => {
        handlePrint()
    }

    return (
        <div className='container mx-auto mt-[110px]' >
            <Navbar />
            <button onClick={() => { Print() }} className='fixed top-[110px] right-0 bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Print</button>
            <button onClick={() => { navigate(`/Table/Details`) }} className='fixed top-[110px] left-0 bg-[#470d67] text-[#fd8503] px-[10px]   border text-[30px]  rounded'><FontAwesomeIcon icon={faLeftLong} /></button>
            {Data.length > 0 ? (
                <div ref={componentRef} className='container mx-auto ' style={{ width: 21 + 'cm', height: 25.7 + 'cm' }}>
                    <div className='flex justify-center mt-[20px]'>
                        <img alt='Air-Cairo-logo' className='w-[17%]' src='/air-cairo.png' />
                    </div>
                    <table className=' text-[13px] text-start' >
                        <tbody>
                            <tr className='border-left-top-right-hidden'>
                                <td colSpan={4} className='border-0 w-[100%] text-start text-[13px] font-normal'>
                                    <span>Date: <input readOnly value={Data[0].Date} type='text' className='pl-[7px] text-start w-[150px]' /> </span>
                                </td>
                                <td colSpan={8} className='border-0 w-[100%] text-[14px] text-center font-black'>
                                    <span>FLIGHT DETAILS:<input readOnly value={Data[0].FlightDetails} type='text' className='pl-[7px] font-normal text-start w-[200px]' /></span>
                                </td>
                                <td colSpan={4} className='border-0 w-[100%] text-end  font-normal'>
                                    <span className='underline text-[11px]'>FLTOPS/TRNG 03v3</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={7} className='text-center font-black text-[14px] w-[50%]'>
                                    <span >P.F</span>
                                </td>
                                <td colSpan={7} className='text-center font-black text-[14px] w-[50%]'>
                                    <span >P.M</span>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan={2} colSpan={1} className='text-center font-medium text-[12px] leading-tight w-[5%]'>
                                    <span >Sec No.</span>
                                </td>
                                <td colSpan={2} className='text-center font-medium text-[12px] w-[16%]'>
                                    <span >Trip</span>
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <span >Sector Time</span>
                                </td>
                                <td rowSpan={2} colSpan={1} className='text-center font-medium text-[12px] leading-tight w-[5%] '>
                                    <span >Type Of App.</span>
                                </td>
                                <td rowSpan={2} colSpan={1} className='text-center font-medium text-[12px] leading-tight w-[5%] '>
                                    <span >Sec No.</span>
                                </td>
                                <td colSpan={2} className='text-center font-medium text-[12px] w-[16%]'>
                                    <span >Trip</span>
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <span >Sector Time</span>
                                </td>
                                <td rowSpan={2} colSpan={1} className='text-center font-medium text-[12px] leading-tight w-[5%]'>
                                    <span >Type Of App.</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center font-medium text-[12px] w-[8%] '>
                                    <span >From</span>
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] '>
                                    <span >To</span>
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] '>
                                    <span >D.</span>
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] '>
                                    <span >N.</span>
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] '>
                                    <span >T.</span>
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] '>
                                    <span >From</span>
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] '>
                                    <span >To</span>
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] '>
                                    <span >D.</span>
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] '>
                                    <span >N.</span>
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] '>
                                    <span >T.</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].SecNoPF1} type='text' className='text-center w-[20px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].FromPF1} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].ToPF1} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].DPF1} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].NPF1} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TPF1} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TypePF1} type='text' className='text-center w-[20px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].SecNoPM1} type='text' className='text-center w-[20px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].FromPM1} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].ToPM1} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].DPM1} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].NPM1} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TPM1} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TypePM1} type='text' className='text-center w-[20px]' />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].SecNoPF2} type='text' className='text-center w-[20px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].FromPF2} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].ToPF2} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].DPF2} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].NPF2} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TPF2} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TypePF2} type='text' className='text-center w-[20px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].SecNoPM2} type='text' className='text-center w-[20px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].FromPM2} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].ToPM2} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].DPM2} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].NPM2} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TPM2} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TypePM2} type='text' className='text-center w-[20px]' />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].SecNoPF3} type='text' className='text-center w-[20px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].FromPF3} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].ToPF3} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].DPF3} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].NPF3} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TPF3} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TypePF3} type='text' className='text-center w-[20px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].SecNoPM3} type='text' className='text-center w-[20px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].FromPM3} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].ToPM3} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].DPM3} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].NPM3} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TPM3} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TypePM3} type='text' className='text-center w-[20px]' />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].SecNoPF4} type='text' className='text-center w-[20px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].FromPF4} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].ToPF4} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].DPF4} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].NPF4} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TPF4} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TypePF4} type='text' className='text-center w-[20px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].SecNoPM4} type='text' className='text-center w-[20px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].FromPM4} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].ToPM4} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].DPM4} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].NPM4} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TPM4} type='text' className='text-center w-[40px]' />
                                </td>
                                <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                    <input readOnly value={Data[0].TypePM4} type='text' className='text-center w-[20px]' />
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan={3} colSpan={1} className='text-center font-medium  text-[13px] leading-tight w-[5%]'>
                                    <p className='w-[37px] -rotate-90 h-[37px]'>TIME</p>
                                </td>
                                <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                    <span className='pl-[5px]' >TOTAL TODAY TIME</span>
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <input readOnly value={Data[0].TotalTodayTime1} type='text' className='text-center w-[100px]' />
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <input readOnly value={Data[0].TotalTodayTime2} type='text' className='text-center w-[100px]' />
                                </td>
                                <td rowSpan={3} colSpan={4} className='text-center font-medium text-[12px]  w-[32%] '>
                                    <span >GRAND TOTAL TIME</span>
                                    <textarea rows={3} readOnly value={Data[0].GrandTotalTime} className='text-center  pl-[5px] w-[100%] resize-none' />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                    <span className='pl-[5px]' >PREVIOUS TIME</span>
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <input readOnly value={Data[0].PreviousTime1} type='text' className='text-center w-[100px]' />
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <input readOnly value={Data[0].PreviousTime2} type='text' className='text-center w-[100px]' />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                    <span className='pl-[5px]'>TOTAL ACC.TIME:</span>
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <input readOnly value={Data[0].TotalACCTIME1} type='text' className='text-center w-[100px]' />
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <input readOnly value={Data[0].TotalACCTIME2} type='text' className='text-center w-[100px]' />
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan={3} colSpan={1} className='text-center font-medium  text-[13px] leading-tight w-[5%]'>
                                    <p className='w-[37px] -rotate-90 h-[37px]'>SECTORS</p>
                                </td>
                                <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                    <span className='pl-[5px]' >TOTAL TODAY SECTORS</span>
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <input readOnly value={Data[0].TotalTodaySectors1} type='text' className='text-center w-[100px]' />
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <input readOnly value={Data[0].TotalTodaySectors2} type='text' className='text-center w-[100px]' />
                                </td>
                                <td rowSpan={3} colSpan={4} className='text-center font-medium text-[12px]  w-[32%] '>
                                    <span >GRAND TOTAL SECTOR</span>
                                    <textarea readOnly value={Data[0].GrandTotalSector} rows={3} className='text-center  pl-[5px] w-[100%] resize-none' />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                    <span className='pl-[5px]' >PREVIOUS SECTORS:</span>
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <input readOnly value={Data[0].PreviousSectors1} type='text' className='text-center w-[100px]' />
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <input readOnly value={Data[0].PreviousSectors2} type='text' className='text-center w-[100px]' />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                    <span className='pl-[5px]'>TOTAL ACC.SECTORS:</span>
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <input readOnly value={Data[0].TotalACCSECTOR1} type='text' className='text-center w-[100px]' />
                                </td>
                                <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                    <input readOnly value={Data[0].TotalACCSECTOR2} type='text' className='text-center w-[100px]' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='text-start  w-[100%]'>
                        <span className='underline pl-[5px] font-black text-[14px]'>INSTRUCTOR NOTES</span>
                        <textarea readOnly value={Data[0].InstructorNotes} rows={6} className='border-[4px] border-double border-black text-start pl-[5px] w-[100%] resize-none' />
                    </div>
                    <div style={{ marginTop: -10 + 'px' }} className='text-center'>
                        <span className='font-normal text-[13px]'>Stage 1 (4 sectors PM), Stage 2 (40 hrs), Stage 3 (40 hrs), Stage 4 (20 hrs)</span>
                    </div>
                    <div className='container mx-auto' style={{ width: 21 + 'cm' }}>
                        <table className=' text-[13px] text-start'  >
                            <tbody>
                                <tr>
                                    <td colSpan={1} className='text-start align-top bg-slate-200 font-black text-[14px] w-[40%]'>
                                        <span >EVALUATION</span>
                                    </td>
                                    <td colSpan={3} className='text-center font-black text-[14px] w-[60%]'>
                                        <div>
                                            <label className='ml-[2%] mr-[5px]' htmlFor='Stage1-checkBox'>S1 (US)</label>
                                            <input checked={Data[0].Stage1} readOnly style={{ transform: 'translateY(2px)' }} id='Stage1-checkBox' type='checkbox' className=' text-black items-center' />
                                            <label className='ml-[6%] mr-[5px]' htmlFor='Stage2-checkBox'>S2</label>
                                            <input checked={Data[0].Stage2} readOnly style={{ transform: 'translateY(2px)' }} id='Stage2-checkBox' type='checkbox' className=' text-black items-center' />
                                            <label className='ml-[6%] mr-[5px]' htmlFor='Stage3-checkBox'>S3</label>
                                            <input checked={Data[0].Stage3} readOnly style={{ transform: 'translateY(2px)' }} id='Stage3-checkBox' type='checkbox' className=' text-black items-center' />
                                            <label className='ml-[6%] mr-[5px]' htmlFor='Stage4-checkBox'>S4</label>
                                            <input checked={Data[0].Stage4} readOnly style={{ transform: 'translateY(2px)' }} id='Stage4-checkBox' type='checkbox' className=' text-black items-center' />
                                            <label className='ml-[6%] mr-[5px]' htmlFor='Stage5-checkBox'>S5</label>
                                            <input checked={Data[0].Stage5} readOnly style={{ transform: 'translateY(2px)' }} id='Stage5-checkBox' type='checkbox' className=' text-black items-center' />
                                        </div>
                                        <div className='text-center font-normal text-[11px]'>
                                            <span >S1 (Unsatisfactory) S2 (Below average) S3 (Average) S4 (Good) S5 (Very Good)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={1} className='text-start bg-slate-200 font-black text-[14px] w-[40%]'>
                                        <span className='pl-[5px]'>CRM - Non Technical Skills</span>
                                    </td>
                                    <td colSpan={3} className=' bg-slate-200 w-[60%]'>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[40%]'>
                                        <span className='pl-[5px]' >(CC) - Cooperation</span>
                                    </td>
                                    <td colSpan={1} className='text-center font-medium w-[5%]' >
                                        <input readOnly value={Data[0].CC} type='text' className='text-center w-[30px]' />
                                    </td>
                                    <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[50%]'>
                                        <span className='pl-[5px]' >(SA) Situation Awareness</span>
                                    </td>
                                    <td colSpan={1} className='text-center font-medium w-[5%]' >
                                        <input readOnly value={Data[0].SA} type='text' className='text-center w-[30px]' />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[40%]'>
                                        <span className='pl-[5px]' >(LM) - Leadership & managerial skills</span>
                                    </td>
                                    <td colSpan={1} className='text-center font-medium w-[5%]' >
                                        <input readOnly value={Data[0].LM} type='text' className='text-center w-[30px]' />
                                    </td>
                                    <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[50%]'>
                                        <span className='pl-[5px]' >(DM) Decision Making</span>
                                    </td>
                                    <td colSpan={1} className='text-center font-medium w-[50%]' >
                                        <input readOnly value={Data[0].DM} type='text' className='text-center w-[30px]' />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={4} className='text-start bg-slate-200 font-black text-[14px] w-[40%]'>
                                        <span className='pl-[5px]' > Technical Skills</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={1} className='text-start bg-slate-200 font-medium text-[13px] w-[40%]'>
                                        <span className='pl-[2px]'>(A) Flight path management-Automation</span>
                                    </td>
                                    <td colSpan={1} className='text-center font-medium w-[5%]' >
                                        <input readOnly value={Data[0].A} type='text' className='text-center w-[30px]' />
                                    </td>
                                    <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[50%]'>
                                        <span className='pl-[5px]'>(P) Procedure Adherence & Execution</span>
                                    </td>
                                    <td colSpan={1} className='text-center font-medium w-[5%]' >
                                        <input readOnly value={Data[0].P} type='text' className='text-center w-[30px]' />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[40%]'>
                                        <span className='pl-[5px]'>(M) Flight path management - Manual</span>
                                    </td>
                                    <td colSpan={1} className='text-center font-medium w-[5%]' >
                                        <input readOnly value={Data[0].M} type='text' className='text-center w-[30px]' />
                                    </td>
                                    <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[50%]'>
                                        <span className='pl-[5px]'>(K) Knowledge</span>
                                    </td>
                                    <td colSpan={1} className='text-center font-medium w-[5%]' >
                                        <input readOnly value={Data[0].K} type='text' className='text-center w-[30px]' />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='flex flex-row justify-between text-center font-bold text-[12px]'>
                            <div className='flex flex-col'>
                                <p className='pl-[10px]'>Trainee</p>
                                <p className='pl-[10px] underline'>Name/Signature</p>
                                <span className='border-[1px] border-solid border-black overflow-hidden w-[250px]  h-[120px] '>
                                    {Data[0].signPadTraineeData !== undefined ? (
                                        <img className='w-[250px]  h-[120px]'
                                            src={Data[0].signPadTraineeData}
                                        />
                                    ) : null}
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <p className='pl-[10px]'>IO/CA/EP</p>
                                <p className='pl-[10px] underline'>Name/Signature</p>
                                <span className='border-[1px] border-solid border-black overflow-hidden w-[250px]  h-[120px] '>
                                    {Data[0].signPadIPData !== undefined ? (
                                        <img className='w-[250px]  h-[120px]'
                                            src={Data[0].signPadIPData}
                                        />
                                    ) : null}
                                </span>
                            </div>
                            <div className='flex flex-col'>
                                <p className='pl-[10px]'>Training Manager</p>
                                <p className='pl-[10px] underline'>Name/Signature</p>
                                <span className='border-[1px] border-solid border-black overflow-hidden w-[250px]  h-[120px] '>
                                    {Data[0].signPadTMData !== undefined ? (
                                        <img className='w-[250px]  h-[120px]'
                                            src={Data[0].signPadTMData}
                                        />
                                    ) : null}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <div role="status">
                        <svg className="inline mr-2 w-[50px] h-[#50px] text-gray-200 animate-spin dark:text-gray-600 fill-[#470d67]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                </div>
            )}
        </div>
    )
}

export default READ_FLIGHT_DETAILS
