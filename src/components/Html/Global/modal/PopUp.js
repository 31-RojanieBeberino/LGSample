import React from 'react'

export default function PopUp({open, children, close}) {
    if (!open) return null

    return (
        <div className="mainModalContent">
          <div className="modalContent" background="/public/assets/img/Bitmap.jpg">
            <div className="overLayModal">
                <div className="innerContent">
                    <button className="closeModal" onClick={close}>X</button>
                    <div className="modalInnerContent">
                        <div>{children}</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}
