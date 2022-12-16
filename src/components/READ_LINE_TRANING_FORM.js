import React, { useState, useRef, useEffect } from 'react'
import { useReactToPrint } from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck , faLeftLong } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
import api from '../api/items.js'
import { useNavigate, useParams } from "react-router-dom"





const READ_LINE_TRANING_FORM = () => {
    let { id } = useParams();
    const navigate = useNavigate()


    const [Data, setData] = useState([])

    useEffect(() => {
        GetUserData()
    }, [])
    const GetUserData = async () => {

        const response = await api.get('/User/UserData', { params: { UserId: localStorage.getItem(`UserId`) } })
        if (response.data.length > 0 && response.data[0].role==='1') {
            getLineData()
        } else {
            navigate(`/`)
        }
    }

    const getLineData = async () => {
        const response = await api.get('/Forms/DataLineTraining', { params: { DataID: id } })
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
            <button onClick={() => {navigate(`/Table/Line`) }} className='fixed top-[110px] left-0 bg-[#470d67] text-[#fd8503] px-[10px]   border text-[30px]  rounded'><FontAwesomeIcon icon={faLeftLong} /></button>
            {Data.length > 0 && (
                <div ref={componentRef} className='container mx-auto' style={{ width: 21 + 'cm', height: 25.7 + 'cm' }}>
                    <div className='flex justify-center mt-[30px]'>
                        <img alt='Air-Cairo-logo' className='w-[17%]' src='/air-cairo.png' />
                    </div>
                    <table className=' text-[13px] text-start' >
                        <tbody>
                            <tr className='border-left-top-right-hidden'>
                                <td colSpan={4} className='border-0 w-[100%] flex font-normal'>
                                    <span className='w-[60%] justify-start text-[11px] ml-[7px]'>FLTOPS/TRNG 03</span>
                                    <span style={{ width: 'inherit' }} className='justify-center'>
                                        <span className='underline font-semibold text-[14px]'>LINE TRAINING FORM</span>
                                        <input checked={Data[0].IOE} readOnly style={{ transform: 'translateY(2px)' }} id='IOE-checkBox' type='checkbox' className='ml-[2%] mr-[5px] text-black items-center' />
                                        <label htmlFor='IOE-checkBox' className='font-semibold text-[14px]'>IOE</label>
                                        <input checked={Data[0].USV} readOnly style={{ transform: 'translateY(2px)' }} id='USV-checkBox' type='checkbox' className='ml-[2%] mr-[5px] text-black items-center' />
                                        <label htmlFor='USV-checkBox' className='font-semibold text-[14px]'>USV</label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4} className='text-start font-normal'>
                                    <span className='ml-[7px] mr-[7px]'>NAME:</span>
                                    <input readOnly value={Data[0].Name} type='text' className='pl-[5px] w-[42%]' />
                                    <span className='mr-[7px]'>TITLE:</span>
                                    <input readOnly value={Data[0].Title}  type='text' className='pl-[5px] w-[42%]' />

                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4} className='text-start font-normal'>
                                    <span className='ml-[7px] mr-[7px]' >ROUTE:</span>
                                    <input readOnly value={Data[0].Route}   type='text' className='pl-[5px] w-[42%]' />
                                    <span className='mr-[7px]'>DATE:</span>
                                    <input readOnly value={Data[0].Date}  type='text' className='pl-[5px] w-[42%]' />

                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4} className='text-start font-normal'>
                                    <span className='ml-[7px] mr-[7px]'>FIL.TIME: D</span>
                                    <input readOnly value={Data[0].FilTimeD}  type='text' className='w-[10%]' />N<input readOnly value={Data[0].FilTimeN} type='text' className='ml-[7px] pl-[5px] w-[10%]' />T<input readOnly value={Data[0].FilTimeT} type='text' className='ml-[7px] pl-[5px] w-[10%]' />
                                    <span >NO.OF SECTORS:<input readOnly value={Data[0].NoOfSectors} type='text' className='ml-[7px] w-[8%]' />PF:<input readOnly value={Data[0].PF} type='text' className='ml-[7px] pl-[5px] w-[11%]' />PM:<input readOnly value={Data[0].PM} type='text' className='ml-[7px] pl-[5px] w-[10%]' /></span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4} className='text-start font-normal '>
                                    <span className='ml-[7px]' >TRAINING STAGE (For Initial F/O only ):</span>
                                    <input checked={Data[0].Stage1} readOnly style={{ transform: 'translateY(2px)' }} id='Stage1-checkBox' type='checkbox' className='ml-[2%] mr-[5px] text-black items-center' />
                                    <label htmlFor='Stage1-checkBox'>Stage1</label>
                                    <input checked={Data[0].Stage2} readOnly style={{ transform: 'translateY(2px)' }} id='Stage2-checkBox' type='checkbox' className='ml-[5%] mr-[5px] text-black items-center' />
                                    <label htmlFor='Stage2-checkBox'>Stage2</label>
                                    <input checked={Data[0].Stage3} readOnly style={{ transform: 'translateY(2px)' }} id='Stage3-checkBox' type='checkbox' className='ml-[5%] mr-[5px] text-black items-center' />
                                    <label htmlFor='Stage3-checkBox'>Stage3</label>
                                    <input checked={Data[0].Stage4} readOnly style={{ transform: 'translateY(2px)' }} id='Stage4-checkBox' type='checkbox' className='ml-[5%] mr-[5px] text-black items-center' />
                                    <label htmlFor='Stage4-checkBox'>Stage4</label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={4} className='text-start font-normal '>
                                    <span className='ml-[7px]'>Course Type:</span>
                                    <input checked={Data[0].INIT} readOnly style={{ transform: 'translateY(2px)' }} id='INIT-checkBox' type='checkbox' className='ml-[2%] mr-[5px] text-black items-center' />
                                    <label htmlFor='INIT-checkBox'>INIT.</label>
                                    <input checked={Data[0].TRANS} readOnly style={{ transform: 'translateY(2px)' }} id='TRANS-checkBox' type='checkbox' className='ml-[10%] mr-[5px] text-black items-center' />
                                    <label htmlFor='TRANS-checkBox'>TRANS.</label>
                                    <input checked={Data[0].UPGRADE} readOnly style={{ transform: 'translateY(2px)' }} id='UPGRADE-checkBox' type='checkbox' className='ml-[10%] mr-[5px] text-black items-center' />
                                    <label htmlFor='UPGRADE-checkBox'>UPGRADE.</label>
                                    <input checked={Data[0].NEWHIRE} readOnly style={{ transform: 'translateY(2px)' }} id='NEWHIRE-checkBox' type='checkbox' className='ml-[10%] mr-[5px] text-black items-center' />
                                    <label htmlFor='NEWHIRE-checkBox'>NEW HIRE</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='text-[10px]'>(S)  Satisfactory (S.B.) Satisfactory W. Briefing (N/A) Not Api (D) Discissed   (S.I.) Should Improve   (U/S) Unsatisfactory</p>
                    <table className=' text-[12px] text-start' >
                        <tbody>
                            <tr>
                                <td colSpan={2} className='text-start font-black w-[50%]'> <span className='ml-[7px]'>1- FLIGHT CHECK</span> </td>
                                <td colSpan={2} className='text-start font-black w-[50%] bg-slate-200'> <span className='ml-[7px] '>E- DESCENT AND APPROACH</span> </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='text-start font-light w-[50%] text-[11px]'>
                                    <span className='ml-[7px]'>PRE FLIGHT </span></td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>ATIS, SNOWTAM and braking action </span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].E1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='text-start font-black w-[50%] bg-slate-200 '>
                                    <span className='ml-[7px]'>A-Dispatch</span></td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>Descent planning</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].E2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-bold w-[45%] text-[10px]'>
                                    <span className='ml-[7px]'>Inspection on personal Licence for currency </span>
                                </td>
                                <td className='text-center font-black w-[5%]'
                                    >
                                    <span className=' border-l-1 border-l-black '>{Data[0].A1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] ' >
                                    <span className='ml-[7px] '>Approach briefing, Stars and </span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].E3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] ' >
                                    <span className='ml-[7px]'>Computerized and ATC flight plan </span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].A2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>Approaches:</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].E4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Weather briefing </span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].A3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td colSpan={2} className='text-start font-black w-[50%] bg-slate-200  '>
                                    <span className='ml-[7px] '>F-LANDING AND TAXI IN</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Alternate planning Wx min </span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].A4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>Landing technique</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].F1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>NOTAM briefing</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].A5 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>X-Wind Landing</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].F2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Cabin crew safety briefing</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].A6 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>Use of Auto brakes and reverse thrust</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].F3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='text-start font-black w-[50%] bg-slate-200 '>
                                    <span className='ml-[7px]'>B-Cockpit</span></td>
                                <td className='text-start font-black w-[45%] '>
                                    <span className='ml-[7px] '>After landing and Taxi in procedures</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].F4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start leading-tight font-normal w-[45%] tracking-widest'>
                                    <span className='ml-[7px] mr-[15px]'>Tech. Log. B snags & Effect on T.O/LDG performance</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].B1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td colSpan={2} className='text-start align-top font-black w-[45%] bg-slate-200  '>
                                    <span className='ml-[7px] '>G-Flying Skills and Management</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Aircraft library and documentation - EFB</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].B2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>Compliance with SOP</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].G1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Inspection of Manuals for currency</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].B3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>Use of FMGS</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].G2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Cockpit preperation - FMGS set up</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].B4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>Aircraft configuration, Altitude & Speed Control</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].G3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>FANS B+ & CPDLC</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].B5 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>Flying accuracy & Smoothness</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black'>{Data[0].G4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Take-off briefing</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].B6 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>Planning ahead</span>
                                </td>
                                <td className='text-center font-black w-[5%]'>
                                    <span className=' border-l-1 border-l-black '>{Data[0].G5 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Load & Trim sheet</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].B7 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>Adherence to clearances and safe heights</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].G6 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>T.O preformance. T.O speeds and C.G</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].B8 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '>Situational awareness</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].G7 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Engine start procedures</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].B9 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px] '></span>
                                </td>
                                <td className='text-center font-black w-[5%]'>
                                    <span className=' border-l-1 border-l-black '></span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='text-start align-top  font-black w-[50%]  bg-slate-200 '>
                                    <span className='ml-[7px] mr-[15px]'>C-TAXI, TAKE-OFF AND CLIMB</span>
                                </td>
                                <td className='text-start  leading-tight  w-[45%] '>
                                    <span className='ml-[7px] '><span className='font-black'>C.R.M. Skills:</span> Crew coordination - Task sharing - Management-Decision Making</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].CRM === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Push back procedures </span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].C1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td colSpan={2} className='text-start font-black w-[45%] bg-slate-200  '>
                                    <span className='ml-[7px] '>2-KNOWLEDGE CHECK</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Taxi Speed and bracking technique </span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].C2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td colSpan={2} className='text-center font-normal w-[50%]'>
                                    <span className='ml-[7px] '>Discussed Items</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>T.O roll and V1 concept </span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].C3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                                <td rowSpan={14} colSpan={2} className='text-center font-normal w-[50%]'>
                                    <textarea rows={16} readOnly value={Data[0].DiscussedItems} className='pl-[5px] w-[100%] resize-none' />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>X- Wind T/O </span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].C4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Noise abatement procedure and initial climb</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].C5 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Best angle, Best rate and turbulance speeds </span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].C6 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Area departure, SID</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].C7 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='text-start  font-black w-[50%]  bg-slate-200 '>
                                    <span className='ml-[7px] mr-[15px]'>D-CRUISE</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>FL selection, Mach No and Manoeuver capability</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].D1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Opt. Alt, cruise speed schedule</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].D2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>FANS B+ & CPDLC</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].D3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Step climb and fuel saving</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].D4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Use of Weather radar and weather avoidance</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].D5 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Drift down procedure</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].D6 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Enroute alternate</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].D7 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                            <tr>
                                <td className='text-start font-normal w-[45%] '>
                                    <span className='ml-[7px]'>Use of Ecam</span>
                                </td>
                                <td className='text-center font-black w-[5%]' >
                                    <span className=' border-l-1 border-l-black '>{Data[0].D8 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='text-[10px] mb-[20px]'><span className='font-black'>Note:</span> Stage 1 (4 sectors PM), Stage 2 (40 hrs), Stage 3 (40 hrs), Stage 4 (20 hrs)</p>
                </div>
            )}

        </div>
    )
}

export default READ_LINE_TRANING_FORM
