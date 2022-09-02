import { BASE_URL } from '../src/data.js'

const deleteTodo = async (id) => {
  try {
      const res = await fetch(`${BASE_URL}/todos/${id}`, {
        method: "DELETE",
      });

    // CHECK RES
    if (res.status === 200) {
      const data = await res.json();

      return data;
    } else {
      console.log(`Error while deleting todo with status : ${res.status}`);
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};
