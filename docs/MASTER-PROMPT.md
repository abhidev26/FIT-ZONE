# MASTER PROJECT PROMPT — FITZONE PRO
## Premium 3D Gym Management & Fitness Ecosystem

### 1. ROLE & OBJECTIVE

Act as a world-class Senior Full-Stack Engineer, Creative Developer, 3D Web Experience Designer, Motion Designer, and UI/UX Architect.

Build **FITZONE PRO**, a production-oriented, full-stack gym management platform that combines the visual quality of a premium fitness brand with the functionality of real-world gym management software.

**Brand tagline:** TRAIN SMART. LIVE STRONG.

The website must feel cinematic, powerful, premium, immersive, athletic, modern, and technologically advanced. It must not look like a generic gym template, basic admin dashboard, static landing page, or simple student CRUD project.

Create a complete working application with:

- A cinematic, animated 3D landing page.
- A premium gym membership and fitness website.
- An interactive application with four role-based dashboards.
- A functional backend, database, and REST API.
- Membership, trainer, workout, attendance, payment, and analytics modules.
- Advanced animations and 3D interactions throughout the entire application.
- Fully responsive desktop, tablet, and mobile experiences.

Do not build only a frontend mockup. Implement real functionality and connect the interface to the backend.

---

### 2. TECHNOLOGY STACK

Use the following technologies:

**Frontend**
- React 19 with TypeScript.
- Vite.
- Tailwind CSS with a consistent design-token system.
- React Router for application routing.
- Framer Motion / Motion for React for page transitions, scroll reveals, layout transitions, and micro-interactions.
- Three.js with React Three Fiber and Drei for 3D scenes.
- GSAP with ScrollTrigger for carefully coordinated cinematic scroll sequences where needed.
- Lenis or an equivalent lightweight smooth-scrolling solution, with reduced-motion support.
- Recharts for business analytics and fitness progress charts.
- React Hook Form and Zod for form validation.
- TanStack Query for API data fetching, caching, and mutations.
- Lucide React for consistent interface icons.

**Backend**
- Node.js and Express.js with TypeScript.
- MongoDB and Mongoose.
- RESTful API architecture.
- Secure authentication using appropriately configured HTTP-only cookies and server-side session/token validation.
- Role-based access control.
- Password hashing using Argon2id or bcrypt.
- Server-side validation, rate limiting, security headers, and centralized error handling.

**Testing and deployment**
- Vitest and React Testing Library.
- Supertest for API testing.
- Playwright for important end-to-end workflows.
- Git and GitHub.
- Vercel for the frontend and a compatible Node.js hosting platform for the backend.
- Environment variables for all secrets and deployment configuration.

Use compatible package versions. Do not mix incompatible APIs or outdated library patterns.

---

### 3. VISUAL IDENTITY AND DESIGN SYSTEM

Create an original, premium fitness identity.

**Brand name:** FITZONE PRO

**Visual direction:** Luxury fitness club meets cinematic sports performance technology.

**Primary palette**
- Obsidian black: #090B0D
- Graphite: #15191D
- Elevated surface: #1D2329
- Electric lime: #C7FF3D
- Pure white: #FFFFFF
- Muted text: #9AA3AC
- Borders: subtle charcoal and translucent white

Use electric lime as the primary accent for active states, important statistics, CTA buttons, progress indicators, and selected highlights.

Create an optional light theme with white, cool grey, graphite typography, and restrained lime accents.

**Typography**
- Use a bold condensed display typeface for hero headlines.
- Use a clean geometric sans-serif for interface text.
- Use large uppercase headings with deliberate letter spacing.
- Use tabular numerals for metrics, revenue, timers, and statistics.

**Visual language**
- Full-bleed editorial gym photography.
- Cinematic lighting, deep shadows, controlled contrast, and atmospheric depth.
- Premium glass panels used selectively.
- Subtle grain, soft radial lighting, layered backgrounds, and depth-aware shadows.
- Oversized typography and asymmetrical layouts.
- Large image compositions and immersive section transitions.
- Elegant borders and consistent spacing.
- No excessive neon, childish graphics, cluttered cards, or unnecessary gradients.

The entire product must use one consistent design system.

---

### 4. CINEMATIC ENTRY EXPERIENCE AND HERO PAGE

The first impression is critical. Create a high-end, immersive landing page inspired by premium fitness campaigns and award-winning interactive websites.

#### Opening experience

