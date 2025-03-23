// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { ipcRenderer, contextBridge } from "electron";
import { ICreateChatProps } from "./types";

contextBridge.exposeInMainWorld("electronAPI", {
  startChat: (data: ICreateChatProps) => ipcRenderer.send("start-chat", data),
});
