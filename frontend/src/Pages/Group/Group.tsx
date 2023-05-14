import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

interface ChatMessage {
  id: number;
  message: string;
}

interface Group {
  id: number;
  name: string;
  chatMessages: ChatMessage[];
}

const groups: Group[] = [
  {
    id: 1,
    name: "Underweight",
    chatMessages: [
      {
        id: 1,
        message: "Hello, I need some help with my diet.",
      },
      {
        id: 2,
        message: "Sure, what do you need help with?",
      },
    ],
  },
  {
    id: 2,
    name: "Normal",
    chatMessages: [
      {
        id: 1,
        message: "Hi, can you suggest some healthy meal options?",
      },
      {
        id: 2,
        message: "Of course, what type of meals are you interested in?",
      },
    ],
  },
  {
    id: 3,
    name: "Overweight",
    chatMessages: [
      {
        id: 1,
        message:
          "Hi, I need to lose some weight. Can you help me with a diet plan?",
      },
      {
        id: 2,
        message:
          "Yes, we can create a customized diet plan for you. Let me know your requirements.",
      },
    ],
  },
  {
    id: 4,
    name: "OBESE",
    chatMessages: [
      {
        id: 1,
        message:
          "Hi, I need to lose a lot of weight. Can you help me with a diet plan?",
      },
      {
        id: 2,
        message:
          "Yes, we can create a customized diet plan for you. Let me know your requirements.",
      },
    ],
  },
  {
    id: 5,
    name: "Extremely OBESE",
    chatMessages: [
      {
        id: 1,
        message:
          "Hi, I need to lose a huge amount of weight. Can you help me with a diet plan?",
      },
      {
        id: 2,
        message:
          "Yes, we can create a customized diet plan for you. Let me know your requirements.",
      },
    ],
  },
];

const ChatBox: React.FC<{ messages: ChatMessage[] }> = ({ messages }) => {
  const [show, setShow] = useState(true);

  return (
    <div className="my-2">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <h3 className="text-lg font-medium">Chat</h3>
        {show ? (
          <FaChevronUp className="w-5 h-5 text-gray-500" />
        ) : (
          <FaChevronDown className="w-5 h-5 text-gray-500" />
        )}
      </div>
      <Transition show={show}>
        <div className="p-2 bg-gray-50 rounded-md">
          {messages.map((message) => (
            <div key={message.id} className="mb-2">
              <p className="text-gray-500">{message.message}</p>
            </div>
          ))}
        </div>
      </Transition>
    </div>
  );
};

