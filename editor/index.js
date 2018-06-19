const editor = CodeMirror.fromTextArea(
  document.getElementById("editor"),
  {
    mode: 'javascript',
    lineNumbers: true,
    tabSize: 2,
  }
)
const canvas = document.getElementById("canvas").contentWindow.document
const runner = document.getElementById("runner")

const editorTemplate =
`function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {

}
`

const canvasTemplate = code => `
<meta charset="utf-8">
<style>body { margin: 0; padding: 0}</style>

<script src="/libraries/p5.min.js"></script>
<script src="/libraries/p5.dom.min.js"></script>
<script src="/libraries/p5.sound.min.js"></script>

<script>
  ${code}
</script>
`

function compile() {
  canvas.open()
  canvas.writeln(canvasTemplate(editor.getValue()))
  canvas.close()
}

function main() {
  editor.setValue(editorTemplate)
  runner.addEventListener("click", compile)
}

main()