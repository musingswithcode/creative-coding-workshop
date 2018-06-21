const editor = CodeMirror.fromTextArea(
  document.getElementById("editor"),
  {
    mode: 'javascript',
    lineNumbers: true,
    tabSize: 2,
    styleActiveLine: true,
    theme: 'solarized light',
    autoCloseBrackets: true,
  }
)
const preview = document.getElementById("preview")
const runner = document.getElementById("runner")
const examples = Array.from(document.querySelectorAll(".example-image"))

let currentExample = null

const editorTemplate =
`function setup() {
  createCanvas(windowWidth, windowHeight);
  background("lightgray");
}

function draw() {

}`

const previewTemplate = code => `
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
  const source = previewTemplate(editor.getValue())
  preview.setAttribute('srcdoc', source)
}

function main() {
  // Set the editor text to the default template and compile.
  editor.setValue(editorTemplate)
  compile()

  // Run by either clicking the run button ...
  runner.addEventListener("click", compile)
  // ... or pressing ⌘ + Enter in the editor.
  editor.addKeyMap({
    "Cmd-Enter": compile,
  })

  examples.forEach(function(example) {
    example.addEventListener("click", function(event) {
      if (currentExample) {
        currentExample.classList.remove("ba")
      }

      currentExample = example
      currentExample.classList.add("ba")

      const path = `./examples/${example.dataset.src}.js`
      fetch(path)
        .then(data => data.text())
        .then(code => editor.setValue(code))
        .then(compile)
    })
  })
}

main()