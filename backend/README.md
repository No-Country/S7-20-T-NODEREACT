# Chatbox Backend

## Getting Started

```
npm install
```

## Endpoints

### Users

- Get own profile (GET)

```
http://localhost:8080/api/v1/users/me
```

- Get all Users (GET)

```
http://localhost:8080/api/v1/users
```

### Auth

- Create a new user (POST)

```
http://localhost:8080/api/v1/signup

```

- Login (POST)

```
http://localhost:8080/api/v1/signin

```

- Login with providers (GET)

```
http://localhost:8080/api/v1/auth/github
```

```
http://localhost:8080/api/v1/auth/google
```

### chats

- Create chat (POST)

```
http://localhost:8080/api/v1/chats
```

- Get chats (GET)

```
http://localhost:8080/api/v1/chats
```

- Get chat by id (GET)

```
http://localhost:8080/api/v1/chats/:id
```

- Update chat (PATCH)

```
http://localhost:8080/api/v1/chats/:id
```

- Delete chat (DELTE)

```
http://localhost:8080/api/v1/chats/:id
```

### Messages

- Create message (POST)

```
http://localhost:8080/api/v1/messages
```

- Get all messages (GET)

```
http://localhost:8080/api/v1/messages
```

- Get message by ID (GET)

```
http://localhost:8080/api/v1/messages/:id
```

- Update message (PATCH)

```
http://localhost:8080/api/v1/messages/:id
```

- Delete message (DELeTE)

```
http://localhost:8080/api/v1/messages/:id
```
