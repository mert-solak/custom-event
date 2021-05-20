## Custom Event

Developed to use CustomEvents easily.

![npm](https://img.shields.io/npm/v/@mertsolak/custom-event)
![license](https://img.shields.io/npm/l/@mertsolak/custom-event)
![size](https://img.shields.io/bundlephobia/min/@mertsolak/custom-event)
![issue](https://img.shields.io/github/issues/mert-solak/custom-event)

## Installation

Use node package manager to install @mertsolak/custom-event.

```bash
npm i @mertsolak/custom-event
```

## Usage

```typescript
import { on, off, once, trigger, broadcast, respond, request } from '@mertsolak/custom-event';

const handleUsernameChange = (data) => console.log(data);

const dataHandler = (incomingData: any) => {
  const { id } = incomingData;

  const user = users.find((id) => id === id);

  return user.username;
};

on('username-change', handleUsernameChange);
off('username-change', handleUsernameChange);
once('username-change', handleUsernameChange);
trigger('username-change', { username });
request('user-name-provider', { id: userId }, 'user-name', handleUsernameChange); // request only one time
respond('user-name', 'user-name-provider', dataHandler); // respond only one time.
broadcast('user-name', 'user-name-provider', dataHandler);
```
