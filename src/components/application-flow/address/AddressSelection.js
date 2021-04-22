import React from 'react'

import Button from 'components/elements/Button'

import {
  title,
  subTitle,
  subContainer,
  footer,
  subText,
  addressContainer,
  address,
  addressValue,
  viewButton,
  viewButtonContainer,
  addressButtonContainer,
  addAddress,
  add,
  error,
  viewArrow,
  viewAll,
  parent,
  section,
  btn
} from 'styles/address/address.module.scss'

// import { section } from 'styles/base/page.module.scss'
import RadioInput from 'components/elements/inputs/RadioInput'
import ICAdd from 'components/icons/ICAdd'
import ICError from 'components/icons/ICError'
import ICArrowCavetDown from 'components/icons/ICArrowCavetDown'
import { addressSelection } from 'components/application-flow/address/AddressArray'

const AddressSelection = () => {
  return (
    <>
      <div className={parent}>
        <section className={section}>
          <div className={title}>Where are you currently living?</div>
          <div className={addressContainer}>
            <div className={subTitle}>
              Select from existing address found in your bureau records
            </div>
            {addressSelection.map((value) => {
              return (
                <>
                  <div className={address} key={value}>
                    <div>
                      <RadioInput name="address" />
                    </div>
                    <div className={addressValue}>{value}</div>
                  </div>
                </>
              )
            })}

            <div className={viewButtonContainer}>
              <button className={viewButton}>
                <div className={viewAll}>View All</div>
                <div className={viewArrow}>
                  <ICArrowCavetDown iconColor={'#999999'} />
                </div>
              </button>
            </div>
          </div>

          <div className={addressButtonContainer}>
            <div className={subTitle}> Didn&apos;t find your current address above?</div>
            <a className={addAddress}>
              <div className={add}>
                <ICAdd />
              </div>
              Add new address
            </a>
          </div>
          <div className={footer}>
            <div className={subText}>
              <div className={error}>
                <ICError />
              </div>
              Proof is required for selected address for verification.
            </div>
            <div className={btn}>
              <div>
                <Button variant="Primary" size="Large" customClass="btnBlock">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AddressSelection
