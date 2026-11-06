# Design System: CampusDrop

## 1. Colors
* **Primary Color:** `#4F46E5` (`indigo-600`) — Used for primary CTAs, active states, and brand highlights.
* **Secondary Color:** `#10B981` (`emerald-500`) — Used for delivery badges, success states, and free delivery indicators.
* **Background Color:** `#F8FAFC` (`slate-50`) — Clean, high-contrast canvas for card separation.
* **Text Color:** `#0F172A` (`slate-900`) for primary headings/body text, and `#64748B` (`slate-500`) for secondary labels.
* **Accent/Warning:** `#F59E0B` (`amber-500`) for low stock or special banners.

## 2. Typography
* **Font Family:** Inter / Plus Jakarta Sans (`font-sans`)
* **Headings:** 
  * H1: 18px / Extra Bold (`text-lg font-extrabold`)
  * H2: 16px / Bold (`text-base font-bold`)
* **Body Text:** 14px / Regular to Medium (`text-sm`)
* **Small / Metadata:** 11px–12px (`text-xs` / `text-[11px]`) for item units, ETAs, and badge tags.

## 3. UI Components
* **Navbar / Header:** Sticky top bar housing branding, campus block selector, search bar, and category filter pills.
* **Product Card (`ProductCard.jsx`):** Reusable grid card featuring image preview, delivery ETA badge, item tags, price, and dynamic `+ ADD` / quantity stepper buttons.
* **Slide-over Drawer (`CartDrawer.jsx`):** Persistent slide-over modal handling cart items, free-delivery progress nudges, campus block dropdown, room number inputs, and the UPI checkout button.
* **Buttons & Badges:** Rounded interactive buttons with hover states and status badges.