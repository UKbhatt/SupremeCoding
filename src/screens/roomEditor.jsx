import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import SimpleNav from "../components/simpleNav";
import { Client } from "../components/client";
import { toast } from "react-hot-toast";
import Editor from "../components/editor";
import initSocket from "../../server/routes/socket";
import Actions from "../../server/data/action";

export default function RoomEditor() {
    const socketRef = useRef(null);
    const codeRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const { roomId, username } = location.state;
    const [clients, setClients] = useState([]);
    const [lang, setLang] = useState("javascript");

    useEffect(() => {
        const init = async () => {
            socketRef.current = await initSocket();

            socketRef.current.on('connect_error', (err) => handleErrors(err));
            socketRef.current.on('connect_failed', (err) => handleErrors(err));

            function handleErrors(err) {
                console.error("Socket connection error:", err);
                toast.error("Connection failed. Redirecting...");
                navigate("/roomlogin");
            }

            socketRef.current.emit(Actions.JOIN, {
                roomId,
                username,
            });

            socketRef.current.on(Actions.JOINED, ({ clients, username: joinedUser, socketId }) => {
                if (joinedUser === username) {
                    console.log("You joined the room!", clients);
                  
                } else {
                    toast.success(`${joinedUser} joined the room.`);
                }
                setClients(clients);
            });

            socketRef.current.on(Actions.DISCONNECTED, ({ socketId, username: leftUser }) => {
                toast.error(`${leftUser} left the room.`);
                setClients((prev) => prev.filter(c => c.socketId !== socketId));
            });
        };

        init();

        return () => {
            if (socketRef.current) {
                socketRef.current.off(Actions.JOINED);
                socketRef.current.off(Actions.DISCONNECTED);
                socketRef.current.disconnect();
            }
        };
    }, []);

    const handleCopy = async () => {
        await navigator.clipboard.writeText(roomId);
        toast.success("Room ID copied to clipboard!");
    };

    const handleLeave = () => {
        navigate("/roomlogin");
    };

    return (
        <div className="flex flex-col h-screen bg-[#0f0f0f] overflow-hidden">
            <SimpleNav />
            <div className="flex flex-row h-screen">
                <div className="w-[20%] h-full flex flex-col bg-[#2f2f2f] p-4 overflow-y-auto">
                    <h1 className="font-bold text-xl text-white mb-4">Connected</h1>
                    <div className="flex-1 overflow-auto">
                        {clients.map((client) => (
                            <Client key={client.socketId} username={client.username} />
                        ))}
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        <button
                            className="border-2 border-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
                            onClick={handleCopy}
                        >
                            Copy Room ID
                        </button>
                        <button
                            className="border-2 border-red-700 text-white py-2 rounded-md hover:bg-red-800 transition"
                            onClick={handleLeave}
                        >
                            Leave Room
                        </button>
                    </div>
                </div>

                <div className="flex flex-col w-full h-full px-5 py-1">
                    <select
                        onChange={(e) => setLang(e.target.value)}
                        value={lang}
                        className="mb-4 p-2 border rounded bg-[#1f1f1f] text-white w-[200px]"
                    >
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="cpp">C++</option>
                        <option value="java">Java</option>
                    </select>

                    <div className="flex-1 text-6sm bg-violet-50 bg-fixed">
                        <Editor language={lang} />
                    </div>
                </div>
            </div>
        </div>
    );
}
