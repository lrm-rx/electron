import { ICreateChatProps, OnUpdatedCallback } from "./src/types";

export interface IElectronAPI {
  startChat: (data: ICreateChatProps) => void;
  onUpdateMessage: (callback: OnUpdatedCallback) => unknown;
}
declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
