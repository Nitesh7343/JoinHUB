JOIN HUB

Live Learning & Workshop Platform

JOIN HUB is a full-stack live learning and session hosting platform where users can create, host, join, and manage live workshops, online classes, meetings, and recorded courses.

The platform supports:

* Live streaming sessions
* Recorded lectures
* Paid and free sessions
* Real-time notifications
* Session analytics
* Dashboard management
* JWT authentication
* Video recordings

⸻

Project Vision

The goal of JOIN HUB is to create a centralized platform where:

* Instructors can host live learning sessions
* Students can discover and join sessions
* Creators can monetize their knowledge
* Users can access recordings later
* Communities can learn together in real time

⸻

Features

Authentication System

* JWT-based authentication
* User signup/login
* Password hashing using bcrypt
* Protected routes
* Role-based access

⸻

Session Hosting

Users can:

* Create live workshops
* Conduct online classes
* Organize meetings
* Upload recorded content
* Schedule future sessions

Session creation includes:

* Title
* Description
* Date
* Start & end time
* Language
* Category
* Paid/Free option
* Thumbnail upload
* Session outcomes
* Requirements
* Meeting link

⸻

Session Discovery

Users can:

* Search sessions
* Filter by category
* Filter by language
* Filter by free/paid
* Explore upcoming sessions

Categories may include:

* React
* JavaScript
* DSA
* AI
* Dance
* Singing
* Fitness
* Interview Preparation

⸻

Session Registration

* Users can register for sessions
* Paid sessions require payment before access
* Registration confirmation system
* Access control for premium sessions

⸻

Live Streaming System

Features include:

* Video/audio communication
* Screen sharing
* Real-time chat
* Participant management
* Mute/unmute controls
* Raise hand functionality

⸻

Recording System

After the session ends:

* Hosts can save recordings
* Recordings are uploaded to cloud storage
* Registered users can watch later

⸻

Dashboard System

User Dashboard

* Upcoming registered sessions
* Past attended sessions
* Saved recordings
* Notifications

Host Dashboard

* Upcoming hosted sessions
* Past hosted sessions
* Total attendees
* Total views
* Revenue analytics
* Session performance

⸻

Notification System

* Session reminders
* Real-time alerts
* Email notifications
* Upcoming session notifications

⸻

Analytics

Hosts can view:

* Total registrations
* Total views
* Revenue generated
* Popular sessions
* Watch statistics

⸻

Additional Features

* Reviews & ratings
* Dark mode
* Bookmark sessions
* Follow instructors
* Shareable session links
* Mobile responsive design

⸻

Tech Stack

Frontend

* React.js
* Tailwind CSS
* React Router DOM
* Axios
* React Icons
* Socket.io Client
* Zustand / Redux Toolkit

⸻

Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt
* Socket.io
* Nodemailer
* Multer

⸻

Database

* MongoDB
* Mongoose ODM

⸻

Database:

* MongoDB Atlas

⸻

System Architecture

Frontend Responsibilities

* UI rendering
* State management
* API integration
* Session pages
* Dashboard pages
* Video interfaces

⸻

Backend Responsibilities

* Authentication
* Authorization
* Session management
* Payment verification
* Notifications
* Analytics
* Real-time communication

⸻

Database Responsibilities

Stores:

* Users
* Sessions
* Registrations
* Payments
* Notifications
* Reviews

⸻

Project Flow

User Flow

1. User visits JOIN HUB.
2. User signs up/logs in.
3. User explores sessions.
4. User views session details.
5. User registers for free or paid session.
6. User receives notifications.
7. User joins session through provided link.
8. User watches recording later if available.

⸻

Host Flow

1. Host logs into platform.
2. Host creates session.
3. Host fills:
    * Title
    * Description
    * Timing
    * Price
    * Language
    * Outcomes
4. Host starts live session.
5. Platform streams session.
6. Host saves recording.
7. Analytics update automatically.

⸻

Database Schemas

User Schema

{
  name,
  email,
  password,
  role,
  profileImage,
  bio,
  registeredSessions,
  hostedSessions
}

⸻

Session Schema

{
  title,
  description,
  hostId,
  date,
  startTime,
  endTime,
  category,
  language,
  price,
  isPaid,
  thumbnail,
  recordingUrl,
  attendees,
  meetingId,
  tags,
  totalViews
}

⸻

Registration Schema

{
  userId,
  sessionId,
  paymentStatus,
  joinedAt
}

⸻

Payment Schema

{
  amount,
  paymentId,
  userId,
  sessionId,
  status
}

⸻

API Endpoints

Authentication APIs

POST /signup
POST /login
GET /profile

⸻

Session APIs

POST /session/create
GET /sessions
GET /session/:id
PUT /session/update/:id
DELETE /session/:id

⸻

Registration APIs

POST /register/:sessionId
GET /my-registrations

⸻

Payment APIs

POST /payment/create-order
POST /payment/verify

⸻

Folder Structure

Frontend Structure

src/
 ┣ components/
 ┣ pages/
 ┣ hooks/
 ┣ context/
 ┣ services/
 ┣ routes/
 ┣ layouts/
 ┣ utils/
 ┣ assets/
 ┗ App.jsx

⸻

Backend Structure

server/
 ┣ controllers/
 ┣ routes/
 ┣ middleware/
 ┣ models/
 ┣ config/
 ┣ services/
 ┣ sockets/
 ┣ uploads/
 ┗ server.js

⸻

Development Roadmap

Version 1

Core Features:

* Authentication
* Session creation
* Session listing
* Session registration
* Dashboard

⸻

Version 2

Intermediate Features:

* Live streaming
* Notifications
* Recording system

⸻

Version 3

Advanced Features:

* Payments
* Analytics
* AI features
* Real-time collaboration

⸻

Security Measures

* Password hashing using bcrypt
* JWT expiration
* Protected APIs
* Role-based authorization
* Input validation
* Helmet middleware
* CORS configuration
* Rate limiting

⸻

Scalability Improvements

Future improvements may include:

* Redis caching
* CDN integration
* Queue systems
* Microservices architecture
* Kubernetes deployment

⸻

Why This Project?

JOIN HUB demonstrates:

* Full-stack development
* Real-time systems
* Authentication systems
* Payment integration
* Cloud integration
* Scalable architecture
* Dashboard analytics
* Video communication systems

Learning Outcomes

By building JOIN HUB, you will learn:

* MERN Stack Development
* REST APIs
* JWT Authentication
* Real-time communication
* Payment integration
* Cloud deployment
* Database design
* Scalable backend architecture
* State management
* Video streaming integration

⸻

Installation Guide

Clone Repository

git clone <repository-url>

⸻

Frontend Setup

cd client
npm install
npm run dev

⸻

Backend Setup

cd server
npm install
npm run dev

⸻

Environment Variables

Backend .env

PORT=
MONGO_URI=
JWT_SECRET=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET=
RAZORPAY_KEY_ID=
RAZORPAY_SECRET=
ZEGO_APP_ID=
ZEGO_SERVER_SECRET=

