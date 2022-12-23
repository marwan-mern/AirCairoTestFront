import React, { useState, useRef, useEffect } from 'react'
import { useReactToPrint } from 'react-to-print';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faLeftLong } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar';
import api from '../api/items.js'
import { useNavigate } from "react-router-dom"
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const LINE_TRANING_FORM = () => {
    const navigate = useNavigate()


    const [IOE, setIOE] = useState(false)
    const [USV, setUSV] = useState(false)

    const [Name, setName] = useState(``)
    const [Title, setTitle] = useState(``)
    const [Route, setRoute] = useState(``)
    const [Date, setDate] = useState(``)
    const [FilTimeD, setFilTimeD] = useState(``)
    const [FilTimeN, setFilTimeN] = useState(``)
    const [FilTimeT, setFilTimeT] = useState(``)
    const [NoOfSectors, setNoOfSectors] = useState(``)
    const [PF, setPF] = useState(``)
    const [PM, setPM] = useState(``)

    const [Stage1, setStage1] = useState(false)
    const [Stage2, setStage2] = useState(false)
    const [Stage3, setStage3] = useState(false)
    const [Stage4, setStage4] = useState(false)
    const [INIT, setINIT] = useState(false)
    const [TRANS, setTRANS] = useState(false)
    const [UPGRADE, setUPGRADE] = useState(false)
    const [NEWHIRE, setNEWHIRE] = useState(false)

    const [A1, setA1] = useState(false)
    const [A2, setA2] = useState(false)
    const [A3, setA3] = useState(false)
    const [A4, setA4] = useState(false)
    const [A5, setA5] = useState(false)
    const [A6, setA6] = useState(false)

    const [B1, setB1] = useState(false)
    const [B2, setB2] = useState(false)
    const [B3, setB3] = useState(false)
    const [B4, setB4] = useState(false)
    const [B5, setB5] = useState(false)
    const [B6, setB6] = useState(false)
    const [B7, setB7] = useState(false)
    const [B8, setB8] = useState(false)
    const [B9, setB9] = useState(false)

    const [C1, setC1] = useState(false)
    const [C2, setC2] = useState(false)
    const [C3, setC3] = useState(false)
    const [C4, setC4] = useState(false)
    const [C5, setC5] = useState(false)
    const [C6, setC6] = useState(false)
    const [C7, setC7] = useState(false)

    const [D1, setD1] = useState(false)
    const [D2, setD2] = useState(false)
    const [D3, setD3] = useState(false)
    const [D4, setD4] = useState(false)
    const [D5, setD5] = useState(false)
    const [D6, setD6] = useState(false)
    const [D7, setD7] = useState(false)
    const [D8, setD8] = useState(false)

    const [E1, setE1] = useState(false)
    const [E2, setE2] = useState(false)
    const [E3, setE3] = useState(false)
    const [E4, setE4] = useState(false)

    const [F1, setF1] = useState(false)
    const [F2, setF2] = useState(false)
    const [F3, setF3] = useState(false)
    const [F4, setF4] = useState(false)

    const [G1, setG1] = useState(false)
    const [G2, setG2] = useState(false)
    const [G3, setG3] = useState(false)
    const [G4, setG4] = useState(false)
    const [G5, setG5] = useState(false)
    const [G6, setG6] = useState(false)
    const [G7, setG7] = useState(false)

    const [CRM, setCRM] = useState(false)

    const [DiscussedItems, setDiscussedItems] = useState(``)



    // const [initialState, setInitialState] = useState({
    //     IOE: false, USV: false,
    //     Name: ``, Title: ``, Route: ``, Date: ``,
    //     FilTimeD: ``, FilTimeN: ``, FilTimeT: ``,
    //     NoOfSectors: ``, PF: ``, PM: ``,
    //     Stage1: false, Stage2: false, Stage3: false, Stage4: false,
    //     INIT: false, TRANS: false, UPGRADE: false, NEWHIRE: false,
    //     A1: false, A2: false, A3: false, A4: false, A5: false, A6: false,
    //     B1: false, B2: false, B3: false, B4: false, B5: false, B6: false, B7: false, B8: false, B9: false,
    //     C1: false, C2: false, C3: false, C4: false, C5: false, C6: false, C7: false,
    //     D1: false, D2: false, D3: false, D4: false, D5: false, D6: false, D7: false,
    //     E1: false, E2: false, E3: false, E4: false,
    //     F1: false, F2: false, F3: false, F4: false,
    //     G1: false, G2: false, G3: false, G4: false, G5: false, G6: false, G7: false,
    //     CRM: false,
    //     DiscussedItems: ``
    // });


    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const Print = () => {
        handlePrint()
    }

    useEffect(() => {
        GetUserData()
    }, [])

    const [UserData, setUserData] = useState([])
    

    const GetUserData = async () => {

        const response = await api.get('/User/UserData', { params: { UserId: localStorage.getItem(`UserId`) } })
        if (response.data.length > 0 && response.data[0].role==='2') {
            setUserData(response.data)
        } else {
            navigate(`/`)
        }
    }

    const Submit = async () => {
        await api.post('/Forms/ADD_LINE_TRANING_FORM', {
            User_Id: UserData[0]._id,
            User_Name: UserData[0].Full_Name,
            IOE,
            USV,
            Name,
            Title,
            Route,
            Date,
            FilTimeD,
            FilTimeN,
            FilTimeT,
            NoOfSectors,
            PF,
            PM,
            Stage1,
            Stage2,
            Stage3,
            Stage4,
            INIT,
            TRANS,
            UPGRADE,
            NEWHIRE,
            A1,
            A2,
            A3,
            A4,
            A5,
            A6,

            B1,
            B2,
            B3,
            B4,
            B5,
            B6,
            B7,
            B8,
            B9,

            C1,
            C2,
            C3,
            C4,
            C5,
            C6,
            C7,

            D1,
            D2,
            D3,
            D4,
            D5,
            D6,
            D7,
            D8,

            E1,
            E2,
            E3,
            E4,

            F1,
            F2,
            F3,
            F4,

            G1,
            G2,
            G3,
            G4,
            G5,
            G6,
            G7,

            CRM,
            DiscussedItems
        })
        notifySuccess()
    }



    const notifySuccess = () => {
        toast.success(<><p className='text-white font-bold text-lg'>Submit Successfully</p></>, {
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

    const [showModal, setShowModal] = useState(false);

    return (
        <div className='container mx-auto mt-[110px]' >
            <Navbar />
            {/* <button onClick={() => { Print() }} className='fixed top-[110px] right-0 bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Print</button> */}
            <button onClick={() => {navigate(`/Captin`) }} className='fixed top-[70px] left-0 bg-[#470d67] text-[#fd8503] px-[10px]   border text-[30px]  rounded'><FontAwesomeIcon icon={faLeftLong} /></button>
            <button onClick={() => setShowModal(true)} className='fixed top-[110px] left-0 bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Submit</button>

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
                                    <input checked={IOE} onChange={(e) => { setIOE(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='IOE-checkBox' type='checkbox' className='ml-[2%] mr-[5px] text-black items-center' />
                                    <label htmlFor='IOE-checkBox' className='font-semibold text-[14px]'>IOE</label>
                                    <input checked={USV} onChange={(e) => { setUSV(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='USV-checkBox' type='checkbox' className='ml-[2%] mr-[5px] text-black items-center' />
                                    <label htmlFor='USV-checkBox' className='font-semibold text-[14px]'>USV</label>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} className='text-start font-normal'>
                                <span className='ml-[7px] mr-[7px]'>NAME:</span>
                                <input onChange={(e) => { setName(e.target.value) }} type='text' className='pl-[5px] w-[42%]' />
                                <span className='mr-[7px]'>TITLE:</span>
                                <input onChange={(e) => { setTitle(e.target.value) }} type='text' className='pl-[5px] w-[42%]' />

                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} className='text-start font-normal'>
                                <span className='ml-[7px] mr-[7px]' >ROUTE:</span>
                                <input onChange={(e) => { setRoute(e.target.value) }} type='text' className='pl-[5px] w-[42%]' />
                                <span className='mr-[7px]'>DATE:</span>
                                <input onChange={(e) => { setDate(e.target.value) }} type='text' className='pl-[5px] w-[42%]' />

                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} className='text-start font-normal'>
                                <span className='ml-[7px] mr-[7px]'>FIL.TIME: D</span>
                                <input onChange={(e) => { setFilTimeD(e.target.value) }} type='text' className='w-[10%]' />N<input onChange={(e) => { setFilTimeN(e.target.value) }} type='text' className='ml-[7px] pl-[5px] w-[10%]' />T<input onChange={(e) => { setFilTimeT(e.target.value) }} type='text' className='ml-[7px] pl-[5px] w-[10%]' />
                                <span >NO.OF SECTORS:<input onChange={(e) => { setNoOfSectors(e.target.value) }} type='text' className='ml-[7px] w-[8%]' />PF:<input onChange={(e) => { setPF(e.target.value) }} type='text' className='ml-[7px] pl-[5px] w-[11%]' />PM:<input onChange={(e) => { setPM(e.target.value) }} type='text' className='ml-[7px] pl-[5px] w-[10%]' /></span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} className='text-start font-normal '>
                                <span className='ml-[7px]' >TRAINING STAGE (For Initial F/O only ):</span>
                                <input checked={Stage1} onChange={(e) => { setStage1(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage1-checkBox' type='checkbox' className='ml-[2%] mr-[5px] text-black items-center' />
                                <label htmlFor='Stage1-checkBox'>Stage1</label>
                                <input checked={Stage2} onChange={(e) => { setStage2(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage2-checkBox' type='checkbox' className='ml-[5%] mr-[5px] text-black items-center' />
                                <label htmlFor='Stage2-checkBox'>Stage2</label>
                                <input checked={Stage3} onChange={(e) => { setStage3(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage3-checkBox' type='checkbox' className='ml-[5%] mr-[5px] text-black items-center' />
                                <label htmlFor='Stage3-checkBox'>Stage3</label>
                                <input checked={Stage4} onChange={(e) => { setStage4(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage4-checkBox' type='checkbox' className='ml-[5%] mr-[5px] text-black items-center' />
                                <label htmlFor='Stage4-checkBox'>Stage4</label>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4} className='text-start font-normal '>
                                <span className='ml-[7px]'>Course Type:</span>
                                <input checked={INIT} onChange={(e) => { setINIT(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='INIT-checkBox' type='checkbox' className='ml-[2%] mr-[5px] text-black items-center' />
                                <label htmlFor='INIT-checkBox'>INIT.</label>
                                <input checked={TRANS} onChange={(e) => { setTRANS(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='TRANS-checkBox' type='checkbox' className='ml-[10%] mr-[5px] text-black items-center' />
                                <label htmlFor='TRANS-checkBox'>TRANS.</label>
                                <input checked={UPGRADE} onChange={(e) => { setUPGRADE(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='UPGRADE-checkBox' type='checkbox' className='ml-[10%] mr-[5px] text-black items-center' />
                                <label htmlFor='UPGRADE-checkBox'>UPGRADE.</label>
                                <input checked={NEWHIRE} onChange={(e) => { setNEWHIRE(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='NEWHIRE-checkBox' type='checkbox' className='ml-[10%] mr-[5px] text-black items-center' />
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
                            <td className='text-center font-black w-[5%]' onClick={() => { setE1(!E1) }}>
                                <span className=' border-l-1 border-l-black '>{E1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className='text-start font-black w-[50%] bg-slate-200 '>
                                <span className='ml-[7px]'>A-Dispatch</span></td>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px] '>Descent planning</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setE2(!E2) }}>
                                <span className=' border-l-1 border-l-black '>{E2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-bold w-[45%] text-[10px]'>
                                <span className='ml-[7px]'>Inspection on personal Licence for currency </span>
                            </td>
                            <td className='text-center font-black w-[5%]'
                                onClick={() => {
                                    setA1(!A1);
                                }}>
                                <span className=' border-l-1 border-l-black '>{A1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td className='text-start font-normal w-[45%] ' >
                                <span className='ml-[7px] '>Approach briefing, Stars and </span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setE3(!E3) }}>
                                <span className=' border-l-1 border-l-black '>{E3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] ' >
                                <span className='ml-[7px]'>Computerized and ATC flight plan </span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setA2(!A2) }}>
                                <span className=' border-l-1 border-l-black '>{A2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px] '>Approaches:</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setE4(!E4) }}>
                                <span className=' border-l-1 border-l-black '>{E4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Weather briefing </span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setA3(!A3) }}>
                                <span className=' border-l-1 border-l-black '>{A3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td colSpan={2} className='text-start font-black w-[50%] bg-slate-200  '>
                                <span className='ml-[7px] '>F-LANDING AND TAXI IN</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Alternate planning Wx min </span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setA4(!A4) }}>
                                <span className=' border-l-1 border-l-black '>{A4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px] '>Landing technique</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setF1(!F1) }}>
                                <span className=' border-l-1 border-l-black '>{F1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>NOTAM briefing</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setA5(!A5) }}>
                                <span className=' border-l-1 border-l-black '>{A5 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px] '>X-Wind Landing</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setF2(!F2) }}>
                                <span className=' border-l-1 border-l-black '>{F2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Cabin crew safety briefing</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setA6(!A6) }}>
                                <span className=' border-l-1 border-l-black '>{A6 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px] '>Use of Auto brakes and reverse thrust</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setF3(!F3) }}>
                                <span className=' border-l-1 border-l-black '>{F3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} className='text-start font-black w-[50%] bg-slate-200 '>
                                <span className='ml-[7px]'>B-Cockpit</span></td>
                            <td className='text-start font-black w-[45%] '>
                                <span className='ml-[7px] '>After landing and Taxi in procedures</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setF4(!F4) }}>
                                <span className=' border-l-1 border-l-black '>{F4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start leading-tight font-normal w-[45%] tracking-widest'>
                                <span className='ml-[7px] mr-[15px]'>Tech. Log. B snags & Effect on T.O/LDG performance</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setB1(!B1) }}>
                                <span className=' border-l-1 border-l-black '>{B1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td colSpan={2} className='text-start align-top font-black w-[45%] bg-slate-200  '>
                                <span className='ml-[7px] '>G-Flying Skills and Management</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Aircraft library and documentation - EFB</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setB2(!B2) }}>
                                <span className=' border-l-1 border-l-black '>{B2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px] '>Compliance with SOP</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setG1(!G1) }}>
                                <span className=' border-l-1 border-l-black '>{G1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Inspection of Manuals for currency</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setB3(!B3) }}>
                                <span className=' border-l-1 border-l-black '>{B3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px] '>Use of FMGS</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setG2(!G2) }}>
                                <span className=' border-l-1 border-l-black '>{G2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Cockpit preperation - FMGS set up</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setB4(!B4) }}>
                                <span className=' border-l-1 border-l-black '>{B4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px] '>Aircraft configuration, Altitude & Speed Control</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setG3(!G3) }}>
                                <span className=' border-l-1 border-l-black '>{G3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>FANS B+ & CPDLC</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setB5(!B5) }}>
                                <span className=' border-l-1 border-l-black '>{B5 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px] '>Flying accuracy & Smoothness</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setG4(!G4) }}>
                                <span className=' border-l-1 border-l-black'>{G4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Take-off briefing</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setB6(!B6) }}>
                                <span className=' border-l-1 border-l-black '>{B6 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px] '>Planning ahead</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setG5(!G5) }}>
                                <span className=' border-l-1 border-l-black '>{G5 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Load & Trim sheet</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setB7(!B7) }}>
                                <span className=' border-l-1 border-l-black '>{B7 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px] '>Adherence to clearances and safe heights</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setG6(!G6) }}>
                                <span className=' border-l-1 border-l-black '>{G6 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>T.O preformance. T.O speeds and C.G</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setB8(!B8) }}>
                                <span className=' border-l-1 border-l-black '>{B8 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px] '>Situational awareness</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setG7(!G7) }}>
                                <span className=' border-l-1 border-l-black '>{G7 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Engine start procedures</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setB9(!B9) }}>
                                <span className=' border-l-1 border-l-black '>{B9 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
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
                            <td className='text-center font-black w-[5%]' onClick={() => { setCRM(!CRM) }}>
                                <span className=' border-l-1 border-l-black '>{CRM === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Push back procedures </span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setC1(!C1) }}>
                                <span className=' border-l-1 border-l-black '>{C1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td colSpan={2} className='text-start font-black w-[45%] bg-slate-200  '>
                                <span className='ml-[7px] '>2-KNOWLEDGE CHECK</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Taxi Speed and bracking technique </span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setC2(!C2) }}>
                                <span className=' border-l-1 border-l-black '>{C2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td colSpan={2} className='text-center font-normal w-[50%]'>
                                <span className='ml-[7px] '>Discussed Items</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>T.O roll and V1 concept </span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setC3(!C3) }}>
                                <span className=' border-l-1 border-l-black '>{C3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                            <td rowSpan={14} colSpan={2} className='text-center font-normal w-[50%]'>
                                <textarea rows={16} onChange={(e) => { setDiscussedItems(e.target.value) }} className='pl-[5px] w-[100%] resize-none' />
                                {/* <SignatureComponent ref={sign => signObj = sign}>
                                    
                                </SignatureComponent>
                                <ButtonComponent onClick={Clear}>Clear</ButtonComponent> */}
                                {/* <div className='border-[1px] border-solid border-black w-[300px]'>
                                <SignaturePad ref={signPad}/>
                                <button onClick={Clear}>Clear</button>
                                </div> */}
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>X- Wind T/O </span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setC4(!C4) }}>
                                <span className=' border-l-1 border-l-black '>{C4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Noise abatement procedure and initial climb</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setC5(!C5) }}>
                                <span className=' border-l-1 border-l-black '>{C5 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Best angle, Best rate and turbulance speeds </span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setC6(!C6) }}>
                                <span className=' border-l-1 border-l-black '>{C6 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Area departure, SID</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setC7(!C7) }}>
                                <span className=' border-l-1 border-l-black '>{C7 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
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
                            <td className='text-center font-black w-[5%]' onClick={() => { setD1(!D1) }}>
                                <span className=' border-l-1 border-l-black '>{D1 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Opt. Alt, cruise speed schedule</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setD2(!D2) }}>
                                <span className=' border-l-1 border-l-black '>{D2 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>FANS B+ & CPDLC</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setD3(!D3) }}>
                                <span className=' border-l-1 border-l-black '>{D3 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Step climb and fuel saving</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setD4(!D4) }}>
                                <span className=' border-l-1 border-l-black '>{D4 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Use of Weather radar and weather avoidance</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setD5(!D5) }}>
                                <span className=' border-l-1 border-l-black '>{D5 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Drift down procedure</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setD6(!D6) }}>
                                <span className=' border-l-1 border-l-black '>{D6 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Enroute alternate</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setD7(!D7) }}>
                                <span className=' border-l-1 border-l-black '>{D7 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start font-normal w-[45%] '>
                                <span className='ml-[7px]'>Use of Ecam</span>
                            </td>
                            <td className='text-center font-black w-[5%]' onClick={() => { setD8(!D8) }}>
                                <span className=' border-l-1 border-l-black '>{D8 === true ? <FontAwesomeIcon icon={faCheck} /> : ``}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className='text-[10px] mb-[20px]'><span className='font-black'>Note:</span> Stage 1 (4 sectors PM), Stage 2 (40 hrs), Stage 3 (40 hrs), Stage 4 (20 hrs)</p>
                {/* <FLIGHT_DETAILS signPadTrainee={signPadTrainee} signPadIP={signPadIP} signPadTM={signPadTM}/> */}
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Submit Confirmation
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Are You Sure About Sending The Form ?
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="text-[#470d67] bg-[#fd8503] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => {
                                            Submit()
                                            setShowModal(false)
                                        }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default LINE_TRANING_FORM
