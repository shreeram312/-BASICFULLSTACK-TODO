const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors");

const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const createpayload = req.body;
  const parsepayload = createTodo.safeParse(createpayload);
  if (!parsepayload.success) {
    res.status(403).json({
      msg: "Wrong inputs",
    });
    return;
  }

  await todo.create({
    title: createpayload.title,
    description: createpayload.description,
    completed: false,
  });
  res.json({
    msg: "Succesfully added your Todo",
  });

  // Put it in mongodbcd
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatepayload = req.body;
  const parsepayload = updateTodo.safeparse(updatepayload);
  if (!parsepayload.success) {
    res.status(403).json({
      msg: "Wrong inputs",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    {
      completed: true,
    }
  );

  res.json({
    msg: "Todo Marked as Completed ",
  });
});

app.listen(PORT, function () {
  console.log(`The Port is Running on Port ${PORT}`);
});
