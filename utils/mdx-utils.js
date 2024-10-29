import { api } from '../services/api';

export const getStudyData = async () => {
  try {
    const { data } = await api.get('/study');
    return data || [];
  } catch (error) {
    return [];
  }
};

export const getStudyById = async (id) => {
  try {
    const { data } = await api.get(`/study?id=eq.${id}`);

    if (data && data.length > 0) {
      return data[0];
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
