import { defineStore} from "pinia";
import {ref} from "vue";
export const useQuestionnaireStore = defineStore('questionnaire', () => {
    const selectedId = ref(-1);
    const setId = (id: number) => {
        selectedId.value = id;
    }
    const isAdmin = ref(false);
    return {
        selectedId,
        isAdmin,
        setId
    }
})