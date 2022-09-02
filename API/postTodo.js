export const postTodo = async (todo) => {
  try {
    const res = await fetch(`https://my-json-server.typicode.com/danielhalasz/M-To-do-list/todos`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title: `${todo}`, completed: false }),
    });

    // CHECK RES
    if (res.status === 201) {
      return await res.json();
    } else {
      console.log(`Error while posting todo with status : ${res.status}`);
      return false;
    }
  } catch (err) {
    console.error(err);
  }
};
