import * as mobilenet from '@tensorflow-models/mobilenet'
import { useEffect, useState } from 'react'
import NavigationBar from '~/assets/navbar/NavigationBar'

const MobileNet = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [model, setModel] = useState<any>(null)
  const [image, setImage] = useState<string>('')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [prediction, setPrediction] = useState<any>([])

  useEffect(() => {
    mobilenet.load().then((loadedModel) => {
      setModel(loadedModel)
    })
  }, [])

  const loadImage = (url: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => resolve(img)
      img.onerror = (err) => reject(err)
      img.src = url
    })
  }

  const handleImageChange = async () => {
    const img = await loadImage(image)
    const predictions = await model.classify(img)
    console.log(predictions)
    setPrediction(predictions)
  }

  return (
    <>
      <NavigationBar />
      <div>
        <div className='container mx-auto p-4'>
          <h1 className='text-3xl font-bold mb-4'>MobileNet</h1>

          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className='w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500'
            placeholder='Enter image url here'
          />

          <img src={image} alt='' className='mx-auto mt-4' style={{ width: '300px' }} />

          <button
            onClick={handleImageChange}
            className='bg-blue-500 mx-auto text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500'
          >
            Predict
          </button>

          <div className='mt-4'>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {prediction.map((prediction: any) => (
              <div
                key={prediction.className}
                className='flex items-center justify-between py-2 border-b border-gray-200'
              >
                <span className='text-gray-700'>{prediction.className}</span>
                <span className='text-green-500'>{prediction.probability.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNet
