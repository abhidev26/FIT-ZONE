# FITZONE PRO Feature Specification

## Roles
- Admin / Gym Owner: full gym configuration, members, plans, trainers, attendance, payment records, analytics, staff roles and audit logs.
- Trainer: assigned clients, workout plans, appointments, session completion and permitted progress records.
- Member: own membership, workouts, attendance, appointments, progress, payment history and profile.
- Receptionist: member lookup, registration, check-in/out, QR verification, membership status and receipt lookup.

## Public website
Cinematic landing page, membership plans, trainer directory, workout programs, facilities/about, FAQ, contact and authentication.

## Core modules
1. Authentication and authorization.
2. Member directory and member profiles.
3. Membership plans and member subscriptions.
4. Trainer profiles, availability and assignments.
5. Workout plans, exercise library and completion history.
6. Attendance, check-in/out and QR workflow.
7. Payment records, invoices and provider sandbox integration.
8. Appointments and scheduling.
9. Member progress and goals.
10. Notifications and audit logs.
11. Analytics and authorized CSV reports.

## Important implementation rule
Demo values must be clearly labelled. Production metrics must come from persisted records. Payment state must be verified server-side through the payment provider. Role permissions must be enforced by the API, not just by frontend navigation.
