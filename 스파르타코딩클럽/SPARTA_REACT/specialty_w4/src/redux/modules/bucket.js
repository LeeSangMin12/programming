// bucket.js
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";
const DELETE = "bucket/DELETE";
const TUPDATE = "bucket/TUPDATE";
const FUPDATE = "bucket/FUPDATE";
const LOADED = "bucket/LOADED";

const initialState = {
  is_loaded: false,
  list: [],
};

export function loadBucket(bucket_list) {
  return { type: LOAD, bucket_list };
}
// Action Creators
export function createBucket(bucket) {
  return { type: CREATE, bucket: bucket };
}

export function deleteBucket(bucket_index) {
  return { type: DELETE, bucket_index };
}

export function isLoaded(loaded) {
  return { type: LOADED, loaded };
}
export function TupdateBucket(bucket_index) {
  return { type: TUPDATE, bucket_index };
}
export function FupdateBucket(bucket_index) {
  return { type: FUPDATE, bucket_index };
}

//middlewares
export const loadBucketFB = () => {
  return async function (dispatch) {
    const bucket_data = await getDocs(collection(db, "bucket"));

    let bucket_list = [];
    bucket_data.forEach((b) => {
      bucket_list.push({ id: b.id, ...b.data() });
    });
    dispatch(loadBucket(bucket_list));
  };
};

export const addBucketFB = (bucket) => {
  return async function (dispatch) {
    dispatch(isLoaded(false));
    const docRef = await addDoc(collection(db, "bucket"), bucket);
    // const _bucket = await getDoc(docRef);
    const bucket_data = { id: docRef.id, ...bucket };

    dispatch(createBucket(bucket_data));
  };
};

export const trueUpdateBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "bucket", bucket_id);
    await updateDoc(docRef, { completed: true });

    const _bucket_list = getState().bucket.list;
    const bucket_index = _bucket_list.findIndex((b) => {
      return b.id === bucket_id;
    });

    dispatch(TupdateBucket(bucket_index));
  };
};

export const falseUpdateBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    const docRef = doc(db, "bucket", bucket_id);
    await updateDoc(docRef, { completed: false });

    const _bucket_list = getState().bucket.list;
    const bucket_index = _bucket_list.findIndex((b) => {
      return b.id === bucket_id;
    });

    dispatch(FupdateBucket(bucket_index));
  };
};

export const deleteBucketFB = (bucket_id) => {
  return async function (dispatch, getState) {
    if (!bucket_id) {
      window.alert("아이디가 없네요");
      return;
    }
    const docRef = doc(db, "bucket", bucket_id);
    await deleteDoc(docRef);

    const _bucket_list = getState().bucket.list;
    const bucket_index = _bucket_list.findIndex((b) => {
      return b.id === bucket_id;
    });

    dispatch(deleteBucket(bucket_index));
  };
};

//Reducer
export default function reducer(state = initialState, action = {}) {
  if (action.type === "bucket/LOAD") {
    return { list: action.bucket_list, is_loaded: true };
  } else if (action.type === "bucket/CREATE") {
    const new_bucket_list = [...state.list, action.bucket];
    return { ...state, list: new_bucket_list, is_loaded: true };
  } else if (action.type === "bucket/DELETE") {
    const new_bucket_list = state.list.filter((l, idx) => {
      return parseInt(action.bucket_index) !== idx;
    });
    return { ...state, list: new_bucket_list };
  } else if (action.type === "bucket/TUPDATE") {
    const new_bucket_list = state.list.map((l, idx) => {
      if (Number(action.bucket_index) === idx) {
        return { ...l, completed: true };
      } else {
        return l;
      }
    });
    return { ...state, list: new_bucket_list };
  }else if (action.type === "bucket/FUPDATE") {
    const Fnew_bucket_list = state.list.map((l, idx) => {
      if (Number(action.bucket_index) === idx) {
        return { ...l, completed: false };
      } else {
        return l;
      }
    })
    return { ...state, list: Fnew_bucket_list };
  }else if (action.type === "bucket/LOADED") {
    return { ...state, is_loaded: action.loaded };
  } else {
    return state;
  }
}
// Reducer
// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     case "bucket/Create" : {
//       const new_bucket_list = [...state.list, action.bucket];
//       return {list : new_bucket_list};
//     }
//     default:
//       return state;
//   }
// }
