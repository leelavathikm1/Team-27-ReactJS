import { createContext } from "react";

const messageAccess = createContext();

export const MessageAccessProvider = messageAccess.Provider;

export const MessageAccessConsumer = messageAccess.Consumer;
