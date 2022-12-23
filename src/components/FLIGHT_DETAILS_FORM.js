import React, { useRef, useState, useEffect } from 'react'
import { useReactToPrint } from 'react-to-print';
import SignaturePad from 'react-signature-canvas'
import { SignatureComponent, Signature } from '@syncfusion/ej2-react-inputs'
import { ButtonComponent } from '@syncfusion/ej2-react-buttons'
import Navbar from './Navbar';
import api from '../api/items.js'
import { useNavigate } from "react-router-dom"
import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong } from '@fortawesome/free-solid-svg-icons'


const FLIGHT_DETAILS = () => {
    const navigate = useNavigate()


    const [Date, setDate] = useState(``)
    const [FlightDetails, setFlightDetails] = useState(``)

    const [SecNoPF1, setSecNoPF1] = useState(``)
    const [SecNoPF2, setSecNoPF2] = useState(``)
    const [SecNoPF3, setSecNoPF3] = useState(``)
    const [SecNoPF4, setSecNoPF4] = useState(``)

    const [FromPF1, setFromPF1] = useState(``)
    const [FromPF2, setFromPF2] = useState(``)
    const [FromPF3, setFromPF3] = useState(``)
    const [FromPF4, setFromPF4] = useState(``)

    const [ToPF1, setToPF1] = useState(``)
    const [ToPF2, setToPF2] = useState(``)
    const [ToPF3, setToPF3] = useState(``)
    const [ToPF4, setToPF4] = useState(``)

    const [DPF1, setDPF1] = useState(``)
    const [DPF2, setDPF2] = useState(``)
    const [DPF3, setDPF3] = useState(``)
    const [DPF4, setDPF4] = useState(``)

    const [NPF1, setNPF1] = useState(``)
    const [NPF2, setNPF2] = useState(``)
    const [NPF3, setNPF3] = useState(``)
    const [NPF4, setNPF4] = useState(``)

    const [TPF1, setTPF1] = useState(``)
    const [TPF2, setTPF2] = useState(``)
    const [TPF3, setTPF3] = useState(``)
    const [TPF4, setTPF4] = useState(``)

    const [TypePF1, setTypePF1] = useState(``)
    const [TypePF2, setTypePF2] = useState(``)
    const [TypePF3, setTypePF3] = useState(``)
    const [TypePF4, setTypePF4] = useState(``)

    const [SecNoPM1, setSecNoPM1] = useState(``)
    const [SecNoPM2, setSecNoPM2] = useState(``)
    const [SecNoPM3, setSecNoPM3] = useState(``)
    const [SecNoPM4, setSecNoPM4] = useState(``)

    const [FromPM1, setFromPM1] = useState(``)
    const [FromPM2, setFromPM2] = useState(``)
    const [FromPM3, setFromPM3] = useState(``)
    const [FromPM4, setFromPM4] = useState(``)

    const [ToPM1, setToPM1] = useState(``)
    const [ToPM2, setToPM2] = useState(``)
    const [ToPM3, setToPM3] = useState(``)
    const [ToPM4, setToPM4] = useState(``)

    const [DPM1, setDPM1] = useState(``)
    const [DPM2, setDPM2] = useState(``)
    const [DPM3, setDPM3] = useState(``)
    const [DPM4, setDPM4] = useState(``)

    const [NPM1, setNPM1] = useState(``)
    const [NPM2, setNPM2] = useState(``)
    const [NPM3, setNPM3] = useState(``)
    const [NPM4, setNPM4] = useState(``)

    const [TPM1, setTPM1] = useState(``)
    const [TPM2, setTPM2] = useState(``)
    const [TPM3, setTPM3] = useState(``)
    const [TPM4, setTPM4] = useState(``)

    const [TypePM1, setTypePM1] = useState(``)
    const [TypePM2, setTypePM2] = useState(``)
    const [TypePM3, setTypePM3] = useState(``)
    const [TypePM4, setTypePM4] = useState(``)

    const [TotalTodayTime1, setTotalTodayTime1] = useState(``)
    const [TotalTodayTime2, setTotalTodayTime2] = useState(``)

    const [PreviousTime1, setPreviousTime1] = useState(``)
    const [PreviousTime2, setPreviousTime2] = useState(``)

    const [TotalAccTime1, setTotalACCTIME1] = useState(``)
    const [TotalAccTime2, setTotalACCTIME2] = useState(``)

    const [TotalTodaySectors1, setTotalTodaySectors1] = useState(``)
    const [TotalTodaySectors2, setTotalTodaySectors2] = useState(``)

    const [PreviousSectors1, setPreviousSectors1] = useState(``)
    const [PreviousSectors2, setPreviousSectors2] = useState(``)

    const [TotalAccSector1, setTotalACCSECTOR1] = useState(``)
    const [TotalAccSector2, setTotalACCSECTOR2] = useState(``)

    const [GrandTotalTime, setGrandTotalTime] = useState(``)
    const [GrandTotalSector, setGrandTotalSector] = useState(``)

    const [InstructorNotes, setInstructorNotes] = useState(``)

    const [Stage1, setStage1] = useState(false)
    const [Stage2, setStage2] = useState(false)
    const [Stage3, setStage3] = useState(false)
    const [Stage4, setStage4] = useState(false)
    const [Stage5, setStage5] = useState(false)

    const [CC, setCC] = useState(``)
    const [SA, setSA] = useState(``)
    const [LM, setLM] = useState(``)
    const [DM, setDM] = useState(``)
    const [A, setA] = useState(``)
    const [P, setP] = useState(``)
    const [M, setM] = useState(``)
    const [K, setK] = useState(``)

    const [signPadTraineeData, setsignPadTraineeData] = useState(``)
    const [signPadIPData, setPadIPData] = useState(``)
    const [signPadTMData, setPadTMData] = useState(``)




    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const Print = () => {
        handlePrint()
    }

    // let signPadTrainee = useRef({})
    // const ClearTrainee = () => {
    //     signPadTrainee.current.clear()
    // }
    // let signPadIP = useRef({})
    // const ClearIP = () => {
    //     signPadIP.current.clear()
    // }

    // let signPadTM = useRef({})
    // const ClearTM = () => {
    //     signPadTM.current.save()
    // }

    let signPadTrainee = Signature || null
    const ClearTrainee = () => {
        signPadTrainee.clear()
    }
    let signPadIP = Signature || null
    const ClearIP = () => {
        signPadIP.clear()
    }
    let signPadTM = Signature || null
    const ClearTM = () => {
        signPadTM.clear()
        // signPadTM.save()
        console.log(signPadTM.signatureValue)
        // console.log(signPadTM)
    }

    const ConsoleTrainee = () => {
        console.log(signPadTrainee.signatureValue)

    }
    const ConsoleIP = () => {
        console.log(signPadIP.signatureValue)

    }
    const ConsoleTM = () => {
        console.log(signPadTM.signatureValue)
    }

    useEffect(() => {
        GetUserData()
    }, [])

    const [UserData, setUserData] = useState([])


    const GetUserData = async () => {

        const response = await api.get('/User/UserData', { params: { UserId: localStorage.getItem(`UserId`) } })
        if (response.data.length > 0 && response.data[0].role === '2') {
            setUserData(response.data)
        } else {
            navigate(`/`)
        }
    }

    const Submit = async () => {

        await api.post('/Forms/ADD_FLIGHT_DETAILS_FORM', {
            User_Id: UserData[0]._id,
            User_Name: UserData[0].Full_Name,
            FlightDetails,
            Date,

            SecNoPF1,
            SecNoPF2,
            SecNoPF3,
            SecNoPF4,

            FromPF1,
            FromPF2,
            FromPF3,
            FromPF4,

            ToPF1,
            ToPF2,
            ToPF3,
            ToPF4,

            DPF1,
            DPF2,
            DPF3,
            DPF4,

            NPF1,
            NPF2,
            NPF3,
            NPF4,

            TPF1,
            TPF2,
            TPF3,
            TPF4,

            TypePF1,
            TypePF2,
            TypePF3,
            TypePF4,

            SecNoPM1,
            SecNoPM2,
            SecNoPM3,
            SecNoPM4,

            FromPM1,
            FromPM2,
            FromPM3,
            FromPM4,

            ToPM1,
            ToPM2,
            ToPM3,
            ToPM4,

            DPM1,
            DPM2,
            DPM3,
            DPM4,

            NPM1,
            NPM2,
            NPM3,
            NPM4,

            TPM1,
            TPM2,
            TPM3,
            TPM4,

            TypePM1,
            TypePM2,
            TypePM3,
            TypePM4,

            TotalTodayTime1,
            TotalTodayTime2,

            PreviousTime1,
            PreviousTime2,

            TotalAccTime1,
            TotalAccTime2,

            TotalTodaySectors1,
            TotalTodaySectors2,

            PreviousSectors1,
            PreviousSectors2,

            TotalAccSector1,
            TotalAccSector2,

            GrandTotalTime,
            GrandTotalSector,

            InstructorNotes,

            Stage1,
            Stage2,
            Stage3,
            Stage4,
            Stage5,

            CC,
            SA,
            LM,
            DM,
            A,
            P,
            M,
            K,

            signPadTraineeData,
            signPadIPData,
            signPadTMData,
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
            <button onClick={() => {
               setsignPadTraineeData(signPadTrainee.signatureValue)
                setPadIPData(signPadIP.signatureValue)
                setPadTMData(signPadTM.signatureValue)

                setShowModal(true)
            }} className='fixed top-[110px] left-0 bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Submit</button>
            <div ref={componentRef} className='container mx-auto ' style={{ width: 21 + 'cm', height: 25.7 + 'cm' }}>
                <div className='flex justify-center mt-[20px]'>
                    <img alt='Air-Cairo-logo' className='w-[17%]' src='./air-cairo.png' />
                </div>
                <table className=' text-[13px] text-start' >
                    <tbody>
                        <tr className='border-left-top-right-hidden'>
                            <td colSpan={4} className='border-0 w-[100%] text-start text-[13px] font-normal'>
                                <span>Date: <input onChange={(e) => { setDate(e.target.value) }} type='text' className='pl-[7px] text-start w-[150px]' /> </span>
                            </td>
                            <td colSpan={8} className='border-0 w-[100%] text-[14px] text-center font-black'>
                                <span>FLIGHT DETAILS:<input onChange={(e) => { setFlightDetails(e.target.value) }} type='text' className='pl-[7px] font-normal text-start w-[200px]' /></span>
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
                                <input onChange={(e) => { setSecNoPF1(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPF1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPF1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPF1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPF1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTPF1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePF1(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPM1(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPM1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPM1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPM1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPM1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTPM1(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePM1(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPF2(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPF2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPF2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPF2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPF2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTPF2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePF2(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPM2(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPM2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPM2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPM2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPM2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTPM2(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePM2(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPF3(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPF3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTPF3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPF3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPF3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPF3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePF3(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPM3(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPM3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPM3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPM3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPM3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTPM3(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePM3(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                        </tr>
                        <tr>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPF4(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPF4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPF4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPF4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPF4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTPF4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePF4(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setSecNoPM4(e.target.value) }} type='text' className='text-center w-[20px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setFromPM4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setToPM4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setDPM4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setNPM4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[8%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTPM4(e.target.value) }} type='text' className='text-center w-[40px]' />
                            </td>
                            <td className='text-center font-medium text-[12px] w-[5%] sm:h-[35px] lg:h-[42px]'>
                                <input onChange={(e) => { setTypePM4(e.target.value) }} type='text' className='text-center w-[20px]' />
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
                                <input onChange={(e) => { setTotalTodayTime1(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalTodayTime2(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td rowSpan={3} colSpan={4} className='text-center font-medium text-[12px]  w-[32%] '>
                                <span >GRAND TOTAL TIME</span>
                                <textarea rows={3} onChange={(e) => { setGrandTotalTime(e.target.value) }} className='text-center  pl-[5px] w-[100%] resize-none' />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                <span className='pl-[5px]' >PREVIOUS TIME</span>
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setPreviousTime1(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setPreviousTime2(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                <span className='pl-[5px]'>TOTAL ACC.TIME:</span>
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalACCTIME1(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalACCTIME2(e.target.value) }} type='text' className='text-center w-[100px]' />
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
                                <input onChange={(e) => { setTotalTodaySectors1(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalTodaySectors2(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td rowSpan={3} colSpan={4} className='text-center font-medium text-[12px]  w-[32%] '>
                                <span >GRAND TOTAL SECTOR</span>
                                <textarea onChange={(e) => { setGrandTotalSector(e.target.value) }} rows={3} className='text-center  pl-[5px] w-[100%] resize-none' />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                <span className='pl-[5px]' >PREVIOUS SECTORS:</span>
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setPreviousSectors1(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setPreviousSectors2(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3} className='text-start font-medium text-[12px] w-[24%]'>
                                <span className='pl-[5px]'>TOTAL ACC.SECTORS:</span>
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalACCSECTOR1(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                            <td colSpan={3} className='text-center font-medium text-[12px] w-[24%]'>
                                <input onChange={(e) => { setTotalACCSECTOR2(e.target.value) }} type='text' className='text-center w-[100px]' />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='text-start  w-[100%]'>
                    <span className='underline pl-[5px] font-black text-[14px]'>INSTRUCTOR NOTES</span>
                    <textarea onChange={(e) => { setInstructorNotes(e.target.value) }} rows={6} className='border-[4px] border-double border-black text-start pl-[5px] w-[100%] resize-none' />
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
                                        <input checked={Stage1} onChange={(e) => { setStage1(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage1-checkBox' type='checkbox' className=' text-black items-center' />
                                        <label className='ml-[6%] mr-[5px]' htmlFor='Stage2-checkBox'>S2</label>
                                        <input checked={Stage2} onChange={(e) => { setStage2(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage2-checkBox' type='checkbox' className=' text-black items-center' />
                                        <label className='ml-[6%] mr-[5px]' htmlFor='Stage3-checkBox'>S3</label>
                                        <input checked={Stage3} onChange={(e) => { setStage3(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage3-checkBox' type='checkbox' className=' text-black items-center' />
                                        <label className='ml-[6%] mr-[5px]' htmlFor='Stage4-checkBox'>S4</label>
                                        <input checked={Stage4} onChange={(e) => { setStage4(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage4-checkBox' type='checkbox' className=' text-black items-center' />
                                        <label className='ml-[6%] mr-[5px]' htmlFor='Stage5-checkBox'>S5</label>
                                        <input checked={Stage5} onChange={(e) => { setStage5(e.target.checked) }} style={{ transform: 'translateY(2px)' }} id='Stage5-checkBox' type='checkbox' className=' text-black items-center' />
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
                                    <input onChange={(e) => { setCC(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[50%]'>
                                    <span className='pl-[5px]' >(SA) Situation Awareness</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[5%]' >
                                    <input onChange={(e) => { setSA(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[40%]'>
                                    <span className='pl-[5px]' >(LM) - Leadership & managerial skills</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[5%]' >
                                    <input onChange={(e) => { setLM(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[50%]'>
                                    <span className='pl-[5px]' >(DM) Decision Making</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[50%]' >
                                    <input onChange={(e) => { setDM(e.target.value) }} type='text' className='text-center w-[30px]' />
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
                                    <input onChange={(e) => { setA(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[50%]'>
                                    <span className='pl-[5px]'>(P) Procedure Adherence & Execution</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[5%]' >
                                    <input onChange={(e) => { setP(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[40%]'>
                                    <span className='pl-[5px]'>(M) Flight path management - Manual</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[5%]' >
                                    <input onChange={(e) => { setM(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                                <td colSpan={1} className='text-start bg-slate-200 font-medium text-[14px] w-[50%]'>
                                    <span className='pl-[5px]'>(K) Knowledge</span>
                                </td>
                                <td colSpan={1} className='text-center font-medium w-[5%]' >
                                    <input onChange={(e) => { setK(e.target.value) }} type='text' className='text-center w-[30px]' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex flex-row justify-between text-center font-bold text-[12px]'>
                        <div className='flex flex-col'>
                            <p className='pl-[10px]'>Trainee</p>
                            <p className='pl-[10px] underline'>Name/Signature</p>
                            <span className='border-[1px] border-solid border-black overflow-hidden w-[250px]  h-[120px] '>
                                {/* <SignaturePad ref={signPadTrainee} /> */}
                                <SignatureComponent ref={sign => signPadTrainee = sign}
                                    backgroundColor='white'
                                    strokeColor='black'
                                >
                                </SignatureComponent>
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <p className='pl-[10px]'>IO/CA/EP</p>
                            <p className='pl-[10px] underline'>Name/Signature</p>
                            <span className='border-[1px] border-solid border-black overflow-hidden w-[250px]  h-[120px] '>
                                {/* <SignaturePad ref={signPadIP} /> */}
                                <SignatureComponent ref={sign => signPadIP = sign}
                                    backgroundColor='white'
                                    strokeColor='black'
                                >
                                </SignatureComponent>
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <p className='pl-[10px]'>Training Manager</p>
                            <p className='pl-[10px] underline'>Name/Signature</p>
                            <span className='border-[1px] border-solid border-black overflow-hidden w-[250px]  h-[120px] '>
                                {/* <SignaturePad ref={signPadTM} /> */}
                                <SignatureComponent ref={sign => signPadTM = sign}
                                    backgroundColor='white'
                                    strokeColor='black'
                                    velocity={1}
                                    maxStrokeWidth={1}
                                >
                                </SignatureComponent>
                                {/* <img className='w-[250px]  h-[120px]'
                                 src='data:image/png;base64,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'
                                 /> */}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: 21 + 'cm' }} className='container mx-auto flex flex-row justify-between text-center font-bold text-[12px]'>
                <button onClick={() => { ClearTrainee() }} className=' ml-[12%] bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Clear</button>
                <button onClick={() => { ClearIP() }} className=' bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Clear</button>
                <button onClick={() => { ClearTM() }} className='mr-[12%] bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Clear</button>
            </div>
            {/* <div style={{ width: 21 + 'cm' }} className='container mx-auto flex flex-row justify-between text-center font-bold text-[12px]'>
                <button onClick={() => { ConsoleTrainee() }} className=' ml-[12%] bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Console</button>
                <button onClick={() => { ConsoleIP() }} className=' bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Console</button>
                <button onClick={() => { ConsoleTM() }} className='mr-[12%] bg-[#470d67] text-[#fd8503] font-bold py-2 px-4 border  rounded'>Console</button>
            </div> */}
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

export default FLIGHT_DETAILS
