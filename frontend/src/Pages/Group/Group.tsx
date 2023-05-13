// import React, { useState } from 'react';
// // import { ChatIcon } from '@heroicons/react';
// import { Transition } from '@headlessui/react';
// // import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react';
// import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

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
//     name: 'Underweight',
//     chatMessages: [
//       {
//         id: 1,
//         message: 'Hello, I need some help with my diet.',
//       },
//       {
//         id: 2,
//         message: 'Sure, what do you need help with?',
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Normal',
//     chatMessages: [
//       {
//         id: 1,
//         message: 'Hi, can you suggest some healthy meal options?',
//       },
//       {
//         id: 2,
//         message: 'Of course, what type of meals are you interested in?',
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: 'Overweight',
//     chatMessages: [
//       {
//         id: 1,
//         message: 'Hi, I need to lose some weight. Can you help me with a diet plan?',
//       },
//       {
//         id: 2,
//         message: 'Yes, we can create a customized diet plan for you. Let me know your requirements.',
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: 'OBESE',
//     chatMessages: [
//       {
//         id: 1,
//         message: 'Hi, I need to lose a lot of weight. Can you help me with a diet plan?',
//       },
//       {
//         id: 2,
//         message: 'Yes, we can create a customized diet plan for you. Let me know your requirements.',
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: 'Extremely OBESE',
//     chatMessages: [
//       {
//         id: 1,
//         message: 'Hi, I need to lose a huge amount of weight. Can you help me with a diet plan?',
//       },
//       {
//         id: 2,
//         message: 'Yes, we can create a customized diet plan for you. Let me know your requirements.',
//       },
//     ],
//   },
// ];

// const ChatBox: React.FC<{ messages: ChatMessage[] }> = ({ messages }) => {
//   const [show, setShow] = useState(true);

//   return (
//     <div className="my-2">
//       <div className="flex items-center justify-between cursor-pointer" onClick={() => setShow(!show)}>
//         <h3 className="text-lg font-medium">Chat</h3>
//         {show ? <FaChevronUp className="w-5 h-5 text-gray-500" /> : <FaChevronDown className="w-5 h-5 text-gray-500" />}
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

//   return (
//     <div className="container mx-auto py-6">
//       <h1 className="text-3xl font-bold mb-4">Groups</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {groups.map((group) => (
//           <div
//             key={group.id}
//             className={`p-4 bg-gray-100 rounded-md cursor-pointer hover:bg-gray-200 ${selectedGroup?.id === group.id ? 'border-2 border-green-500' : ''}`}
//             onClick={() => setSelectedGroup(group)}
//           >
//             <h2 className="text-xl font-medium mb-2">{group.name}</h2>
//             {selectedGroup?.id === group.id && <ChatBox messages={group.chatMessages} />}
//           </div>
//         ))}
//       </div>
//       {selectedGroup && (
//         <div className="mt-6">
//           <h2 className="text-xl font-medium mb-4">{selectedGroup.name}</h2>
//           <ChatBox messages={selectedGroup.chatMessages} />
//           <div className="mt-4">
//             <form>
//               <label className="block font-medium">Send Message:</label>
//               <div className="mt-1">
//                 <textarea className="w-full px-3 py-2 bg-gray-50 rounded-md" rows={3}></textarea>
//               </div>
//               <div className="mt-4">
//                 <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Send</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GroupsPage;

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
    <div className="container mx-auto py-7" style={{ marginTop: "70px" }}>
      <h1 className="text-4xl font-bold mb-4">Groups</h1>
      <div className="grid grid-cols-2 gap-4">
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
