"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type StatusLive = "offline" | "online" | "wating" | "disabled";
type Sessao = {
  linkYoutube: string;
  isCompleted: boolean;
  released: string;
  title: string;
};

interface GlobalContextData {
  status: StatusLive;
  setStatus: (status: StatusLive) => void;
  sessao: Sessao;
  setSessao: (sessao: Sessao) => void;
  loadingSession: boolean;
  setLoadingSession: (loading: boolean) => void;
}

const GlobalContext = createContext<GlobalContextData | undefined>(undefined);

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [status, setStatus] = useState<StatusLive>("disabled");
  const [loadingSession, setLoadingSession] = useState(false);
  const [sessao, setSessao] = useState<Sessao>({
    linkYoutube: "",
    isCompleted: false,
    released: "",
    title: "",
  });

  return (
    <GlobalContext.Provider
      value={{
        status,
        setStatus,
        sessao,
        setSessao,
        loadingSession,
        setLoadingSession,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext deve ser usado dentro de um GlobalProvider"
    );
  }
  return context;
}
