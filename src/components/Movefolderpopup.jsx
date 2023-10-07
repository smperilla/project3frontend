import React from 'react'
import './Movefolderpopup.css'
const Movefolderpopup = (props) => {
  return (props.moveFolderTrigger) ? (
    <div className='moveFolderPopupDiv'>
        <div className='moveFolderInner'>
           <p> What Folder Would you like to move your 'subject: {props.moveFolderTrigger.subject}' conversation to?</p>
           <form onSubmit={props.moveFolder}>
            <label htmlFor="folderToMoveTo">Which Folder:</label>
            <select name="folderToMoveTo">
                {props.folders.map(f=>(
                    <option key={f._id} value={f._id}>{f.title}</option>
                ))}
            </select>
            <input type="submit" value="Move Chat"/>
           </form>
            <button className='moveFolderClose' onClick={props.closeMoveFolder}>close</button>
        </div>
    </div>
  ) : '';
}

export default Movefolderpopup