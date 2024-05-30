"use client"
import { useState } from "react";
import Card from "../common/Card";
import CustomInput from "../common/CustomInput";
import CustomTextArea from "../common/CustomTextArea";
import Select from "../common/Select";
import CustomButton from "../common/CustomButton";

export default function CreateRoomForm() {
    const [room, setRoom] = useState({
        name:'',
        pointsPattern:'fibonacci',
        deckValues:'1,2,3,5,8'
    })
    const onChange = (e) => {
        if(e?.target?.name){
            setRoom({...room, [e.target.name]: e.target.value})
        }else{
            setRoom({...room, pointsPattern:e})
        }
    }
  return (
    <Card>
        <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Create Room</h5>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Room name</label>
            <CustomInput type="text" name="name" id="name" placeholder="name" required onChange={onChange}/>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Points Deck</label>
            <Select name='pointsPattern' options={['Fibonacci','Custom']} value={room.pointsPattern} onChange={(e)=>onChange(e)}/>
        </div>
        {room.pointsPattern === 'Custom' && <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Points Deck Values</label>
            <CustomTextArea name='deckValues' placeholder="please input comma separated values" value={room.deckValues} onChange={onChange}/>
        </div>}
        <div>
            <CustomButton type="button"  onClick={()=>{console.log(room)}} className="w-full">Create room</CustomButton>
        </div>
    </form>
    </Card>
  )
}
