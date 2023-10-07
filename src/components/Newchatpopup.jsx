import React from 'react'
import './Newchatpopup.css'

const Newchatpopup = (props) => {
    return (props.newChatTrigger) ? (
        <div className='newChatPopupDiv'>
            <div className='newChatInner'>
                <form onSubmit={props.startNewChat}>
                    <label htmlFor='recipients'>To:</label>
                    <input type="text" name='recipients' placeholder='recipients'/>
                    <label htmlFor='subject'>Subject:</label>
                    <input type="text" name='subject' placeholder='subject'/>
                    <input type="text" name="zap" placeholder='message here'/>
                    <input type="submit" value="send" />
                </form>
                <button className='newChatClose' onClick={props.closeNewChat}>close</button>
            </div>
        </div>
      ) : '';
    }

export default Newchatpopup