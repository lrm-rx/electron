// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { ipcRenderer, contextBridge } from "electron";
import { ICreateChatProps, OnUpdatedCallback } from "./types";

contextBridge.exposeInMainWorld("electronAPI", {
  startChat: (data: ICreateChatProps) => ipcRenderer.send("start-chat", data),
  onUpdateMessage: (callback: OnUpdatedCallback) =>
    ipcRenderer.on("update-message", (_event, data) => callback(data)),
});