Create a short, polished opening animation featuring:
- A black screen transitioning into an atmospheric gym environment.
- A subtle light sweep revealing the FITZONE PRO brand.
- Animated typography with a controlled blur-to-sharp transition.
- A minimal progress indicator if assets require loading.
- A seamless transition into the main hero.

Do not force users to wait through a long intro. Keep the experience skippable and ensure the main content is accessible immediately.

#### Hero section

Use a cinematic, full-screen gym photograph or video featuring a real athlete training in a premium gym.

The hero must include:

**Headline:**
TRAIN BEYOND  
YOUR LIMITS.

**Supporting copy:**
Your goals. Your discipline. Your transformation. Experience a smarter way to train, track your progress, and become stronger every day.

**Primary CTA:** START YOUR JOURNEY

**Secondary CTA:** EXPLORE THE GYM

Include a clear navigation bar with:
- FITZONE PRO logo.
- Home.
- Memberships.
- Trainers.
- Programs.
- About.
- Sign In.
- Join Now.

#### Hero animations

Implement:
- Cinematic image reveal using masks and clip-path transitions.
- Staggered text entrance.
- Subtle parallax depth.
- Mouse-responsive movement on desktop.
- Animated background lighting.
- Floating particles only where visually appropriate.
- 3D rotating or tilting decorative geometry.
- Animated CTA hover states.
- Magnetic-style button motion with accessibility safeguards.
- Scroll-triggered transitions into the next section.
- Animated numerical statistics.
- Smooth navigation and section transitions.

Do not apply heavy 3D transformations to every element. Keep the main text readable and the primary CTA immediately visible.

---

### 5. ADVANCED 3D AND MOTION SYSTEM

Create a cohesive motion language used across the landing page, membership pages, login experience, dashboards, charts, modals, and interactive components.

#### Three-dimensional elements

Use React Three Fiber and Three.js to implement appropriate elements such as:
- A floating 3D dumbbell or weight plate.
- Rotating metallic fitness objects.
- A 3D fitness emblem or abstract sculptural form.
- A subtle three-dimensional environment with controlled lighting.
- Depth-based mouse interaction.
- Environment reflections and realistic material responses.
- Interactive object rotation where it adds meaningful value.

Use optimized GLB/GLTF assets or procedural geometry. Use real 3D assets where appropriate instead of creating everything from primitive shapes.

The 3D scene must support:
- Lazy loading.
- Loading fallbacks.
- Device-aware quality settings.
- Reduced-motion preferences.
- A static image fallback.
- Graceful failure when WebGL is unavailable.

#### Animation categories

Implement:
- Entrance and exit animations.
- Scroll-triggered reveals.
- Parallax image layers.
- 3D tilt and depth effects.
- Staggered list animations.
- Animated charts.
- Number counters.
- Button and icon micro-interactions.
- Page transitions.
- Modal and drawer transitions.
- Skeleton loading animations.
- Toast notifications.
- Animated tabs and filters.
- Chart tooltips and hover states.
- Smooth progress bars and circular indicators.
- Animated dropdown menus.
- Interactive calendars and appointment slots.
- Responsive navigation drawer transitions.

Every animation should have a purpose. Avoid continuous movement that interferes with reading, form entry, or dashboard work.

#### Performance requirements

- Animate primarily transform and opacity where possible.
- Avoid excessive blur filters and expensive full-screen effects.
- Dynamically import 3D scenes and heavy visual modules.
- Pause unnecessary animation when elements are off-screen.
- Respect `prefers-reduced-motion`.
- Provide a simplified experience on low-powered mobile devices.
- Avoid scroll hijacking and excessive animation delays.
- Never allow animations to block navigation or form submission.

---

### 6. GYM PHOTOGRAPHY AND MEDIA DIRECTION

Use a coherent library of high-quality fitness images throughout the product.

Include imagery of:
- Premium modern gym interiors.
- Athletes lifting weights.
- Strength training.
- Cardio workouts.
- Personal training sessions.
- Group fitness classes.
- Functional training zones.
- Dumbbells, barbells, racks, and gym machines.
- Athletic recovery and stretching.
- Personal trainers coaching members.

Use licensed stock photography, authorized image sources, or original generated visual assets. Keep image attribution or licensing information where required.

Create consistent image treatments:
- Dark editorial overlays.
- Controlled contrast.
- Subtle image zoom on hover.
- Rounded or precisely clipped image compositions.
- Cinematic crop transitions.
- Consistent aspect ratios.
- Lazy loading for below-the-fold imagery.

