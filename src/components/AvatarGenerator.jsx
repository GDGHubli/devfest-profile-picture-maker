import classNames from 'classnames';
import React, { useRef, useState } from 'react'

const Wrapper = ({children, ...restOfTheProps}) => (
  <div 
    {...restOfTheProps}
    className={classNames("lg:w-3/4 w-full p-16 border-2 border-dashed border-gray-400 hover:border-gray-900 transition hover:shadow-md cursor-pointer bg-gray-50", restOfTheProps.className)}
  >
    {children}
  </div>
)

// Step 1
function ImageUploader(props) {
  const { nextStep } = props;
  const photoInputRef = useRef(null);
  
  return (
    <Wrapper 
      // Undo this later
      // onClick={() => {
      //   photoInputRef.current.click();
      // }}
      onClick={nextStep}
      className="text-center"
    >
    <input type="file" ref={photoInputRef} className="hidden" />
    
      <h1 className="text-5xl font-semibold">Drop your photo here</h1>
      <p className="my-4 text-xl">or click to select one</p>

      <hr className="my-8" />

      <p className="w-3/4 mx-auto leading-loose">
        We suggest you upload an image with dimension of
        600 * 600 px at least. Only png, jpg and jpeg
        format images are supported. You can crop the
        images in next step, feel free to upload any
        image
      </p>
    </Wrapper>
  )
}

// Step 2
function UserDetails(props) {
  const { nextStep } = props;
  const gdgInputRef = useRef(null);
  
  return (
    <Wrapper>
      <h1 className="text-2xl">Which GDG’s DevFest are you attending?</h1>
      <input 
        type="text" 
        ref={gdgInputRef} 
        placeholder="Ex: GDG Hubli" 
        className="text-4xl font-bold p-8 my-4 w-full border-1 border-gray-100" 
      />
      <div className="flex justify-between items-center">
        <p className="text-lg text-gray-600">
          We promise this is the only question we are asking you
        </p>
        <button onClick={nextStep} className="bg-gray-800 text-white text-xl py-4 px-14 hover:shadow-md rounded-sm">Submit</button>
      </div>
    </Wrapper>
  )
}

// Step 3
function PreviewAndDownload(props) {
  const { nextStep } = props;

  return (
    <div className="md:flex justify-start items-center">
      <div className="mr-10">
        <div className="w-80 h-80 bg-gray-100 rounded-full"></div>
      </div>
      
      <div>
        <h1 className="text-4xl font-bold mb-6">
          Here you go. <br />
          Thank you for using this.
        </h1>
        <hr />
        <div className="mt-4">
          <a href="https://twitter.com/intent/tweet?text=Hello%20world" className="flex items-center">
            <img src="/twitter.gif" alt="Twitter logo" className="w-8 mr-4" />
            Share this on twitter
          </a>
        </div>

        <div className="mt-6">
          <button onClick={nextStep} className="bg-gray-800 text-white text-xl py-4 px-14 hover:shadow-md rounded-sm mr-2" style={{backgroundColor: "#0D9D58"}}>Download</button>
          <button onClick={nextStep} className="bg-gray-800 text-white text-xl py-4 px-14 hover:shadow-md rounded-sm" style={{backgroundColor: "#4285F4"}}>Generate another image</button>
        </div>
        
      </div>
    </div>
  )
}

export default function AvatarGenerator() {
  const [step, setStep] = useState(0);
console.log(step)
  const nextStep = () => {
    if (step === 2) {
      setStep(0);
      return;
    }
    setStep(step + 1)
  }
  
  if (step === 2) {
    return <PreviewAndDownload nextStep={nextStep} />
  }

  if (step === 1) {
    return <UserDetails nextStep={nextStep} />
  }
  
  return <ImageUploader nextStep={nextStep} />
}
