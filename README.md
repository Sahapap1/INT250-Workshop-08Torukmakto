# 🎓 The University of West Holland - Web Interface & Student Portal

โปรเจกต์พัฒนาระบบเว็บไซต์หลักและพอร์ทัลสำหรับนักศึกษาของ The University of West Holland เน้นการออกแบบที่สะท้อนถึงความน่าเชื่อถือทางวิชาการผสมผสานกับนวัตกรรมสมัยใหม่ (Heritage & Innovation) พัฒนาด้วย **Vue 3** และ **Tailwind CSS** เป็นส่วนหนึ่งของรายวิชา **INT250 CSS Framework (2/2025)** สัปดาห์ที่ 14 (Workshop: Designing and Developing a Multi-Page Web Interface)

---

## 🚀 Features

- 🏫 **University Landing Page:** นำเสนอข้อมูลภาพรวม สถิติความสำเร็จ (Stats Counter) และหลักสูตรที่โดดเด่น (Programs Grid)
- 🔐 **Secure Authentication:** ระบบหน้าต่างเข้าสู่ระบบ (Login Card) สำหรับนักศึกษาเพื่อเข้าใช้งาน Portal
- 📊 **Student Dashboard:** แดชบอร์ดจัดการข้อมูลส่วนตัว ประกอบด้วย:
  - **Academic Progress:** ติดตามความคืบหน้าการเรียนและเกรดแบบเรียลไทม์
  - **Journey Tracker:** แสดงเส้นทางการศึกษาและสถานะปัจจุบัน
  - **Research Projects:** จัดการและติดตามความคืบหน้าของโครงงานวิจัย
- 🐧 **Bright Penguin Theme:** ระบบธีมสว่างที่ออกแบบมาเป็นพิเศษเพื่อให้ความรู้สึกสะอาดตา อ่านง่าย และมีเอกลักษณ์เฉพาะตัว (Custom Aesthetic) แทนที่การใช้ Dark Mode แบบเดิมๆ
- 📱 **Fully Responsive:** จัดการ Layout ด้วย Grid และ Flexbox เพื่อให้รองรับการแสดงผลทุกขนาดหน้าจอ

---

## 🛠️ Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Styling:** Tailwind CSS (เน้นการใช้ Design Tokens และหลีกเลี่ยง Arbitrary values)
- **Routing:** Vue Router (สำหรับ Multi-page navigation)
- **State Management:** Pinia (สำหรับจัดการ Auth State)

---

## 📂 Project Structure

โปรเจกต์ถูกแบ่งออกเป็น Component อย่างเป็นระบบ เพื่อให้สามารถนำไป Reusable ได้:

```text
src/
├── assets/               
│   └── img/
│
├── components/             
│   ├── Admission/          
│   │   ├── ApplicationHeader.vue
│   │   ├── FormAcademic.vue
│   │   ├── FormDocuments_Inter.vue
│   │   ├── FormDocuments_Polytechnic.vue
│   │   ├── FormDocuments_Standard.vue
│   │   ├── FormPersenal.vue
│   │   └── FormReview.vue
│   │
│   ├── campus/             
│   │   ├── cards/
│   │   │   └── CourseCard.vue
│   │   ├── reservations/   
│   │   │   ├── ReservationRow.vue
│   │   │   ├── ReservationSection.vue
│   │   │   ├── ReservationStatusBadge.vue
│   │   │   └── ReservationTable.vue
│   │   ├── sports/         
│   │   │   ├── BookingModal.vue
│   │   │   ├── SportsFacilitiesSection.vue
│   │   │   └── SportsFacilityCard.vue
│   │   ├── CampusFeatures.vue
│   │   ├── CampusHero.vue
│   │   ├── LanguageCoursesSection.vue
│   │   ├── RegisterCoursModal.vue
│   │   └── RegistrationBadge.vue
│   │
│   └── project/            
│       ├── AcademicProgress.vue
│       └── ThesisCard.vue
│
├── layouts/                
│   ├── AuthLayout.vue      
│   └── MainLayout.vue     
│
├── router/               
│   └── index.js
│
├── stores/                
│   ├── admissionStore.js  
│   └── appStore.js         
│
├── views/                
│   ├── AdmissionsView.vue
│   ├── CampusServicesView.vue
│   ├── HomeView.vue
│   ├── LoginView.vue
│   ├── ProjectWorkspaceView.vue
│   └── StudentProfileView.vue
│
├── App.vue             
├── main.js                
└── style.css          
```
## ▶️ How to Run

```bash
npm install
npm run dev
```
| 👤 Member         | 👨‍💻 Name                              |
| ----------------- | ------------------------------------------------ |
| 67130500034 |  วชิตะนันท์ สุโพธิ์       |
| 67130500046 |  สหภาพ ใยสุ่น |
| 67130500057 | อิทธิเชษฐ์ รัตนาพันธ์ |
| 67130500107 | ภาณุเมศ รัชย์ธนโภคิน |

🧑‍🎓 Developed for: INT250 CSS Framework | SIT-KMUTT
