// Helpers

function qs(selector, element = document) {
  return element.querySelector(selector)
}
function qsa(selector, element = document) {
  return element.querySelectorAll(selector)
}
function addClass(element, classString) {
  element.classList.add(...classString.split(" "))
}
function removeClass(element, classString) {
  element.classList.remove(...classString.split(" "))
}
function replaceClass(element, fromClassString, toClassString) {
  addClass(element, toClassString)
  removeClass(element, fromClassString)
}

// Setup codemirror
const codeMirror = CodeMirror.fromTextArea(
  qs("#editor"),
  {
    mode: 'javascript',
    lineNumbers: true,
    tabSize: 2,
    styleActiveLine: true,
    theme: 'solarized light',
    autoCloseBrackets: true,
    lint: true,
  }
)

const $gallery     = qs("#gallery")
const $playground  = qs("#playground")
const $editor      = qs(".CodeMirror")
const $preview     = qs("#preview")
const $controls    = qs("#controls")
const $runner      = qs("#runner")
const $zenMode     = qs("#zenmode")
const $examples    = Array.from(qsa(".example-image"))

let currentExample = null
let isZenMode = false

addClass($editor, "code f5 fl w-100 vh-50")

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

<script src="./libraries/p5.min.js"></script>
<script src="./libraries/p5.dom.min.js"></script>
<script src="./libraries/p5.sound.min.js"></script>

<script>
  ${code}
</script>
`

function compile() {
  const source = previewTemplate(codeMirror.getValue())
  $preview.setAttribute('srcdoc', source)
  codeMirror.focus()
}

function main() {
  // Set the editor text to the default template and compile.
  codeMirror.setValue(editorTemplate)
  compile()

  // Run by either clicking the run button ...
  $runner.addEventListener("click", compile)
  // ... or pressing ⌘ + Enter in the editor.
  codeMirror.addKeyMap({
    "Cmd-Enter": compile,
  })

  // On clicking any of the example images ...
  $examples.forEach(function(example) {
    example.addEventListener("click", function(event) {
      // ... toggle the "ba" (border) class
      if (currentExample) {
        removeClass(currentExample, "ba")
      }
      currentExample = example
      addClass(currentExample, "ba")

      // ... get the source code of the example and compile it.
      const path = `./examples/${example.dataset.src}.js`
      fetch(path)
        .then(data => data.text())
        .then(code => codeMirror.setValue(code))
        .then(compile)
    })
  })

  // On clicking the zen mode button ...
  $zenMode.addEventListener("click", function() {
    if (!isZenMode) {
      addClass($gallery, "dn")
      replaceClass($playground, "w-50", "w-100")
      replaceClass($editor, "f5 w-100 vh-50", "f4 w-50 vh-100")
      replaceClass($preview, "w-100 vh-50", "w-50 vh-100")
      $zenMode.innerHTML = "&larr; Gallery"
    } else {
      removeClass($gallery, "dn")
      replaceClass($playground, "w-100", "w-50")
      replaceClass($editor, "f4 w-50 vh-100", "f5 w-100 vh-50")
      replaceClass($preview, "w-50 vh-100", "w-100 vh-50")
      $zenMode.innerHTML = "Zen mode"
    }

    isZenMode = !isZenMode

    compile()
  })
}

main()