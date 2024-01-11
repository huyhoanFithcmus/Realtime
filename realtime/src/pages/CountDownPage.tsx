import Countdown from 'react-countdown'

export default function CountDownPage() {
  const DeadlineTime = new Date('2024-07-30T00:00:00')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
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
          <h1>Robocus 2024 will be held after</h1>
          <h2>
            {days} days {hours} hours {minutes} minutes {seconds} seconds
          </h2>
        </>
      )
    }
  }
  return (
    <>
      <div>
        <Countdown date={DeadlineTime} renderer={renderer} />
      </div>
    </>
  )
}
