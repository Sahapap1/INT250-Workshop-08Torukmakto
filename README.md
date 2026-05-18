# 🎓 The University of West Holland - Web Interface & Student Portal

โปรเจกต์พัฒนาระบบเว็บไซต์หลักและพอร์ทัลสำหรับนักศึกษาของ The University of West Holland เน้นการออกแบบที่สะท้อนถึงความน่าเชื่อถือทางวิชาการผสมผสานกับนวัตกรรมสมัยใหม่ (Heritage & Innovation) พัฒนาด้วย **Vue 3** และ **Tailwind CSS** เป็นส่วนหนึ่งของรายวิชา **INT250 CSS Framework (2/2025)** สัปดาห์ที่ 14 (Workshop: Designing and Developing a Multi-Page Web Interface)

---

## 🚀 Key Systems & Features

### 1. 🏫 Institution Home & Analytics
- **Heritage & Innovation Identity:** การจัด Visual Hierarchy บนหน้าแรกเพื่อสื่อสารถึงอัตลักษณ์ของมหาวิทยาลัยอย่างชัดเจน
- **Academic Programs Grid:** แนะนำหลักสูตรและคณะยอดนิยม (Medicine, Law, Industrial Engineering) ในลักษณะ Bento Grid ผสมผสาน Responsive Card Layout
- **Institutional Stats Counter:** แผงแสดงข้อมูลและสถิติความสำเร็จของสถาบัน (เช่น ปีที่ก่อตั้ง 1642, จำนวนนักศึกษา 12k+, อัตราการจ้างงาน 95%)

### 2. 📝 Dynamic Admissions System (Multi-step Form)
ระบบรับสมัครนักศึกษาเข้าศึกษาต่อในระดับปริญญาตรี (Undergraduate Application) ผ่านฟอร์มแบบมีขั้นตอน (Multi-step) ควบคุมข้อมูลผ่าน Centralized State:
- **Smart Identity Profiling:** แผงกรอกข้อมูลพื้นฐานทางการศึกษาที่ปรับฟิลด์ตาม "สถานะผู้สมัคร" (Applicant Track) 3 รูปแบบโดยอัตโนมัติ:
  - **Regular Student:** นักเรียนดัตช์ทั่วไป (กรอกรหัส BSN Number และเลือกแผนการเรียน VWO Profile)
  - **Polytechnic (HBO):** นักศึกษาโอนย้ายจากสายอาชีพ (เลือกสถานะ Propedeuse / Full Diploma และเก็บข้อมูล GPA สะสม)
  - **International Applicants:** นักศึกษาต่างชาติ (เลือกประเทศต้นทาง และกรอกระดับคะแนนภาษาอังกฤษ IELTS / TOEFL)
- **Conditional Document Upload:** การจัดกลุ่มอัปโหลดเอกสารหลักฐานแยกตามคุณสมบัติแทร็ก (เช่น แทร็กนานาชาติจะแสดงรายการให้ส่ง Passport Copy) พร้อมระบบแสดงสถานะ `✓ File uploaded` และ Checkbox แจ้งการตรวจสอบความถูกต้องแบบเรียลไทม์
- **Summary & Legal Review:** หน้าต่างตรวจสอบข้อมูลสรุปทุกส่วน (Personal, Academic, Documents) ก่อนการส่งจริง พร้อมระบบ Declaration ให้กดยอมรับเงื่อนไขทางกฎหมาย และระบบ Save Progress ลงระบบ Local Storage

### 3. 🚴 Campus Services & Sports Facilities Booking
- **Language Course Registration:** ส่วนจำลองการลงทะเบียนเรียนคอร์สภาษาระดับสากล (เช่น Academic Writing, Japanese/Chinese Basics) พร้อมแถบประเมินที่นั่งคงเหลือ (Seats Available)
- **High-Fidelity Sports Booking:** ระบบแดชบอร์ดจองพื้นที่สนามและศูนย์กีฬาประจำวิทยาเขต แสดงผล Capacity ข้อมูลแบบทันท่วงที:
  - *Football Field:* สนามหญ้าเทียมเกรดมาตรฐานโปร รองรับการคำนวณผู้เล่นแมตช์ 11v11
  - *Fitness Center / Basketball Court:* บันทึกการเข้าใช้งาน (Check-in) และระบุสถานะจำกัดโควตา (Limited Slots)
  - *Swimming Pool:* ระบบจองลู่วิ่งในสระว่ายน้ำโอลิมปิก พร้อม Dynamic Badge บอกอุณหภูมิของน้ำ (26°C)

### 4. 📊 Student Portal & Project Workspace
- **Academic Progress Tracker:** ตารางติดตามคะแนนวิชาเรียน เกรดเฉลี่ยรายโมดูล และแสดงผลลัพธ์ผ่านแถบเปอร์เซ็นต์แบบไดนามิก (`:style="{ width: course.percent }"`)
- **Journey Timeline Tracker:** เครื่องมือแสดงเส้นทางการเรียนจำลอง ตั้งแต่ขั้น Admission, Enrollment ไปจนถึงวันจบการศึกษา โดยคำนวณเส้นประและเฉดสีตามสถานะอดีตและปัจจุบันอัตโนมัติ (Done, Active, Pending)
- **Project Workspace & Thesis Monitoring:** พื้นที่ทำงานส่วนกลางสำหรับติดตามโปรเจกต์วิจัยและวิทยานิพนธ์ แสดงรายชื่อผู้ทำงานด้วยภาพ Avatar/Initials และประเมินสถานะความคืบหน้าของ Milestone (Proposal, Collection, Draft Review, Final Defense) ร่วมกับอาจารย์ที่ปรึกษา

### 5. 🐧 "Bright Penguin" System Theme Design
- **Tailwind Design Tokens:** หลีกเลี่ยงการใช้ Arbitrary values เกินความจำเป็น โดยหันมาควบคุมโทนสีและขนาดผ่าน Semantic Tokens (เช่น `bg-surface-container-lowest`, `text-primary`, `border-outline-variant`)
- **Theme UI Experience:** นำเสนอแนวคิดธีมสว่างสไตล์เฉพาะตัวที่มีความนุ่มนวล สะอาดตา และเพิ่มความคมชัดในการอ่านข้อมูลการเรียนจำนวนมากเป็นเวลานาน (Aesthetic & Readability Focus)

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
## Group 08 Torukmakto

| 👤 Member         | 👨‍💻 Name                              |
| ----------------- | ------------------------------------------------ |
| 67130500034 |  วชิตะนันท์ สุโพธิ์       |
| 67130500046 |  สหภาพ ใยสุ่น |
| 67130500057 | อิทธิเชษฐ์ รัตนาพันธ์ |
| 67130500107 | ภาณุเมศ รัชย์ธนโภคิน |

🧑‍🎓 Developed for: INT250 CSS Framework | SIT-KMUTT
