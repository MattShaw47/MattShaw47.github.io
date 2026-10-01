---
title: Multiplayer Snake Client
slug: multiplayer-snake
summary: A networked Snake client built in C# and Blazor that maintains a real-time game model from TCP server updates and sends player input back through a reusable networking layer.
year: 2024
featured: true
featuredOrder: 3
tech:
  - C#
  - .NET 8
  - Blazor
  - TCP
  - JSON
highlights:
  - Reusable TCP networking layer developed across chat and game assignments.
  - JSON synchronization of players, walls, powerups, and world state.
  - Browser-based rendering and live player input with Blazor.
github: https://github.com/MattShaw47/snake
status: Completed
---

Multiplayer Snake was a two-person CS 3500 project focused on networking,
client-side state management, and real-time rendering.

The game server itself was supplied by the course. Our responsibility was
to build the client: connect over TCP, interpret the server protocol,
maintain a local representation of the continuously changing world, send
player commands back to the server, and render the result in a Blazor
application.

## Building on a reusable networking layer

The Snake project followed an earlier networking assignment in which we
built a small networking library and used it for a multi-user chat
application.

Rather than starting networking code over for the game, the Snake client
reused that abstraction. `NetworkConnection` wraps the underlying
`TcpClient` and stream reader/writer and provides the client with a simpler
send/read/connect interface.

That separation let the game-specific code operate in terms of messages
rather than sockets and streams.

## Synchronizing the game world

After connecting, the client receives an assigned player ID and world
size, followed by a continuous stream of JSON game-state updates.

A server handler reads those messages asynchronously and forwards them to
a local world model. Each message represents a snake, wall, or powerup;
the world deserializes it and updates the corresponding object by ID.

This created a clear boundary between network communication and game
state. Rendering code can work against the current `World` instead of
having to understand the wire protocol.

## Rendering and player input

The browser client renders the world to a canvas using Blazor and a
JavaScript-interoperable canvas library.

The viewport follows the player's snake while rendering walls, other
players, animated powerups, and a score display. Keyboard input is mapped
to movement commands, serialized to JSON, and sent back through the same
networking layer.

## Project scope

This project was completed with one teammate. The provided course server
handled authoritative game simulation; our work was on the networking
library and client-side application, including protocol handling, local
game-state modeling, rendering, and user input.
