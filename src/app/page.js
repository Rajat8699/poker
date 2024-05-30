import Image from "next/image";
import CustomButton from "./components/common/CustomButton";
import Header from "./components/common/Header";
import CustomInput from "./components/common/CustomInput";
import CreateRoomForm from "./components/forms/CreateRoomForm";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen relative">
      <Header/>
      <div className="p-24">
        <h1 className="text-center text-6xl font-bold text-white px-auto mb-2">Welcome to Poker</h1>
        <CreateRoomForm/>
      </div>
    </main>
  );
}
