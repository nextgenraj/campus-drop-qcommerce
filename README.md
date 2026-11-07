# CampusDrop ⚡ (12-Min Campus Quick-Commerce MVP)

CampusDrop is a hyper-local quick-commerce web application built for college campuses. It bridges the gap between campus tuck shops and hostel blocks/labs, delivering snacks, midnight caffeine, and urgent exam stationery within 12 minutes.

---

## 🚀 Product Assumptions & Scope
* **Single Dark-Store Origin:** Orders originate from a central campus co-op/tuck shop.
* **Structured Campus Drop-Points:** Replaces standard street addresses with campus-specific nodes (*Boys Hostel Block A, Girls Hostel Block C, Central Library Gate, CSE Lab 302*).
* **Frictionless Browse-to-Checkout:** No forced auth wall on browse; students add items instantly and input their hostel/room number inside a slide-over drawer.
* **Prepaid Instant UPI:** Excludes Cash on Delivery to eliminate prank orders and runner delays at hostel gates.

---

## 🛠️ Tech Stack
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS
* **State Management:** React Context API (`CartContext`)
* **Icons & UI:** Custom emoji assets & Lucide-react

---

## ⚙️ Local Setup & Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/nextgenraj/campus-drop-qcommerce.git](https://github.com/nextgenraj/campus-drop-qcommerce.git)
   cd campus-drop-qcommerce