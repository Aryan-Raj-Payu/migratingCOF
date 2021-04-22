import React, { PureComponent } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import {cropContainer,
  onDesktopView,
  captureButton,
  yesButton,
  title,
  onMobileView,
  section,
  titleText,
  linktext,
  reactCrop,
  text} from 'styles/address/imagecroper.module.scss'

class ImageCroper extends PureComponent {
  state = {
    src: null,
    crop: {
      unit: '%',
      width: 50,
      height:50,
      // aspect: 16 / 9,
    },
    croperShow:true,
    imageShow:false,
  };

  onSelectFile = e => {
      console.log(this.props.image)
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    // reader.readAsDataURL(this.props.image);
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = image => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }

  hideCroper=()=>{
    this.setState({croperShow:false,imageShow:true})
    }
  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (<>
    <div className={parent}>
      <section className={section}>
     { this.state.imageShow ? <div className={titleText}>Is the image clear & text visible?</div>:
      <div className={title}>Crop the photo</div>
     }
      <div className={cropContainer}>
         

       {this.props.image && this.state.croperShow &&(<>
          <div  className={reactCrop}>
          <ReactCrop
            src={this.props.image}
            crop={crop}
            ruleOfThirds
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
            // imageStyle={{height:"400px"}}
          />
             <div className={onMobileView}>
        
               <button className={captureButton} onClick={this.props.retake}>
                  Retake
                </button>
                <button className={captureButton} onClick={this.hideCroper}>
                  Confirm
                </button>
              </div>
          </div>
          <div className={onDesktopView}>
                <button className={captureButton} onClick={this.props.retake}>
                  Retake
                </button>
                <button className={captureButton} onClick={this.hideCroper}>
                  Confirm
                </button>             
              </div>
          </>
        )} 
        {croppedImageUrl && this.state.imageShow &&(<>
            <div className={reactCrop}> 
          <img alt="Crop" style={{ width:"100%",margin:"auto" }} src={croppedImageUrl}  />
        </div>
        <div className={yesButton}>
                <button className={captureButton} onClick={this.props.checkApi}>
                  Yes, confirm
                </button>
                
                </div>
                <div style={{textAlign:"center",marginTop:"15px"}} className={text}>
                  Image not clear? <a href="" className={linktext}>upload again</a>
                  </div>

           </>
        )}
        
      </div>
      </section>
      </div>
   </> 
   );
  }
}

export default ImageCroper;