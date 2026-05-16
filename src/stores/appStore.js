import { reactive } from "vue";

export const authStore = reactive({
    user: JSON.parse(localStorage.getItem("user")) || null,

    login(universityId, password, remember) {
        // mock user
        const mockStudent = {
            universityId: "65010001",
            password: "1234",
            name: "John Doe",
            role: "student",
        };

        // validate
        if (
            universityId !== mockStudent.universityId ||
            password !== mockStudent.password
        ) {
            return {
                success: false,
                message: "Invalid University ID or Password",
            };
        }

        // remove password before save
        const userData = {
            universityId: mockStudent.universityId,
            name: mockStudent.name,
            role: mockStudent.role,
        };

        // save current user
        this.user = userData;

        localStorage.setItem("user", JSON.stringify(userData));

        // remember me
        if (remember) {
            localStorage.setItem(
                "rememberedUniversityId",
                universityId
            );
        } else {
            localStorage.removeItem("rememberedUniversityId");
        }

        return {
            success: true,
        };
    },

    logout() {
        this.user = null;

        localStorage.removeItem("user");
    },

    getRememberedUniversityId() {
        return localStorage.getItem("rememberedUniversityId") || "";
    },

    isAuthenticated() {
        return !!this.user;
    },
});