import { reactive } from "vue";

export const admissionStore = reactive({
    // Step 1: Personal Info
    personal: {
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        gender: "male",
        nationality: "",
        email: "",
        phone: "",
        address: "",
        idNumber: "",
    },

    // Step 2: Academic Background
    academic: {
        institutionName: "",
        bsnNumber: "",
        vwoProfile: "Nature & Health",
        hboStatus: "",
        gpa: "",
        coursework: "",
        countryOfOrigin: "United Kingdom",
        englishProficiency: "",
    },

    // Step 3: Documents (upload status flags)
    documents: {
        transcript: false,
        degreeCertificate: false,
        statementOfPurpose: false,
        resume: false,
        standardizedTests: false,
    },

    // Reset all data
    reset() {
        this.personal = {
            firstName: "",
            middleName: "",
            lastName: "",
            dateOfBirth: "",
            gender: "male",
            nationality: "",
            email: "",
            phone: "",
            address: "",
            idNumber: "",
        };
        this.academic = {
            institutionName: "",
            bsnNumber: "",
            vwoProfile: "Nature & Health",
            hboStatus: "",
            gpa: "",
            coursework: "",
            countryOfOrigin: "United Kingdom",
            englishProficiency: "",
        };
        this.documents = {
            transcript: false,
            degreeCertificate: false,
            statementOfPurpose: false,
            resume: false,
            standardizedTests: false,
        };
    },

    // Save current form data to localStorage
    saveToLocal() {
        const data = {
            personal: { ...this.personal },
            academic: { ...this.academic },
            documents: { ...this.documents },
        };
        localStorage.setItem("admissionDraft", JSON.stringify(data));
    },

    // Load saved data from localStorage
    loadFromLocal() {
        const saved = localStorage.getItem("admissionDraft");
        if (saved) {
            try {
                const data = JSON.parse(saved);
                if (data.personal) Object.assign(this.personal, data.personal);
                if (data.academic) Object.assign(this.academic, data.academic);
                if (data.documents) Object.assign(this.documents, data.documents);
            } catch (e) {
                console.error("Failed to load admission draft", e);
            }
        }
    },

    // Clear saved data from localStorage
    clearLocal() {
        localStorage.removeItem("admissionDraft");
    },

    // Validate required fields
    isComplete() {
        const p = this.personal;
        const a = this.academic;
        const d = this.documents;
        return (
            p.firstName.trim() !== "" &&
            p.lastName.trim() !== "" &&
            p.dateOfBirth !== "" &&
            p.nationality.trim() !== "" &&
            p.email.trim() !== "" &&
            p.phone.trim() !== "" &&
            a.institutionName.trim() !== "" &&
            d.transcript &&
            d.degreeCertificate &&
            d.statementOfPurpose &&
            d.resume
        );
    },
});

// Auto-load saved draft on startup
admissionStore.loadFromLocal();
