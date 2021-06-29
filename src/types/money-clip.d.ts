declare module 'money-clip' {
  export function getConfiguredCache({
    version,
    name,
    maxAge,
  }: {
    version?: number
    name?: string
    maxAge?: number
  }): MoneyClip

  export type MoneyClip = {
    set: (key: IDBValidKey, value: any, ttl: number) => Promise<void>
    get: <T = any>(key: IDBValidKey) => Promise<T>
  }
}
