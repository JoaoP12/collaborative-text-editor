# Collaborative Text Editor

## Overview

A simple, lightweight collaborative text editor with basic formatting capabilities. Built with QuillJS, this editor allows multiple users to edit and view changes in real-time.

## Features

- **Rich Text Editing**: Supports basic formatting options such as bold, italic, underline, and lists.
- **Real-time Collaboration**: Synchronized editing for multiple users.

## Technology Stack

- **Frontend**: QuillJS for rich text editing, basic HTML
- **Backend**: Node.js with WebSockets real-time collaboration
- **Database**: MongoDB for persistent storage (not implemented yet)

## Roadmap

- [x] Basic text editor setup with QuillJS
- [x] Real-time synchronization via WebSockets
- [ ] Storage persistence using MongoDB
- [ ] Conflict resolution
- [ ] Version history and rollback feature
- [ ] User authentication and access control
- [ ] Document sharing
- [ ] User presence:
  1. See connected users
  2. Users' cursors positions
  3. Visual indications of who is editing what

Not sure if will do:

- Break app in microservices:
  1. Editor Service (Frontend)
     - Handles the UI with QuillJS for rich text editing.
     - Communicates with the backend via WebSockets or REST API.
  2. Collaboration Service
     - Manages real-time collaboration and synchronization.
     - WebSockets or WebRTC for real-time communication.
     - Conflict resolution and operational transformation logic.
  3. User Management Service
     - Handles authentication and authorization.
     - User roles, access control, and session management.
  4. Document Service
     - CRUD operations for document storage.
     - Version control and history tracking.
  5. Notification Service
     - Sends updates and notifications when collaborators join or make changes.
  6. Gateway/API Gateway
     - Routes requests to appropriate services.
     - Handles load balancing and security (e.g., rate limiting, authentication).
- Orchestration with Kubernetes
- Deal with multiple pages in a document
- Deal with images in the text
- Comments in the text
- Document outline
