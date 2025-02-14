import {useState} from 'react';



const player = ({initalName,symbol,isActive,onChangeName}) =>{

  const[playerName,setPlayerName]=useState(initalName,symbol);
  // editing functionalites hai  
  //yaha par variable name aur fumction legai aur inka sttate false liya hain 
  const[isEditing,setIsEditing]=useState(false);
  //yha par handleClick naam ka function liya hain 
  function handleEditClick(){
    
    setIsEditing((editing)=>!editing);
    if(isEditing){
    onChangeName(symbol,playerName)
    }
  }
    function handleChange(event)
    {
 setPlayerName(event.target.value);
    }
    //agar setIsEditing jab tru hoga toh 

    // use function to update the value through previous state

let editPlayerName =   <span className="player-name">{playerName}</span>;
// let captionBtn='Edit';
   //playerName change ho ga  
if(isEditing){
  editPlayerName =<input type="text" required value={playerName} onChange={handleChange}/>;
  // let captionBtn='Save';
}
    return(
      <>
<li className={isActive ?'active':undefined}>
  <span className="player">
    {editPlayerName}

<span className="player-symbol">{symbol}</span>

</span>

<button onClick={handleEditClick}>{isEditing ? 'Save':'Edit '}</button>
</li>


</>
    );
}
export default player;