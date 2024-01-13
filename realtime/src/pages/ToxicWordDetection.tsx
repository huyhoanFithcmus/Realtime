import * as toxicityClassifier from '@tensorflow-models/toxicity'
import { useEffect, useState } from 'react'

const ToxicWordDetection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [model, setModel] = useState<any>(null)
  const [text, setText] = useState<string>('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [predictions, setPredictions] = useState<any>([])

  useEffect(() => {
    toxicityClassifier.load(0.9, []).then((loadedModel) => {
      setModel(loadedModel)
    })
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleTextChange = (e: any) => {
    setText(e.target.value)
  }

  const handlePredict = async () => {
    const predictions = await model.classify(text)
    console.log(predictions)
    setPredictions(predictions)
  }

  const labels = ['identity attack', 'insult', 'obscene', 'severe toxicity', 'sexual explicit', 'threat', 'toxicity']

  return (
    <div>
      <div className='container mx-auto p-4'>
        <h1 className='text-3xl font-bold mb-4'>Toxic Word Detection</h1>
        <h3 className='text-xl font-bold mb-4'>Notice: the word input must be in English</h3>

        <textarea
          value={text}
          onChange={handleTextChange}
          className='w-full p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500'
          placeholder='Enter text here'
          rows={10}
        />

        <button
          onClick={handlePredict}
          className='bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500'
        >
          Predict
        </button>

        <div className='mt-4'>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {predictions.map((prediction: any, index: number) => (
            <div key={prediction.label} className='flex items-center justify-between py-2 border-b border-gray-200'>
              <span className='text-gray-700'>{labels[index]}</span>
              <span
                className='text-green-500'
                style={{
                  color: prediction.results[0].match ? 'green' : 'red'
                }}
              >
                {prediction.results[0].match ? 'True' : 'False'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ToxicWordDetection
