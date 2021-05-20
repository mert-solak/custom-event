import { EventName, Listener, Data, DataHandler } from './custom-event.type';

const on = (eventName: EventName, listener: Listener): void => {
  document.addEventListener(eventName, (event: any) => listener(event.detail));
};

const off = (eventName: EventName, listener: Listener): void => {
  document.removeEventListener(eventName, (event: any) => listener(event.detail));
};

const once = (eventName: EventName, listener: Listener): void => {
  const handleEventOnce = (data: Data) => {
    listener(data);
    off(eventName, handleEventOnce);
  };

  on(eventName, handleEventOnce);
};

const trigger = (eventName: EventName, data: Data): void => {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
};

const request = (to: EventName, body: Data, listenFrom: EventName, listener: Listener) => {
  once(listenFrom, listener);

  trigger(to, body);
};

const response = (to: EventName, listenFrom: EventName, dataHandler: DataHandler) => {
  once(listenFrom, (body: Data) => {
    const data = dataHandler(body);
    trigger(to, data);
  });
};

const broadcast = (to: EventName, listenFrom: EventName, dataHandler: DataHandler) => {
  on(listenFrom, (body: Data) => {
    const data = dataHandler(body);
    trigger(to, data);
  });
};

export { on, once, off, trigger, request, response, broadcast };
