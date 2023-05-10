const left = document.querySelector(".left")
const right = document.querySelector(".right")
const bar = document.querySelector(".bar")
const editor = document.querySelector(".editor")
const output = document.querySelector(".btn")
const iframe = document.querySelector(".iframe")

const drag = (e) => {
    e.preventDefault()
    document.selection ? document.selection.empty() :
    window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3) + "px";
    editor.resize()
}

bar.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", drag); 
})
bar.addEventListener("mouseup", () => {
    document.removeEventListener("mousemove", drag); 
})


output.addEventListener("click", () => {
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})