Do not use broken image URLs, random placeholder imagery, unrelated pictures, or unlicensed third-party assets.

Create a reusable image component with loading states, error fallbacks, responsive image sizing, and accessible alternative text.

---

### 7. PUBLIC WEBSITE PAGES

#### A. Home

Create:
- Cinematic hero.
- Animated trust statistics.
- Featured membership plans.
- Training programs.
- Featured trainers.
- Gym facilities gallery.
- Member success stories.
- Fitness transformation section.
- Interactive FAQ.
- Membership CTA.
- Premium footer.

#### B. Membership plans

Provide:
- Monthly membership.
- Quarterly membership.
- Half-year membership.
- Annual membership.
- Optional personal training add-on.

Each plan must show its price, duration, benefits, and eligibility.

Include:
- Animated pricing cards.
- Comparison table.
- Plan selection.
- Clear renewal information.
- Responsive layout.
- Sign-in or registration flow before purchase.

Prices must come from database configuration, not hardcoded assumptions throughout the UI.

#### C. Trainers

Provide trainer profiles with:
- Photograph.
- Name and specialization.
- Experience.
- Qualifications.
- Training philosophy.
- Availability.
- Member ratings if genuine rating data exists.
- Book a session CTA.

Include searchable trainer listings and specialization filters.

#### D. Workout programs

Provide program categories:
- Strength training.
- Hypertrophy.
- Fat loss.
- Cardio conditioning.
- Functional fitness.
- Mobility and recovery.

Show program duration, difficulty, exercises, and intended goals.

Avoid claiming guaranteed physical transformations or medical outcomes.

#### E. About and facilities

Show the gym's mission, equipment, facilities, operating hours, and contact information. Keep business details configurable.

#### F. Authentication

Build:
- Registration.
- Login.
- Logout.
- Forgot password.
- Password reset.
- Email verification where configured.
- Session-expiry handling.
- Unauthorized-access screen.

Use polished split-screen layouts, gym imagery, elegant input animations, inline validation, and clear error states.

---

### 8. ADMIN DASHBOARD

Create a complete administration workspace at `/admin`.

#### Dashboard overview

Display:
- Total registered members.
- Active memberships.
- Expired memberships.
- New registrations.
- Monthly revenue.
- Outstanding payment balances.
- Today's attendance.
- Upcoming renewals.
- Trainer utilization.
- Membership growth chart.
- Revenue trend chart.
- Attendance analytics.
- Recent activity.
- Upcoming appointments.

All statistics must be calculated from actual database records or clearly identified demo data.

#### Member management

Implement:
- Member directory.
- Search and filters.
- Pagination.
- Add member.
- Edit member.
- View member profile.
- Assign membership.
- Assign trainer.
- Suspend or reactivate member.
- Membership history.
- Attendance history.
- Payment history.

Use confirmation dialogs for destructive actions.

#### Membership management

Implement:
- Create membership plans.
- Edit plans.
- Configure prices and durations.
- Assign plans to members.
- Start and expiry dates.
- Renewal management.
- Expiry reminders.
- Active, expired, cancelled, and pending states.

#### Trainer management

Implement:
- Create and edit trainers.
- Trainer availability.
- Specializations.
- Assigned clients.
- Session schedules.
- Appointment history.
- Workload analytics.

#### Attendance management

Implement:
- Daily attendance table.
- Search by member.
- Date filtering.
- Check-in and check-out.
- Duplicate-check-in prevention.
- QR-based check-in.
- Attendance reports.
- Export authorized reports to CSV.

QR attendance must use server-side verification and prevent replay or duplicate attendance events.

#### Payments and billing

Implement:
- Payment records.
- Transaction references.
- Payment status.
- Receipts and invoice generation.
- Outstanding balances.
- Refund status tracking.
- Revenue reports.

Use a payment gateway's sandbox for real payment integration. Do not claim a transaction is paid until the server receives a valid provider confirmation. Verify webhook signatures and implement idempotency.

#### Admin settings

Include:
- Gym profile.
- Operating hours.
- Membership configuration.
- Notification preferences.
- Staff roles and permissions.
- Audit logs.
- Theme settings.

---

### 9. TRAINER DASHBOARD

Create `/trainer` with a distinct but consistent interface.

Include:
- Overview of assigned members.
- Today's sessions.
- Weekly appointment calendar.
- Member progress overview.
- Assigned workout plans.
- Create and edit workout plans.
- Exercise library.
- Sets, repetitions, rest periods, and training notes.
- Session completion records.
- Member attendance history.
- Appointment scheduling.
- Member progress charts.
- Trainer availability settings.

