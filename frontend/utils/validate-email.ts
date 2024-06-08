export function validEmail(email: string): boolean {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}
