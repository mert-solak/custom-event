export type EventName = string;
export type Listener = (eventName: EventName) => void;
export type Data = any;
export type DataHandler = (data: Data) => Data;
