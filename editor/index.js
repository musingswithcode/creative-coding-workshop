const editor = CodeMirror.fromTextArea(
  document.getElementById("editor"),
  {
    mode: 'javascript',
    lineNumbers: true,
    tabSize: 2,
    styleActiveLine: true,
    theme: 'solarized light',
  }
)
const canvas = document.getElementById("canvas").contentWindow.document
const runner = document.getElementById("runner")

const editorTemplate =
`function setup() {
  createCanvas(windowWidth, windowHeight);
  background("lightgray");
}

function draw() {

}`

const canvasTemplate = code => `
<meta charset="utf-8">
<style>body { margin: 0; padding: 0}</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.dom.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.sound.min.js"></script>

<script>
  ${code}
</script>
`

function compile() {
  canvas.open()
  canvas.write(canvasTemplate(editor.getValue()))
  canvas.close()
}

function main() {
  editor.setValue(editorTemplate)
  runner.addEventListener("click", compile)

  compile()
}

main()