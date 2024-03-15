
// import React, { useState } from 'react';

// const CustomDrawer = ({ isOpen, onClose, content }) => {
//     return (
//         <div
//             className={`fixed inset-0 z-50 bg-black bg-opacity-25 transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
//             onClick={onClose}
//         >
//             <div className="fixed inset-y-0 right-0 max-w-full flex">
//                 <div className="w-screen max-w-sm bg-red transform translate-x-full transition-transform ease-in-out duration-300">
//                     {content}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CustomDrawer;


import React from 'react';

const CustomDrawer = ({ isOpen, children }) => {


    return (
        <div className={`fixed bg-background border h-full top-0 right-0 w-[500px] p-4  ${isOpen ? "transform translate-x-[0rem] transition-transform ease-in-out duration-300" : "transform translate-x-full transition-transform ease-in-out duration-300"}`}>
            {children}
        </div>
    );
};

export default CustomDrawer;
