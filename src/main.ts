main()

function main() {
  const canvas: HTMLCanvasElement | null = document.querySelector('#gl-canvas')

  if (!canvas) {
    throw new Error('Canvas not found')
  }

  const gl = canvas.getContext('webgl')

  if (!gl) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.')
    return
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0)
  gl.clear(gl.COLOR_BUFFER_BIT)
}
