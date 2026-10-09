import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AdminContextValue {
  isAdmin: boolean;
  unlock: (pin: string) => boolean;
  lock: () => void;
}

const AdminContext = createContext<AdminContextValue>({
  isAdmin: false,
  unlock: () => false,
  lock: () => {},
});

const ADMIN_PIN = '05082009';

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  function unlock(pin: string): boolean {
    if (pin === ADMIN_PIN) {
      setIsAdmin(true);
      return true;
    }
    return false;
  }

  function lock() {
    setIsAdmin(false);
  }

  return (
    <AdminContext.Provider value={{ isAdmin, unlock, lock }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}
