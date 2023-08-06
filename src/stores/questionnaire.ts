import { defineStore} from "pinia";
import {ref} from "vue";
export const useQuestionnaireStore = defineStore('questionnaire', () => {
    const selectedId = ref(-1);
    const setId = (id: number) => {
        selectedId.value = id;
    }
    const getIsAdmin = () => {
       return  sessionStorage.getItem('isAdmin');
    }
    const setIsAdmin = () => {
        sessionStorage.setItem('isAdmin', 'true');
    }
    return {
        selectedId,
        getIsAdmin,
        setIsAdmin,
        setId
    }
})