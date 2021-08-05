import { clearModal } from "@src/actions/modal";
import { AppContext } from "@src/App";
import React, { ReactElement, useContext } from "react";

interface Props {}

export default function Modal({}: Props): ReactElement {
  const { modalStore, modalDispatch } = useContext(AppContext);
  const { title, prompt, callback, callbackNo, yes, no, justYes } =
    modalStore || {};

  if (modalStore == undefined) {
    return null;
  }

  const handleYes = () => {
    clearModal(modalDispatch);
    callback();
  };

  const handleNo = () => {
    clearModal(modalDispatch);
    callbackNo();
  };

  //   return (
  //   <div className="cmodal-bg">
  //     <div className="cmodal-container">
  //       <div className="cmodal-header">
  //         <img src={logo} />
  //       </div>
  //       <div className="cmodal-body">
  //         <h1 className="cmodal-title">
  //           <Localized str={title} />
  //         </h1>
  //         {prompt && (
  //           <p className="cmodal-prompt">
  //             <Localized str={prompt} />
  //           </p>
  //         )}
  //         <div className="cmodal-buttons">
  //           {!justYes && (
  //             <button
  //               className="cmodal-button cmodal-button-no"
  //               onClick={handleNo}
  //             >
  //               <Localized str={no} />
  //             </button>
  //           )}
  //           <button
  //             className="cmodal-button cmodal-button-yes"
  //             onClick={handleYes}
  //           >
  //             <Localized str={yes} />
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return <div className="popup"></div>;
}
