import React from 'react'
import {Context} from "../contexts/Context"
import ImageResizer from 'react-image-file-resizer'


function Sell() {
  const {formData, handleChange , subm 
        , setSubm , image, setImage} 
        = React.useContext(Context)

  function handleSubmit(event) {
    event.preventDefault()
    localStorage.setItem('sellerName',formData.sellerName)
    localStorage.setItem('carType',formData.carType)
    localStorage.setItem('email',formData.email)
    localStorage.setItem('extraInfo',formData.extraInfo)
    localStorage.setItem('negotiation',formData.negotiation)
    localStorage.setItem('phone',formData.phone)
    localStorage.setItem('price',formData.price)
    localStorage.setItem('image',image)
    setSubm(true)
  }
    //form image handler
    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      ImageResizer.imageFileResizer(
        file,
        800,
        800,
        'JPEG',
        100,
        0,
        (uri) => {
            setImage(uri);
        },
        'base64'
      );
    }
}
  return (
    <div className='w-full bg-gray-100 p-2 pt-4 md:p-6 ' >
        <div className='font-bold mb-4 text-lg text-gray-700'>please fill selling form</div>
        <form onSubmit={handleSubmit} className='ml-2 mt-2 grid grid-cols-1 
            sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-y-6'
            >
                <input
                    className='rounded-md p-1 mb-1 w-full'
                    type="text"
                    placeholder="seller name"
                    onChange={handleChange}
                    name="sellerName"
                    required
                    value={formData.sellerName}
                />
                <input
                    className='rounded-md p-1 mb-1 w-full'
                    type="email"
                    placeholder="email"
                    onChange={handleChange}
                    name="email"
                    required
                    value={formData.email}
                />
                <input
                    className='rounded-md p-1 mb-1 w-full'
                    type="number"
                    placeholder="contact number"
                    onChange={handleChange}
                    name="phone"
                    required
                    value={formData.phone}
                />
                <input
                    className='rounded-md p-1 mb-1 w-full'
                    type="text"
                    placeholder="car's Type and model"
                    onChange={handleChange}
                    name="carType"
                    required
                    value={formData.carType}
                />
                <input
                    className='rounded-md p-1 mb-1 w-full'
                    type="number"
                    placeholder="expected price with USD"
                    onChange={handleChange}
                    name="price"
                    required
                    value={formData.price}
                />
                <div className=' bg-white flex gap-1 flex-nowrap rounded-md p-1 mb-1 w-full'>
                    <input 
                        type="checkbox" 
                        id="negotiation" 
                        checked={formData.isFriendly}
                        onChange={handleChange}
                        name="negotiation"
                        value={formData.negotiation}
                    />
                    <label
                        className='text-gray-400'
                        htmlFor="negotiation">
                        is the price negotiable?
                    </label>
                </div>
                <div className=' bg-white overflow-hidden gap-1 rounded-md p-1 mb-1 w-full'>
                    <label
                            className='text-gray-400'
                            htmlFor="negotiation">
                            pleas add the Car's image
                    </label>
                    <input 
                        type="file" 
                        required 
                        accept="image/*" 
                        onChange={handleImageChange}
                        />
                    {image && <img src={image} alt="uploaded image" />}
                </div>
                <textarea 
                    className='rounded-md p-1 mb-1 w-full '
                    value={formData.comments}
                    placeholder="add some information about the Car"
                    onChange={handleChange}
                    name="extraInfo"
                    required
                />
                <input
                    className={
                        `${subm || localStorage.getItem('email')?'bg-gray-400 ':
                        'cursor-pointer hover:shadow-lg hover:shadow-purple-800/50 bg-purple-600'}
                      text-white rounded-md p-1 sm:col-span-2 sm:mt-8 hover: md:col-span-3`
                    }
                    disabled={subm || localStorage.getItem('email')}
                    type="submit" 
                    value={subm || localStorage.getItem('email')?'Submitted,added for sell':'Submit'}
                />
            </form>
        </div>
        
    )
}

export default Sell