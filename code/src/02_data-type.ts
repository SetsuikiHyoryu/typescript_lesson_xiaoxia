const throwError = (message: string): never => {
  throw new Error(message)
}

const doSome = (): void => {
  throwError('error')
}