Trainers may access only their own profile and members authorized by the backend.

---

### 10. MEMBER DASHBOARD

Create `/member` as a personalized fitness portal.

#### Overview

Show:
- Active membership.
- Membership expiry.
- Today's workout.
- Weekly attendance.
- Upcoming trainer sessions.
- Recent progress.
- Personal goals.
- Latest notifications.

#### Workout tracking

Include:
- Assigned workout plan.
- Exercise instructions.
- Sets and repetitions.
- Rest timer.
- Workout completion.
- Workout history.
- Personal training notes.

#### Fitness progress

Allow members to track:
- Body weight.
- Measurements.
- Personal fitness goals.
- Workout completion.
- Attendance consistency.
- Progress over time.

Make health-related measurements private to the member and explicitly authorized staff. Do not expose sensitive progress records to unrelated users.

#### Membership and payments

Include:
- Current plan.
- Membership dates.
- Renewal options.
- Payment history.
- Invoice downloads.
- Payment status.
- Cancellation requests where supported.

#### Appointments and profile

Include:
- Trainer directory.
- Session booking.
- Appointment rescheduling.
- Booking cancellation.
- Profile settings.
- Password changes.
- Notification preferences.

---

### 11. RECEPTIONIST DASHBOARD

Create `/reception` for daily gym operations.

Include:
- Quick member search.
- Member registration.
- Check-in and check-out.
- QR scanning.
- Membership status verification.
- Expiry alerts.
- Payment-status verification.
- Receipt lookup.
- Today's attendance list.

Receptionists must not have access to restricted administrative settings, trainer-only notes, or financial configuration.

---

### 12. SHARED DASHBOARD DESIGN

Every dashboard must have:
- Collapsible sidebar.
- Top navigation bar.
- Breadcrumbs.
- Search.
- Notification center.
- User profile menu.
- Light and dark themes.
- Responsive mobile navigation.
- Summary cards.
- Charts and tables.
- Loading skeletons.
- Empty states.
- Error states.
- Toast notifications.
- Confirmation dialogs.
- Keyboard-accessible controls.

Use different dashboard information architecture for each role rather than displaying identical pages with different headings.

#### Dashboard animation specifications

- Sidebar expands and collapses smoothly.
- Main content transitions when navigation changes.
- Summary cards appear with subtle staggered motion.
- Numbers animate when data loads.
- Charts reveal progressively.
- Table rows have restrained hover feedback.
- Filters transition smoothly.
- Modals use scale and opacity.
- Notifications slide in unobtrusively.
- Progress rings animate to actual values.
- Loading skeletons transition into real content.
- Theme switching uses a short, controlled transition.

Never delay critical business actions just to show animations.

---

### 13. DATABASE ARCHITECTURE

Create MongoDB collections with proper schemas, indexes, validation, timestamps, and references.

Required collections:

1. `users`
2. `members`
3. `membershipPlans`
4. `memberships`
5. `trainers`
6. `workoutPlans`
7. `exercises`
8. `attendance`
9. `payments`
10. `appointments`
11. `progressRecords`
12. `notifications`
13. `auditLogs`

Important relationships:
- A member has a user account.
- A member may have multiple historical memberships.
- Each membership references a configured plan.
- A trainer may have multiple assigned members.
- Workout plans may be assigned to specific members.
- Attendance records reference members.
- Payments reference the relevant member and membership or invoice.
- Appointments reference both member and trainer.
- Progress records belong to a member.
- Audit records identify the actor and action.

Implement:
- Unique email constraints.
- Unique member identifiers.
- Appropriate compound indexes.
- Referential validation.
- Pagination and filtering.
- Consistent timestamps.
- Soft deletion or archival for appropriate business records.
- Transaction-safe operations where multiple database writes must succeed together.

Never store plaintext passwords, raw payment-card information, or secrets in the database.

---

### 14. REST API DESIGN

Create versioned API endpoints under `/api/v1`.

Example endpoint groups:

**Authentication**
- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `POST /api/v1/auth/logout`
- `GET /api/v1/auth/me`
- `POST /api/v1/auth/forgot-password`
- `POST /api/v1/auth/reset-password`

**Members**
- `GET /api/v1/members`
- `POST /api/v1/members`
- `GET /api/v1/members/:id`
- `PATCH /api/v1/members/:id`
- `DELETE /api/v1/members/:id`

