const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);

  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  //store in mongodb
  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });

  res.status(200).json({
    msg: "Todo Created",
  });
});

app.get("/todos", async (req, res) => {
  const todos = await todo.find({});

  res.status(200).send(todos);
});

app.put("/completed", async (req, res) => {
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);

  if (!parsedPayLoad.success) {
    res.status(411).json({
      msg: "You sent the wrong input",
    });
    return;
  }
  //update db
  await todo.update(
    {
      _id: req.body,
    },
    {
      completed: true,
    }
  );

  res.status(200).json({
    msg: "Todo marked as completed",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
