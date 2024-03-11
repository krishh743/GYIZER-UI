import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd"; // Import Input from Ant Design, not TextArea

interface Task {
  id: number;
  title: string;
  content: string;
}

function TodoForm() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedContent, setEditedContent] = useState<string>("");
  const [deleteTaskId, setDeleteTaskId] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const addTaskToDo = (values: { title: string; content: string }) => {
    const newTask: Task = {
      id: Date.now(),
      title: values.title,
      content: values.content,
    };

    setTasks([...tasks, newTask]);
    form.resetFields();
  };

  const onFinish = (values: { title: string; content: string }) => {
    addTaskToDo(values);
  };

  const truncateText = (text: string, maxCharacters: number) => {
    if (text.length <= maxCharacters) {
      return text;
    }
    const truncatedText = text.slice(0, maxCharacters);
    return `${truncatedText}...`;
  };

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setEditedTitle(task.title);
    setEditedContent(task.content);
    form.setFieldsValue({
      title: task.title,
      content: task.content,
    });
  };

  const handleUpdate = () => {
    if (editingTask) {
      const updatedTasks = tasks.map((task) =>
        task.id === editingTask.id
          ? { ...task, title: editedTitle, content: editedContent }
          : task
      );

      setTasks(updatedTasks);
      setEditingTask(null);

      // Reset form fields
      form.resetFields();
    }
  };

  const handleDelete = (taskId: number) => {
    setDeleteTaskId(taskId);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (deleteTaskId !== null) {
      const updatedTasks = tasks.filter((task) => task.id !== deleteTaskId);
      setTasks(updatedTasks);
      setDeleteTaskId(null);
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setDeleteTaskId(null);
  };

  const [form] = Form.useForm();
  return (
    <div className="flex flex-col gap-20 justify-center items-center h-[88vh]">
      <Form
        form={form}
        name="todo_form"
        className="flex flex-row gap-2"
        onFinish={onFinish}
      >
        <div className="input-forms flex flex-col gap-2">
          <Form.Item
            name="title"
            className="m-0"
            rules={[{ required: true, message: "Please input a title!" }]}
          >
            <Input
              className="body-border-bg"
              value={editingTask ? editedTitle : undefined}
              onChange={(e) => setEditedTitle(e.target.value)}
              placeholder="Title..."
            />
          </Form.Item>

          {editingTask ? (
            <Form.Item
              className="m-0"
              name="content"
              rules={[{ required: true, message: "Please input content!" }]}
            >
              <Input.TextArea
                className="body-border-bg"
                value={editingTask ? editedContent : undefined}
                onChange={(e) => setEditedContent(e.target.value)}
                placeholder="Controlled autosize"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
            </Form.Item>
          ) : (
            <Form.Item
              className="m-0"
              name="content"
              rules={[{ required: true, message: "Please input content!" }]}
            >
              <Input
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                placeholder="Input..."
                className="body-border-bg"
              />
            </Form.Item>
          )}
        </div>
        <div className="flex ">
          <Button
            onClick={() => {
              if (editingTask) {
                handleUpdate();
              } else {
                form.submit();
              }
            }}
            className="cursor-pointer  m-0 p-0 border-primary:hover"
            type="primary"
          >
            {editingTask ? (
              <img
                src="/images/ic_update.svg"
                className="cursor-pointer "
                alt=""
              />
            ) : (
              <img
                src="/images/ic_add.svg"
                className="cursor-pointer "
                alt=""
              />
            )}
          </Button>
        </div>
      </Form>

      {tasks.length > 0 ? (
        <div className="task-border-bg w-full p-4 text-center border shadow sm:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 2xl:grid-cols-3">
            <div className="task-tickets-border-bg border grid grid-cols w-full text-start p-4 rounded-xl">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <span className="text-2xl">{task.title}</span>
                    <p className="text-md">{truncateText(task.content, 60)}</p>
                  </div>

                  <div className="flex flex-row gap-2">
                    <Button
                      className="cursor-pointer h-[32px] w-[32px] m-0 p-0 border-none"
                      type="primary"
                      onClick={() => handleEdit(task)}
                    >
                      <img
                        src="/images/ic_edit.svg"
                        className="cursor-pointer h-full w-full"
                        alt=""
                      />
                    </Button>
                    <Button
                      className="cursor-pointer h-[32px] w-[32px] m-0 p-0 border-none"
                      type="primary"
                      onClick={() => handleDelete(task.id)}
                    >
                      <img
                        src="/images/ic_delete.svg"
                        className="cursor-pointer h-full w-full"
                        alt=""
                      />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="task-border-bg w-full p-4 text-center border flex justify-center items-center shadow sm:p-8">
          <div className="flex flex-col gap-2">
            <div className="border-primary border-[2px]"></div>
            <span className="text-2xl">No tasks</span>
            <div className="border-primary border-[2px]"></div>
          </div>
        </div>
      )}

      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        onOk={handleOk}
        closeIcon={<></>}
        closable={false}
        width={400}
        centered
        footer={<></>}
        wrapClassName="custom-modal"
      >
        <div className="p-4 flex justify-center bg-black items-center custom-div">
          <b className="text-sm text-white text-center">Delete this task?</b>
        </div>
        <div className=" bg-black flex items-center p-4 space-x-2 border-gray-200 rounded-b dark:border-gray-600">
          <button
            onClick={handleCancel}
            type="button"
            className="w-full bg-[#1F1E1B]  text-white rounded-xl p-2 font-bold  border-[2px] border-primary"
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-full text-white bg-[#1F1E1B] rounded-xl p-2 font-bold border-[2px] border-primary"
            onClick={handleOk}
          >
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default TodoForm;
