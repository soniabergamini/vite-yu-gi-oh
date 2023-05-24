import { reactive } from 'vue'

export const store = reactive({
    urlAPI: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=100&offset=0',
    cardData: [],
    urlArchetypesList: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    archetypesData: [],
    loadingData: true,
    errorMsg: false
});