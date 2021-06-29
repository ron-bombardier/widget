declare namespace TPow {
  interface TonicPowOptions {
    onWidgetLoaded: (widget: TPow.Widget) => void
  }

  export class TonicPow {
    constructor(options?: TonicPowOptions)
    storage: Storage
    config: Config
    events: Events
    apiUrl: string
    environment: string
    sessionId: string | null
    start: number
  }

  export type Capture = {
    sessionId: string | null
    challengeGuid: string | null
  }

  export function setOreo(name: string, value: string, days: number): void
  export function captureVisitorSession(customSessionId: string): Promise<Capture>
  export function getVisitorSession(): Promise<string | null>
  export function loadDivs(): Promise<void>
  export function load(): Promise<void>

  export interface Widget {
    height: number
    image_url: string
    link_url: string
    title: string
    width: number
    id?: string
  }

  export type Payload = {
    v: string
    name: string
    location: string
    data: string
    tncpw_session?: string
  }

  export const widgets: Map<string, Widget>
  export class Events {
    sessionId: string
    start: number

    detectBounce: () => void
    detectInteraction: () => void
    detectWidgetClick: () => void
    sendPing: () => void
    sendEvent: (eventName: string, data: string) => Promise<void>
  }

  export class Config {
    apiUrl: string
    environment: string
    environmentStaging: string
    apiUrlStaging: string
    environmentLocal: string
    apiUrlLocal: string
    environmentProduction: string
    apiUrlProduction: string
    setEnvironment(env: string): void
    isEnvironmentValid(env: string): boolean
  }

  interface onSuccessFunction {
    (data: Record<string, string>): void
  }
  interface onErrorFunction {
    (data: Record<string, string>): void
  }
  export interface ShareButtonOptions {
    [key: string]: any
  }

  export type _ShareButtonOptions = {
    buttonId?: string
    width?: string
    height?: string
    backgroundColor?: string
    getLinkText?: string
    authText?: string
    doneText?: string
    errorText?: string
    loadingText?: string
    onSuccess?: onSuccessFunction
    onError?: onErrorFunction
  }

  export type PopupOptions = {
    title?: string
    message?: string
  }
}

export default TPow
