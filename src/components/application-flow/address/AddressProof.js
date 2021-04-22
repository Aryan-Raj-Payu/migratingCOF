import React, { useRef, useState } from 'react'

import Button from 'components/elements/Button'

import {
  title,
  currentAddress,
  footer,
  subText,
  addressContainer,
  addressProof,
  option,
  radioButton,
  recommended,
  visible,
  iconAddress,
  parent,
  section,
  text
} from 'styles/address/addressproof.module.scss'
import RadioInput from 'components/elements/inputs/RadioInput'
import ICHome from 'components/icons/ICHome'
// import UtilityInfo from './UtilityInfo'
import UtilityInfoTest from './UtilityInfoTest'

const AddressProof = () => {
  const [state, setState] = useState({ showProof: true, showUtility: false, proofValue: '' })
  const box1 = useRef()
  const box2 = useRef()
  const box3 = useRef()
  const box4 = useRef()
  const box5 = useRef()
  const box6 = useRef()
  const box7 = useRef()
  const boxArray = [
    ['box1', box1],
    ['box2', box2],
    ['box3', box3],
    ['box4', box4],
    ['box5', box5],
    ['box6', box6],
    ['box7', box7]
  ]
  const isVisible = (box, proofValue) => {
    boxArray.map((value) => {
      if (box == value[0]) {
        // box1.current.style.display = "block";
        value[1].current.style.display = 'block'
      } else {
        value[1].current.style.display = 'none'
      }
    })
    setState({ ...state, proofValue })
  }
  const uploadProofApi = () => {
    setState({ ...state, showProof: false, showUtility: true })
    console.log(state.proofValue)
  }
  return (
    <>
      {state.showProof && (
        <div className={parent}>
          <section className={section}>
            <div className={title}>Select address proof</div>

            <div className={addressContainer}>
              <div className={text}>Your current address </div>

              <div className={currentAddress}>
                {/* <div > </div> */}
                <div className={subText}>
                  <div>
                    <ICHome />
                  </div>
                  <div className={iconAddress}>
                    1789, NR HUDA Park, Sector 57, Wazirabad, Gurugram, Haryana 122003
                  </div>
                </div>
              </div>
            </div>

            <div className={addressProof}>
              <div className={radioButton}>
                <RadioInput name="radio" onClick={() => isVisible('box1', 'UTILITY_BILL')} />
              </div>
              <div className={option}>
                Latest utility bill <div className={recommended}> Recommended</div>
                <div className={visible} ref={box1}>
                  <ol>
                    <li>Electricity/Postpaid Mobile /Piped Gas / Broadband / LPG / Water bill</li>
                    <li>The bill should be from last 2 months</li>
                  </ol>
                </div>
              </div>
            </div>

            <div className={addressProof}>
              <div className={radioButton}>
                <RadioInput name="radio" onClick={() => isVisible('box2', 'BANK_STATEMENT')} />
              </div>

              <div className={option}>
                Bank statement
                <div className={visible} ref={box2}>
                  <ol>
                    <li>Bank passbook / cheque</li>
                    <li>The bill should be from last 2 months</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className={addressProof}>
              <div className={radioButton}>
                <RadioInput name="radio" onClick={() => isVisible('box3', 'DRIVING_LICENCE')} />
              </div>
              <div className={option}>
                Driving license
                <div className={visible} ref={box3}>
                  <ol>
                    <li> Driving license</li>
                    <li>The bill should be from last 2 months</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className={addressProof}>
              <div className={radioButton}>
                <RadioInput name="radio" onClick={() => isVisible('box4', 'VOTER_ID_CARD')} />
              </div>
              <div className={option}>
                Voter id card
                <div className={visible} ref={box4}>
                  <ol>
                    <li>Voter id card/Adhar card/Pan card</li>
                    <li>The bill should be from last 2 months</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className={addressProof}>
              <div className={radioButton}>
                <RadioInput name="radio" onClick={() => isVisible('box5', 'RENT_AGREEMENT')} />
              </div>
              <div className={option}>
                Rent aggrement + Latest utility bill
                <div className={visible} ref={box5}>
                  <ol>
                    <li>Electricity/Postpaid Mobile /Piped Gas / Broadband / LPG / Water bill</li>
                    <li>The bill should be from last 2 months</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className={addressProof}>
              <div className={radioButton}>
                <RadioInput name="radio" onClick={() => isVisible('box6', 'PASSPORT')} />
              </div>
              <div className={option}>
                Passport
                <div className={visible} ref={box6}>
                  <ol>
                    <li>Passport / Visa </li>
                    <li>The bill should be from last 2 months</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className={addressProof}>
              <div className={radioButton}>
                <RadioInput name="radio" onClick={() => isVisible('box7', 'ALOTMENT_LETTER')} />
              </div>
              <div className={option}>
                Letter of allotment of accommodation
                <div className={visible} ref={box7}>
                  <ol>
                    <li>Electricity/Postpaid Mobile /Piped Gas / Broadband / LPG /</li>
                    <li>The bill should be from last 2 months</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className={footer}>
              <div>
                <Button
                  variant="Primary"
                  size="Large"
                  customClass="btnBlock"
                  onClick={uploadProofApi}>
                  Upload proof
                </Button>
              </div>
            </div>
          </section>
        </div>
      )}

      {state.showUtility && <UtilityInfoTest proofValue={state.proofValue} />}
    </>
  )
}

export default AddressProof
