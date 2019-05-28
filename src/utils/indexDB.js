// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB ||             window.msIndexedDB;

// if (!window.indexedDB) {
//     window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
// }

// let request = window.indexedDB.open("myDataBase", 1);
//     db,
//     tx,
//     store,
//     index;

// request.onupgradeneeded = function(e) {
//     let db = request.result;
// };

// request.onerror = function(e) {
    
//   };
//   request.onsuccess = function(e) {
    
//   };

import { openDB } from "idb";

const dbPromise = _ => {
	if (!("indexedDB" in window)) {
		throw new Error("Your browser doesn't support a stable version of IndexedDB.");
	}

	return openDB("SaveStore", 1, upgradeDb => {
		if (!upgradeDb.objectStoreNames.contains("stateUserId")) {
			upgradeDb.createObjectStore("stateUserId");
		}
  	});
}

export const checkStorage = async (storeName) => {
	try {
		const db = await dbPromise();
		console.log('asdadasd');
		console.log(db);
		const tx = db.transaction(storeName, "readonly");
		const store = tx.objectStore(storeName);
		
		return store.get(storeName);
	} catch (error) {
		console.log(error);
	}
};
  
export const saveToStorage = async (storeName, properties) => {
	try {
		const db = await dbPromise();
		const tx = db.transaction(storeName, "readwrite");
		console.log(tx);
		const store = tx.objectStore(storeName);
		
		store.put(properties, storeName);
		
		return tx.complete;
	} catch (error) {
		console.log(error);
	}
};