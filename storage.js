// Simple storage manager
const Storage = {
    get: (key) => {
      const data = localStorage.getItem(key);
      try {
        return JSON.parse(data);
      } catch {
        return data;
      }
    },
  
    set: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
  
    clear: (key) => {
      localStorage.removeItem(key);
    },
  
    backupToIDB: async (data) => {
      if (!window.indexedDB) return false;
      
      const db = await idb.openDB('WorkSyncBackup', 1, {
        upgrade(db) {
          db.createObjectStore('records');
        }
      });
      
      await db.put('records', data, 'latest');
      return true;
    }
  };
  
  // Add this to your HTML:
  // <script src="https://unpkg.com/idb@7/build/umd.js"></script>
  // <script src="js/storage.js"></script>