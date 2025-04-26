import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // API dummy

export interface Item {
  id: number;
  title: string;
  body: string;
}

export const fetchItems = async (): Promise<Item[]> => {
  try {
    const response = await axios.get<Item[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchItemById = async (id: number): Promise<Item | null> => {
  try {
    const response = await axios.get<Item>(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const createItem = async (item: Omit<Item, 'id'>): Promise<Item | null> => {
  try {
    const response = await axios.post<Item>(API_URL, item);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateItem = async (id: number, item: Partial<Item>): Promise<Item | null> => {
  try {
    const response = await axios.put<Item>(`${API_URL}/${id}`, item);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteItem = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteItem = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteItem = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteItem = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteItem = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteItem = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteItem = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
