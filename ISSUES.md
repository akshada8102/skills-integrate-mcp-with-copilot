# Proposed GitHub Issues for New Features

Based on the comparison with ActivityHub, here are the new features to implement in the Mergington High School Activities API. Each section below represents a GitHub issue that can be created.

## Issue 1: Implement Role-Based Authentication and Dashboards

**Title:** Add role-based login and separate dashboards for admin and users

**Description:**
Currently, the application has no authentication or role differentiation. Implement a login system similar to ActivityHub's prototype:

- Add a login page with username, password, and role selection (admin/user).
- Redirect users to appropriate dashboards based on role.
- Admin dashboard: Focus on management tools.
- User dashboard: Focus on personal activities and signups.

**Acceptance Criteria:**
- Login page with form validation.
- Role-based redirection.
- Separate HTML pages or sections for admin/user views.
- Secure authentication (consider using FastAPI's security features).

**Labels:** enhancement, authentication, frontend

---

## Issue 2: Add Admin Management Tools for Activities

**Title:** Create admin interface for managing activities (add/edit/delete)

**Description:**
Admins need tools to manage extracurricular activities. Add functionality to the admin dashboard for CRUD operations on activities.

- View all activities in a table (similar to ActivityHub).
- Add buttons/forms for editing activity details (description, schedule, max participants).
- Add delete functionality with confirmation.
- Integrate with the existing API or extend it for admin endpoints.

**Acceptance Criteria:**
- Admin-only page/section with activity management.
- Forms for adding/editing activities.
- API endpoints for POST/PUT/DELETE activities (if not already present).
- Update in-memory data or consider persistent storage.

**Labels:** enhancement, backend, admin

---

## Issue 3: Implement User-Specific Navigation and Views

**Title:** Add personalized user navigation (My Activities, Register Event, Upcoming Events)

**Description:**
Enhance the user experience with dedicated sections for personal activity management, inspired by ActivityHub's user dashboard.

- "My Activities": Show only activities the user is signed up for.
- "Register Event": Dedicated signup page or section.
- "Upcoming Events": Filter or highlight future activities.
- Add navigation menu in the user interface.

**Acceptance Criteria:**
- New sections/pages in the frontend.
- API endpoints to fetch user-specific data (e.g., GET /activities?email=user).
- Improved navigation (e.g., tabs or menu).

**Labels:** enhancement, frontend, user-experience

---

## Issue 4: Add Notification System

**Title:** Implement a notification sidebar for updates and alerts

**Description:**
Add a persistent notification system to inform users and admins of changes, similar to ActivityHub's sidebars.

- Admin notifications: Pending registrations, activity updates.
- User notifications: Schedule changes, new events, personal updates.
- Display in a sidebar or dedicated section.
- Make notifications dynamic (e.g., based on API data).

**Acceptance Criteria:**
- Notification component in the UI.
- API endpoint for fetching notifications (or integrate into existing endpoints).
- Real-time or periodic updates (consider WebSockets for advanced implementation).

**Labels:** enhancement, frontend, notifications

---

## Issue 5: Extend Admin Tools for Students and Reports

**Title:** Add admin features for managing students and generating reports

**Description:**
Expand admin capabilities beyond activities, as suggested in ActivityHub's placeholders.

- Manage Students: View, add, edit student details (name, grade, email).
- Reports: Generate summaries (e.g., activity participation, available spots).
- Integrate with the data model.

**Acceptance Criteria:**
- Student management UI and API endpoints.
- Report generation (e.g., JSON export or simple tables).
- Admin dashboard updates.

**Labels:** enhancement, backend, admin, reports

---

These issues build on the existing project to add the new features identified from ActivityHub. Prioritize based on user needs and start with authentication for security.