// src/polyfills.ts

// Amplie a interface do construtor Promise para incluir "withResolvers"
declare global {
  interface PromiseConstructor {
    withResolvers(): {
      promise: Promise<unknown>
      resolve: (value?: unknown) => void
      reject: (reason?: unknown) => void
    }
  }
}

// Se o método não existir, defina-o
if (!Promise.withResolvers) {
  Promise.withResolvers = function () {
    let res!: (value?: unknown) => void // usa ! para indicar que será atribuída
    let rej!: (reason?: unknown) => void
    const promise = new Promise<unknown>((resolve, reject) => {
      res = resolve
      rej = reject
    })
    return { promise, resolve: res, reject: rej }
  }
}

export {} // para transformar este arquivo num módulo
