import React from "react";
import QRCode from "react-qr-code";

const QR = (id) => {
    return (
        <QRCode 
            size={100}
            bgColor="white"
            fgColor="black"
            value={`Transaction Code: ${id}.`}
        />
    );
}

export default QR;