# Web component for rasa chat assistant

Web component chat prototype made with vanilla js and socket.io

## Installation

```bash
    npm install
```

## Build files

Run webpack in development mode

```bash
    npm run dev
```

## How to use?

Run webpack in production mode to build a bundle

```bash
    npm run build
```

Link bundled script

```html
<script src="main.e07a532dad1104a25b55.bundle.js"></script>
```

Add component to your html file

```html
<chat-web-component></chat-web-component>
```

## Required Rasa configuration

### credentails.yml

```yml
socketio:
    user_message_evt: user_uttered
    bot_message_evt: bot_uttered
    session_persistence: false
```
