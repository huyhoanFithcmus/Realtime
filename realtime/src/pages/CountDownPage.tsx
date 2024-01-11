import Countdown from 'react-countdown'

export default function CountDownPage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderer = ({ hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a completed state
      return (
        <>
          <h1>Suka blyah</h1>
          <h2>Bim Bim Bam Bam</h2>
          <h3>Kiến bò vào quần</h3>
        </>
      )
    } else {
      // Render a countdown
      return (
        <>
          <h1>Countdown</h1>
          <h2>
            {hours}:{minutes}:{seconds}
          </h2>
        </>
      )
    }
  }
  return (
    <>
      <div>
        <Countdown date={Date.now() + 10000} renderer={renderer} />
      </div>
    </>
  )
}
