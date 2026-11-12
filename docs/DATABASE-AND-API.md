# Database and API Plan

## MongoDB collections
`users`, `members`, `membershipPlans`, `memberships`, `trainers`, `workoutPlans`, `exercises`, `attendance`, `payments`, `appointments`, `progressRecords`, `notifications`, `auditLogs`.

Use timestamps, schema validation, unique indexes for email/member codes, appropriate compound indexes, references, ownership checks, and archival/soft-delete rules where appropriate.

## API groups
Prefix all routes with `/api/v1`.

- Auth: register, login, logout, current user, forgot password, reset password.
- Members: list, create, read, update, archive.
- Membership plans and memberships: list/create/update plans, assign membership, expiry lookup, renewals.
- Trainers: list/create/update, assignments, availability.
- Workouts: create/list/update plans, complete workout, exercise library.
- Attendance: check-in, check-out, list, reports, QR verification.
- Payments: checkout creation, payment lookup, verified webhook, invoices and refunds.
- Appointments: availability, booking, rescheduling and cancellation.
- Analytics: overview, revenue and attendance.

## Security
Use hashed passwords, secure HTTP-only cookies, CSRF protections as appropriate, rate limiting, Helmet, strict CORS, server validation, safe errors, ownership checks, webhook signature verification and audit logs.
