const fs = window.require("fs");
const { dialog } = window.require("@electron/remote");
const info = document.getElementById("info");
info.innerHTML = `Chrome (v${window.versions.chrome}), Node.js (v${window.versions.node}), electron (v${window.versions.electron})`;
const btn = document.getElementById("btn");
const titleInput = document.getElementById("title");
btn.addEventListener("click", () => {
  const title = titleInput.value;
  window.electron.setTitle(title);
  dialog
    .showOpenDialog({
      properties: ["openFile", "multiSelections"],
    })
    .then((result) => {
      console.log("result.filePaths:", result.filePaths);
    });
});

const btn2 = document.getElementById("btn2");
const info1 = document.getElementById("info1");
const contentInput = document.getElementById("content");
btn2.addEventListener("click", async () => {
  const content = contentInput.value;
  const len = await window.electron.writeFile(content);
  console.log(len);
  info1.innerHTML = `File written with ${len} bytes`;
  //  const c = await window.electron.readFile('test.txt', {encoding: 'utf-8'});
  const c = await fs.promises.readFile("test.txt", { encoding: "utf-8" });
  info1.innerHTML += `File Content:${c}`;
});

const counter = document.getElementById("counter");
window.electron.onUpdateCounter((value) => {
  counter.innerHTML = value.toString();
});
