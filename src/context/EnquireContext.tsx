"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface EnquireContextType {
  open: boolean;
  setOpen: (v: boolean) => void;
}

const EnquireContext = createContext<EnquireContextType>({
  open: false,
  setOpen: () => {},
});

export function EnquireProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <EnquireContext.Provider value={{ open, setOpen }}>
      {children}
    </EnquireContext.Provider>
  );
}

export function useEnquire() {
  return useContext(EnquireContext);
}
