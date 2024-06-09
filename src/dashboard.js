import { useState } from 'react';
import RunData from './RunData.json'
function Dashboard() {

    const [run, setRun] = useState('');

    function makeRun(){
      let runObject = {
        "Team_Contact":RunData.Team_Contact[roll2d6()],
        "Job_Motivation":RunData.Job_Motivation[roll1d6()],
        "Meet_Occurs":RunData.Meet_Occurs[roll1d6()],
        "Job_Is":RunData.Job_Is[roll2d6()],
        "Pay":RunData.Pay[roll1d6()],
        "Honesty":RunData.Honesty[roll1d6()],
        "Location_Of_Job":RunData.Location_Of_Job[roll2d6()],
        "Security_Level":RunData.Security_Level[roll2d6()],
        "Complications":RunData.Complications[roll2d6()],
        "Ending":RunData.Ending[roll2d6()]
      }
      setRun(runObject)
    }

    function roll2d6(){
      return Math.floor(Math.random() * 10) +2;
    }

    function roll1d6(){
      return Math.floor(Math.random() * 6) + 1;
    }

    function displayRun(){      
      if(run !== ''){
        return (<div>
          <h2>Generated Run</h2>
          <hr></hr>
          <blockquote className="blockquote">
            <strong>Team Contact</strong>: {run.Team_Contact}<br></br>
            <strong>Job Motivation</strong>:{run.Job_Motivation} <br></br>
            <strong>Meet Occurs</strong>: {run.Meet_Occurs}         <br></br>
            <strong>Job Is</strong>:    {run.Job_Is}           <br></br>
            <strong>Pay</strong>:      {run.Pay}            <br></br> 
            <strong>Honesty</strong>:     {run.Honesty}         <br></br>
            <strong>Location Of Job</strong>: {run.Location_Of_Job}      <br></br>
            <strong>Security Level</strong>:  {run.Security_Level}     <br></br>
            <strong>Complications</strong>:   {run.Complications}     <br></br>
            <strong>Ending</strong>:   {run.Ending}            <br></br>

            {/* Your team is contacted by <span>{run.Team_Contact}</span> for a meet {run.Meet_Occurs}. The job offered is <span>{run.Job_Is}</span> against <span>{run.Location_Of_Job}</span> because <span>{run.Job_Motivation}</span><br></br>
            The offer <span>{run.Pay}</span> against <span>{run.Security_Level}</span>.<br></br>
            <span>{run.Complications}</span> occurs. It all ends like <span>{run.Ending}</span> */}
          </blockquote>
        </div>
        );
      }else{
        return;
      }
      
    }

  return (
    <div className="App">
      <h1>Run Generator</h1>
      <button type="button" className="btn btn-primary" onClick={makeRun}>Generate Run</button>
      <br></br>
      <div style={{textAlign:'left','margin':'0 auto', 'width':'980px'}}>
        {displayRun()}
      </div>
    </div>
  );
}

export default Dashboard;