const GroupsPage: React.FC = () => {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [message, setMessage] = useState("");

  const handleMessageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedGroup) {
      const newMessage: ChatMessage = {
        id: selectedGroup.chatMessages.length + 1,
        message: message,
      };
      setSelectedGroup({
        ...selectedGroup,
        chatMessages: [...selectedGroup.chatMessages, newMessage],
      });
      setMessage("");
    }
  };

  return (
    <div className="container mx-auto py-7" style={{ marginTop: "30px" }}>
      <h1 className="text-4xl font-bold mb-4">Groups</h1>
      <div className="grid grid-cols-5 gap-4">
        {groups.map((group) => (
          <div
            key={group.id}
            className={`p-4 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-400 ${
              selectedGroup?.id === group.id ? "border-2 border-green-500" : ""
            }`}
            onClick={() => setSelectedGroup(group)}
          >
            <h2 className="text-xl font-medium mb-2">{group.name}</h2>
            {selectedGroup?.id === group.id && (
              <ChatBox messages={group.chatMessages} />
            )}
          </div>
        ))}
      </div>
      {selectedGroup && (
        <div className="mt-6">
          <h2 className="text-xl font-medium mb-4">{selectedGroup.name}</h2>
          <ChatBox messages={selectedGroup.chatMessages} />
          <div className="mt-4">
            <form onSubmit={handleMessageSubmit}>
              <label className="block font-medium">Send Message:</label>
              <div className="mt-1">
                <textarea
                  className="w-full px-3 py-2 bg-gray-50 rounded-md"
                  rows={3}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupsPage;

// import React, { useState, useEffect } from "react";
// import { Transition } from "@headlessui/react";
// import { FaChevronUp, FaChevronDown } from "react-icons/fa";
// import { io } from "socket.io-client";
// // import { io } from "socket.io-client";

// // आपका कोड यहां ...

// const socket = io('http://localhost:3000', {
//   transports: ['websocket'],
// });

// interface ChatMessage {
//   id: number;
//   message: string;
// }

// interface Group {
//   id: number;
//   name: string;
//   chatMessages: ChatMessage[];
// }

// const groups: Group[] = [
//   {
//     id: 1,
//     name: "Underweight",
//     chatMessages: [
//       {
//         id: 1,
//         message: "Hello, I need some help with my diet.",
//       },
//       {
//         id: 2,
//         message: "Sure, what do you need help with?",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "Normal",
//     chatMessages: [
//       {
//         id: 1,
//         message: "Hi, can you suggest some healthy meal options?",
//       },
//       {
//         id: 2,
//         message: "Of course, what type of meals are you interested in?",
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Overweight",
//     chatMessages: [
//       {
//         id: 1,
//         message:
//           "Hi, I need to lose some weight. Can you help me with a diet plan?",
//       },
//       {
//         id: 2,
//         message:
//           "Yes, we can create a customized diet plan for you. Let me know your requirements.",
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "OBESE",
//     chatMessages: [
//       {
//         id: 1,
//         message:
//           "Hi, I need to lose a lot of weight. Can you help me with a diet plan?",
//       },
//       {
//         id: 2,
//         message:
//           "Yes, we can create a customized diet plan for you. Let me know your requirements.",
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Extremely OBESE",
//     chatMessages: [
//       {
//         id: 1,
//         message:
//           "Hi, I need to lose a huge amount of weight. Can you help me with a diet plan?",
//       },
//       {
//         id: 2,
//         message:
//           "Yes, we can create a customized diet plan for you. Let me know your requirements.",
//       },
//     ],
//   },
// ];

// // const socket = io("http://localhost:3001");

// const ChatBox: React.FC<{ messages: ChatMessage[] }> = ({ messages }) => {
//   const [show, setShow] = useState(true);

//   return (
//     <div className="my-2">
//       <div
//         className="flex items-center justify-between cursor-pointer"
//         onClick={() => setShow(!show)}
//       >
//         <h3 className="text-lg font-medium">Chat</h3>
//         {show ? (
//           <FaChevronUp className="w-5 h-5 text-gray-500" />
//         ) : (
//           <FaChevronDown className="w-5 h-5 text-gray-500" />
//         )}
//       </div>
//       <Transition show={show}>
//         <div className="p-2 bg-gray-50 rounded-md">
//           {messages.map((message) => (
//             <div key={message.id} className="mb-2">
//               <p className="text-gray-500">{message.message}</p>
//             </div>
//           ))}
//         </div>
//       </Transition>
//     </div>
//   );
// };

// const GroupsPage: React.FC = () => {
//   const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
//   const [message, setMessage] = useState("");
//   const [reply, setReply] = useState("");

//   useEffect(() => {
//     if (selectedGroup) {
//       socket.emit("joinGroup", selectedGroup.id);

//       socket.on("receiveMessage", (message) => {
//         setSelectedGroup((prevGroup) => {
//           if (prevGroup && prevGroup.id === selectedGroup.id) {
//             return {
//               ...prevGroup,
//               chatMessages: [
//                 ...prevGroup.chatMessages,
//                 {
//                   id: prevGroup.chatMessages.length + 1,
//                   message,
//                 },
//               ],
//             };
//           }
//           return prevGroup;
//         });
//       });
//     }
//   }, [selectedGroup]);

//   useEffect(() => {
//     socket.on("receiveReply", (reply) => {
//       setReply(reply);
//     });
//   }, []);

//   const handleMessageSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (selectedGroup) {
//       const newMessage: ChatMessage = {
//         id: selectedGroup.chatMessages.length + 1,
//         message: message,
//       };
//       socket.emit("sendMessage", {
//         groupId: selectedGroup.id,
//         message: message,
//       });
//       setSelectedGroup({
//         ...selectedGroup,
//         chatMessages: [...selectedGroup.chatMessages, newMessage],
//       });
//       setMessage("");
//     }
//   };

//   return (
//     <div className="container mx-auto py-7" style={{ marginTop: "30px" }}>
//       <h1 className="text-4xl font-bold mb-4">Groups</h1>
//       <div className="grid grid-cols-5 gap-4">
//         {groups.map((group) => (
//           <div
//           key={group.id}
//           className={`p-4 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-400 ${
//             selectedGroup?.id === group.id ? "border-2 border-green-500" : ""
//           }`}
//           onClick={() => setSelectedGroup(group)}
//         >
//           <h2 className="text-xl font-medium mb-2">{group.name}</h2>
//           {selectedGroup?.id === group.id && (
//             <ChatBox messages={group.chatMessages} />
//           )}
//         </div>
//       ))}
//     </div>
//     {selectedGroup && (
//       <div className="mt-6">
//         <h2 className="text-xl font-medium mb-4">{selectedGroup.name}</h2>
//         <ChatBox messages={selectedGroup.chatMessages} />
//         {reply && (
//           <div className="mt-4">
//             <h3 className="text-lg font-medium">Reply:</h3>
//             <p className="text-gray-500">{reply}</p>
//           </div>
//         )}
//         <div className="mt-4">
//           <form onSubmit={handleMessageSubmit}>
//             <label className="block font-medium">Send Message:</label>
//             <div className="mt-1">
//               <textarea
//                 className="w-full px-3 py-2 bg-gray-50 rounded-md"
//                 rows={3}
//                 value={message}
//                 onChange={(event) => setMessage(event.target.value)}
//               ></textarea>
//             </div>
//             <div className="mt-4">
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//               >
//                 Send
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )}
//   </div>
// );
// };

// export default GroupsPage;
