interface TempoProps {
  staticDateString: string;
}

function Tempo(props: TempoProps) {
  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toUTCString();

  return (
    <div></div>
  )
}

export default Tempo;
