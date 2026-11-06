# Product Assumptions Document: CampusDrop

## 1. What product are you planning to build?
CampusDrop is a hyper-local quick-commerce web application designed for college campuses to deliver snacks, beverages, and lab stationery within 12–15 minutes.

## 2. What problem does it solve?
It solves the problem of immediate student cravings and urgent academic/exam needs (such as running out of pens, record books, or energy drinks late at night) where traditional delivery apps take 30–45 minutes or fail to navigate campus hostel blocks and labs.

## 3. Who are the target users?
College students living in campus hostels or studying late in labs and libraries.

## 4. What is the main use case?
Ordering late-night study snacks and urgent morning/exam stationery delivered directly to specific hostel blocks or lab gates.

## 5. What are the core features?
* Category filtering and real-time search
* Dynamic quantity steppers (+/-)
* Slide-over cart drawer with instant bill calculation and free delivery threshold alerts
* Campus drop location selector (Hostel blocks, library gates, labs)
* Simulated instant UPI checkout and order dispatch confirmation screen

## 6. What assumptions are you making about the users?
* Students prefer fast digital checkouts (UPI) over cash on delivery.
* Clear drop zone tags (e.g., Hostel Block A) are more effective than standard street addresses on campus.
* Orders naturally concentrate around late-night study hours and early-morning class rush windows.

## 7. What will be included in your MVP?
* Fully functional storefront UI with dummy SKU data
* Global cart management using React Context (`CartContext`)
* Slide-over checkout drawer with block and room/desk routing
* Order success state with unique order ID generation

## 8. What will NOT be included in the MVP?
* Real payment gateway integration (Razorpay/Stripe)
* Live GPS tracking of student runners
* Real backend database or authentication server (using local React state and dummy datasets instead)