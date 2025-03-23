import { ICreateChatProps } from "./src/types";

export interface IElectronAPI {
  startChat: (data: ICreateChatProps) => void;
}
declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
