import React, { useState } from "react";

type ReturnProps = {
    isSheetOpen: boolean;
    setIsSheetOpen:(isSheetOpen: boolean) => void,
};

export const useSheetOpen = (): ReturnProps => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    return {
        isSheetOpen,
        setIsSheetOpen
    }
};
