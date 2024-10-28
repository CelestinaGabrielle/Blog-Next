import { api } from '../services/api';

export const getStudyData = async () => {
  try {
    const { data } = await api.get('/study');
    return data || []; 
  } catch (error) {
    console.error("Erro ao buscar dados de study:", error);
    return [];
  }
};


export const getStudyById = async (id) => {
  try {
    const { data } = await api.get(`/study?id=eq.${id}`);
    console.log('Dados retornados pela API:', data); 
    return data && data.length > 0 ? data[0] : null; 
  } catch (error) {
    console.error('Erro ao buscar o study:', error);
    return null;
  }
};
