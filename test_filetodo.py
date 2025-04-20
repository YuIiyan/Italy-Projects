# test_todo.py
import unittest
import filetodo as todo  # Import the todo.py file
import os
import json
 

class TestTodoFileStorage(unittest.TestCase):
    def setUp(self):
        # Reset the todos list and clear the test file before each test
        todo.todos = []
        try:
            os.remove(todo.TODO_FILE)
        except FileNotFoundError:
            pass #It's ok if the file doesn't exist
 

    def test_add_todo(self):
        todo.add_todo("Buy groceries")
        loaded_todos = todo.load_todos()
        self.assertEqual(len(loaded_todos), 1)
        self.assertEqual(loaded_todos[0]["task"], "Buy groceries")
        self.assertFalse(loaded_todos[0]["completed"])
    

    def test_complete_todo(self):
        todo.add_todo("Walk the dog")
        todo.complete_todo("1")
        loaded_todos = todo.load_todos()
        self.assertTrue(loaded_todos[0]["completed"])
 

    def test_delete_todo(self):
        todo.add_todo("Pay bills")
        todo.delete_todo("1")
        loaded_todos = todo.load_todos()
        self.assertEqual(len(loaded_todos), 0)
 

    def test_load_todos_empty_file(self):
        # Ensure that load_todos returns an empty list when the file is empty
        with open(todo.TODO_FILE, 'w') as f:
            json.dump([], f)  # Create an empty JSON file
        loaded_todos = todo.load_todos()
        self.assertEqual(loaded_todos, [])

if __name__ == '__main__':
    unittest.main()
