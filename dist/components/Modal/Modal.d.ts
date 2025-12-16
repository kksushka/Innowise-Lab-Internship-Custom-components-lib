import React from 'react';
export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
    container?: HTMLElement;
}
export declare const Modal: ({ open, onClose, children, container }: ModalProps) => React.ReactPortal | null;
//# sourceMappingURL=Modal.d.ts.map