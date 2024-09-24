import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

export const storage =
  typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["token"],
};
