import { defineStore} from "pinia";
import {ref} from "vue";
export const useQuestionnaireStore = defineStore('questionnaire', () => {
    const selectedId = ref(0);
    const setId = (id: number) => {
        selectedId.value = id;
    }
    return {
        selectedId,
        setId
    }
})