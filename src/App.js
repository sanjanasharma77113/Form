
import { useState } from 'react';
import './App.css';

function App() {

  //function changeFirstNameHandler(event) {
    //console.log("printing first name")//
    //console.log(event.target.value);//
  //}

  const [formData, setFormData] = useState( {firstName:"", lastName: "", lastName:"", email:"", comments:"",isVisible:true });
  
  console.log(formData)

  function changeHandler(event) {
    const{name,value,checked,type} = event.target
   setFormData(prevFormData => {
    return {
      ...prevFormData,
     [name]: type =="checkbox" ? checked : value
    }
   });
  }

  return (
    <div className="App">
<form>
  <input
  type ="text" placeholder='first name'onChange={changeHandler}
  name="first name"
  value={formData.firstName}
  />
  <br/>
  <br></br>

<input
  type ="text" placeholder='last name'onChange={changeHandler}
  name="last name"
  value={formData.lastName}
  />
  <br/>
  <br></br>
 

  <input
  type ="email" placeholder="Enter your email here" onChange={changeHandler} name="email"
  />
   <br/>
  <br></br>
 
  <textarea placeholder='enter your comments here' onChange={changeHandler} name="comments"
  value={formData.comments} />

<br></br>
  <input 
  type="checkbox"
onChange={changeHandler}
name="isVisible"
checked={formData.isVisible}

/>

<label htmlFor='isvisible'>Am I visible ?
</label>

<br>
</br>


<input
type="radio"
onChange={changeHandler}
name="mode"
value="On line-Mode"
id="Online-Mode"
checked={formData.mode}
/>
<label htmlFor='Online-mode'>OnlineMode</label>



<input
type="radio"
onChange={changeHandler}
name="mode"
value="Offline-Mode"
id="Offline-Mode"
checked={formData.mode}
/>
<label htmlFor='Offline-mode'>Offline Mode</label>


  
</form>
    </div>
  );
}

export default App;
