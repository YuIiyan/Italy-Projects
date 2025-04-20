# test_todo.py
import unittest
import memtodo as todo # Import the todo.py file


class TestTodoInMemory(unittest.TestCase):


    def setUp(self):
        # Reset the todos list before each test
        todo.todos = []


    def test_add_todo(self):
        todo.add_todo("Buy groceries")
        self.assertEqual(len(todo.todos), 1)
        self.assertEqual(todo.todos[0]["task"], "Buy groceries")
        self.assertFalse(todo.todos[0]["completed"])


    def test_complete_todo(self):
        todo.add_todo("Walk the dog")
        todo.complete_todo("1")  # Complete the first todo
        self.assertTrue(todo.todos[0]["completed"])


    def test_complete_todo_invalid_index(self):
        todo.add_todo("Do laundry")
        todo.complete_todo("2")  # Index out of range
        self.assertFalse(todo.todos[0]["completed"]) #Stays the same


    def test_delete_todo(self):
        todo.add_todo("Pay bills")
        todo.delete_todo("1")
        self.assertEqual(len(todo.todos), 0)


    def test_delete_todo_invalid_index(self):
        todo.add_todo("Clean room")
        todo.delete_todo("2") #Index out of range
        self.assertEqual(len(todo.todos), 1) #Stays the same


if __name__ == '__main__':
    unittest.main()