**Memberships**
- `GET /api/v1/membership-plans`
- `POST /api/v1/membership-plans`
- `POST /api/v1/memberships`
- `PATCH /api/v1/memberships/:id`
- `GET /api/v1/memberships/expiring`

**Trainers**
- `GET /api/v1/trainers`
- `POST /api/v1/trainers`
- `PATCH /api/v1/trainers/:id`

**Workouts**
- `GET /api/v1/workouts`
- `POST /api/v1/workouts`
- `PATCH /api/v1/workouts/:id`
- `POST /api/v1/workouts/:id/complete`

**Attendance**
- `GET /api/v1/attendance`
- `POST /api/v1/attendance/check-in`
- `POST /api/v1/attendance/check-out`
- `GET /api/v1/attendance/reports`

**Payments**
- `GET /api/v1/payments`
- `POST /api/v1/payments/checkout`
- `GET /api/v1/payments/:id`
- `POST /api/v1/payments/webhook`

**Appointments**
- `GET /api/v1/appointments`
- `POST /api/v1/appointments`
- `PATCH /api/v1/appointments/:id`
- `DELETE /api/v1/appointments/:id`

**Analytics**
- `GET /api/v1/analytics/overview`
- `GET /api/v1/analytics/revenue`
- `GET /api/v1/analytics/attendance`

Implement all necessary supporting endpoints. The endpoint list is a starting contract, not permission to leave important features unimplemented.

Every protected route must enforce authorization on the server. Validate identifiers, dates, amounts, pagination, filters, and request bodies. Prevent users from modifying fields they do not own.

---

### 15. SECURITY REQUIREMENTS

Implement:
- Secure password hashing.
- Server-side role authorization.
- HTTP-only, appropriately configured cookies.
- CSRF protection where cookie-based authentication requires it.
- Rate limiting on authentication and sensitive endpoints.
- Input validation and output sanitization where appropriate.
- Secure CORS configuration.
- Helmet security headers.
- Environment-variable secrets.
- Ownership checks for member and trainer records.
- Audit logging for important administrative actions.
- Secure upload validation if profile or gym images are uploaded.
- Safe error messages without stack traces in production.
- Expiring password-reset tokens.
- Secure payment webhook verification.

Do not rely on hiding buttons in React as a security mechanism. Enforce permissions at the API and database-operation level.

---

### 16. REAL-WORLD INTERACTION REQUIREMENTS

Every visible control must work.

Examples:
- Join Now opens the registration or membership-selection flow.
- Membership cards lead to the correct plan details.
- Login authenticates against the backend.
- Search filters actual records.
- Forms submit validated data to APIs.
- Edit buttons update database records.
- Delete or archive buttons perform authorized actions.
- Attendance buttons create verified attendance records.
- Appointment booking checks availability.
- Charts use actual API responses.
- Notifications display meaningful messages.
- Logout invalidates the user's authenticated session.
- QR scanning verifies the member and attendance state.
- Theme preferences persist appropriately.
- Pagination retrieves the requested page.
- CSV export respects the current user's permissions.

Never implement fake buttons, nonfunctional forms, permanently loading spinners, fabricated success notifications, or actions that only update the browser without saving data when persistence is expected.

If a third-party integration requires credentials, implement the integration interface, environment configuration, test mode, and a clear setup guide. Never pretend an unavailable service is connected.

---

### 17. RESPONSIVE DESIGN AND ACCESSIBILITY

Support:
- Desktop widescreen.
- Standard laptop.
- Tablet.
- Mobile portrait and landscape.

Requirements:
- No horizontal overflow.
- Mobile-friendly navigation.
- Touch-friendly controls.
- Readable text.
- Responsive charts and tables.
- Accessible form labels.
- Keyboard navigation.
- Visible focus states.
- Sufficient contrast.
- Semantic HTML.
- Descriptive image alt text.
- Reduced-motion support.

On mobile, simplify expensive 3D effects and prioritize content, navigation, and application functionality.

---

### 18. PROJECT STRUCTURE

Use a clean monorepo:

`FITZONE-PRO/`

`client/`
- `src/components/`
- `src/features/auth/`
- `src/features/members/`
- `src/features/memberships/`
- `src/features/trainers/`
- `src/features/workouts/`
- `src/features/attendance/`
- `src/features/payments/`
- `src/features/appointments/`
- `src/features/analytics/`
- `src/layouts/`
- `src/pages/`
- `src/routes/`
- `src/services/`
- `src/hooks/`
- `src/types/`
- `src/lib/`
- `src/styles/`
- `src/three/`
- `src/App.tsx`
- `src/main.tsx`

