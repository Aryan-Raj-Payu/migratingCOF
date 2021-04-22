import React, { useEffect, useState, memo } from 'react'
// import ImageCroper from 'components/utils/ImageCroperFun'
import ImageCroper from 'components/utils/ImageCroper'
import SelfiComponent from 'components/application-flow/address/SelfiComponent'

import { section } from 'styles/base/page.module.scss'

const SelfiContainer = (props) => {
  const [data, setData] = useState({ showCamera: true, showCroper: false, image: '' })

  useEffect(() => {}, [])
  const offCameraRecieveImg = (img) => {
    setData({ ...data, showCamera: false, showCroper: true, image: img })
  }

  const retake = () => {
    setData({ showCamera: true, showCroper: false, image: '' })
  }

  return (
    <>
      {/* <section className={section}> */}
      {data.showCamera && (
        <>
          <SelfiComponent offCameraRecieveImg={offCameraRecieveImg} />
        </>
      )}
      {data.showCroper && (
        <div>{<ImageCroper image={data.image} retake={retake} checkApi={props.checkApi} />}</div>
      )}
      {/* </section> */}
    </>
  )
}

export default memo(SelfiContainer)
