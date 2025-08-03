import { useState } from "react";
import SimpleNav from "../components/simpleNav";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid"


export default function Roomlogin() {
    const navigate = useNavigate();
    const [RoomId, setRoomId] = useState("");
    const [Username, setusername] = useState("");

    function handleEnter(e) {
        if (e.key === "Enter") {
            if (Username === "" || RoomId === "") {
                toast("RoomId and Username are required");
            } else {
                navigate(`/editor/${RoomId}`, {
                    state: {
                        username: Username,
                        roomId: RoomId
                    }
                });
            }
        }
    }

    return (
        <div className="flex flex-col h-screen overflow-hidden">
            <SimpleNav />
            <div className="bg-[#0f0f0f] min-h-screen w-screen flex items-center justify-center px-5">
                <div className="bg-[#1a1a1a] p-9 rounded-lg shadow-lg w-full max-w-sm">
                    <h1 className="text-white text-sm">Paste Invitation Room ID</h1>
                    <input
                        value={RoomId}
                        type="text"
                        placeholder="Room ID"
                        required
                        onChange={(e) => { setRoomId(e.target.value) }}
                        className="w-full p-2 mt-2 bg-white rounded-sm focus:outline-none"
                        onKeyDown={handleEnter}
                    />
                    <input
                        value={Username}
                        type="text"
                        placeholder="Username"
                        required
                        onChange={(e) => { setusername(e.target.value) }}
                        className="w-full p-2 mt-2 bg-white rounded-sm focus:outline-none"
                        onKeyDown={handleEnter}
                    />
                    <button
                        onClick={() => {
                            Username === "" || RoomId === "" ? toast("RoomId and Username is required") : navigate(`/editor/${RoomId}`,
                                {
                                    state: {
                                        username: Username,
                                        roomId: RoomId
                                    }
                                }
                            )
                        }}
                        className="bg-green-700 hover:bg-green-800 text-white p-2 mt-4 w-full rounded-2xl transition duration-200"
                    >
                        <span className="font-bold">Join Room</span>
                    </button>

                    <p className="text-gray-400 text-sm mt-4 text-center px-5">
                        Don’t have a Room ID?{" "}
                        <span
                            className="text-blue-400 hover:text-blue-500 underline cursor-pointer transition"
                            onClick={() => {
                                setRoomId(uuidv4());
                                Username === "" ? toast("Please enter your username to join the room") : "";
                                toast.success("New Room Created");
                            }}
                        >
                            Create a new room
                        </span>
                    </p>
                </div>
            </div>
        </div >
    );
}