`server/`
- `src/config/`
- `src/models/`
- `src/controllers/`
- `src/routes/`
- `src/middleware/`
- `src/services/`
- `src/validators/`
- `src/utils/`
- `src/app.ts`
- `src/server.ts`

`docs/`
- `architecture.md`
- `database-schema.md`
- `api-reference.md`
- `setup-guide.md`

Also include:
- Root workspace scripts.
- `.env.example` files.
- `.gitignore`.
- Database seed scripts.
- Automated tests.
- README with screenshots and feature descriptions.
- Deployment documentation.

Adapt the structure when a better technical reason exists, but preserve separation of concerns.

---

### 19. IMPLEMENTATION WORKFLOW

Build the project in working, testable phases.

**Phase 1 — Foundation**
- Set up the monorepo.
- Configure React, TypeScript, routing, styles, and shared components.
- Establish design tokens and responsive layouts.

**Phase 2 — Cinematic public website**
- Build the hero.
- Add premium photography.
- Implement 3D scenes and scroll animation.
- Create membership, trainers, programs, and facilities pages.

**Phase 3 — Backend**
- Configure Express and MongoDB.
- Build schemas, validation, authentication, middleware, and API error handling.

**Phase 4 — Administration**
- Implement members, membership plans, trainers, attendance, payments, and analytics.

**Phase 5 — Trainer and member portals**
- Implement workout management, appointments, progress tracking, and notifications.

**Phase 6 — Reception**
- Implement member lookup, check-in, QR verification, and attendance operations.

**Phase 7 — Integrations**
- Add sandbox payment integration, notifications, secure upload support, and QR workflows.

**Phase 8 — Quality assurance**
- Test every route, form, mutation, permission, error state, and responsive layout.
- Verify reduced-motion behavior.
- Check performance and accessibility.
- Remove dead code, placeholder buttons, and broken imports.

**Phase 9 — Deployment**
- Prepare environment variables.
- Deploy the frontend and backend.
- Configure the production database and CORS.
- Document deployment and seed demo data.

---

### 20. REQUIRED DELIVERABLES

Produce a complete, working project containing:

1. Premium animated landing page.
2. Cinematic 3D hero experience.
3. Public membership and trainer pages.
4. Authentication and role-based routing.
5. Admin dashboard.
6. Trainer dashboard.
7. Member dashboard.
8. Receptionist dashboard.
9. MongoDB schemas and indexes.
10. Express REST APIs.
11. Membership and payment-record workflows.
12. Workout and progress tracking.
13. Appointment management.
14. Attendance and QR check-in.
15. Business analytics.
16. Responsive light and dark themes.
17. Reusable animations and 3D components.
18. Input validation and security controls.
19. Automated tests.
20. Seed data and demo accounts.
21. Complete README.
22. Environment configuration examples.
23. Local installation and startup commands.
24. Deployment instructions.
25. GitHub-ready documentation.

---

### 21. STRICT DEVELOPMENT RULES

- Do not deliver only a design description.
- Do not build a static mockup and call it a complete application.
- Do not omit backend integration.
- Do not leave essential buttons inactive.
- Do not hardcode fake dashboard metrics as production data.
- Do not invent payment success.
- Do not expose private member data across roles.
- Do not place secrets in source code.
- Do not sacrifice readability for visual effects.
- Do not overload every section with 3D animation.
- Do not remove working functionality when modifying existing files.
- Do not overwrite existing project configuration without inspecting it.
- Do not invent file paths or claim tests passed without running them.
- Provide complete replacement code when replacing a file, not incomplete fragments.
- Keep the code modular, reusable, typed, and maintainable.
- Use realistic demo data when external services are not configured, and label it clearly.
- Run the build and relevant tests after each major phase.

### 22. FINAL QUALITY STANDARD

The final product should look like a premium fitness technology startup's actual software product.

The public landing page should deliver an immersive, cinematic experience. The dashboards should feel like professional business software. The 3D elements should be polished and optimized. The backend should securely manage real data. All important workflows should work from end to end.

**Start by inspecting the existing workspace and package configuration. Then build the application incrementally, beginning with the design system and cinematic landing page, followed by the backend foundation and role-based dashboards. Deliver runnable code, exact file paths, installation commands, and test instructions at every phase.**