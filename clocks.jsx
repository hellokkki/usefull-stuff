
const Clock = ({ time, onStop, isRunning }) => {

  const parseTimeToSeconds = str => str ? str.split(':').reduce((acc, time) =>(60 * acc) + +time) : "";
  const formatSecondsToTime = seconds => {
     let hours = Math.floor(seconds / 3600);
     let minutes = Math.floor((seconds - (hours * 3600)) / 60);  
     let secs = seconds - (hours * 3600) - (minutes * 60);
     let  M, S;
    if (minutes < 10) M = (`0${minutes}`);
    if (secs < 10) S = (`0${secs}`);
    if (hours === 0) return(`${M || minutes} : ${S || secs}`);
    return (`${hours} : ${M || minutes} : ${S || secs}`);
  };
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    setSeconds(state => state = parseTimeToSeconds(time))
  }, [time])

  useEffect(() => {
      if (isRunning === false) return;
      const timer = 
      setInterval(() => {
        if (seconds === 0) {
          onStop();
          clearInterval(timer);
        } else {
          setSeconds(seconds => seconds - 1);
        }
      }, 1000);
   
       return () => clearInterval(timer);
  }, [seconds, onStop]);

  return (
    <div className='time-line'>
      {formatSecondsToTime(seconds)}
    </div>
  )
};