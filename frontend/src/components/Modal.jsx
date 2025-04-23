// MuiModal.js
import React, { useRef } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import { IoMdClose } from "react-icons/io";

const MuiModal = ({ open, onClose, title, children, headerBackground }) => {
  const modalRef = useRef(null);
  return (
      <Modal open={open} onClose={onClose}>
        <div
          ref={modalRef}
          className="fixed inset-0 flex items-center justify-center"
        >
          <div
            className=" bg-white shadow-xl rounded-lg outline-none h-[90vh] w-[90vw] overflow-y-auto"
          >
            {/* Header */}
            <div
              className="flex justify-between items-center px-4 py-2 rounded-t-md border-b border-borderGray"
              style={{
                backgroundColor: headerBackground || "white",
                color: headerBackground ? "white" : "black",
              }}
            >
              <div className="text-title w-full text-center text-primary">
                {title}
              </div>
              <IconButton sx={{ p: 0 }} onClick={onClose}>
                <IoMdClose
                  className="text-white"
                  style={{ color: headerBackground ? "white" : "black" }}
                />
              </IconButton>
            </div>

            {/* Content */}
            <div className="p-4 h-full">{children}</div>
          </div>
        </div>
      </Modal>

  );
};

export default MuiModal;
