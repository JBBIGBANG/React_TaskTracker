import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {

    const[text, setText] = useState('') 
    const[day, setDay] = useState('') 
    const[time, setTime] = useState('') 

    const[reminder, setReminder] = useState(false) 

    
    const addTeskHandler = (event) => {
        setText(event.target.value);
    }


    const addDayHandler = (event) => {
        setDay(event.target.value);
    }
    const addTimeHandler = (event) => {
        setTime(event.target.value);
    }


    const addReminderHandler = (event) => {
        setReminder(event.currentTarget.checked);
    }

    const onSubmit = (event) => {
        event.preventDefault()

        if(!text) {
            alert('Please Add A Task')
            return
        }
        
        onAdd({ text, day, time, reminder})

        setText(' ')
        setDay(' ')
        setTime(' ')
        setReminder(' ')

    }



    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' 
                 value={text} onChange = {addTeskHandler}/>
            </div>

            <div className = 'form-control'>
                <label>Date</label>
                <input type='date' value={day} 
                 onChange = {addDayHandler}/>
            </div>
            <div className = 'form-control'>
                <label>Time</label>
                <input type='time' value={time} 
                 onChange = {addTimeHandler}/>
            </div>

            <div className = 'form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' 
                 placeholder='Add Day & Time'
                 value={reminder} onChange = {addReminderHandler} />
            </div>

            <input type='submit' value = 'Save Task' className = 'btn btn-block' />
        </form>
    )
}

export default AddTask
