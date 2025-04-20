# todo.py
import json

TODO_FILE = "todos.json"
 

def load_todos():
    raise NotImplementedError("This function is not implemented yet.")


def save_todos(todos):
    raise NotImplementedError("This function is not implemented yet.")
 

def add_todo(task):
    raise NotImplementedError("This function is not implemented yet.")
 

def view_todos():
    raise NotImplementedError("This function is not implemented yet.")
 

def complete_todo(index):
    raise NotImplementedError("This function is not implemented yet.")
 

def delete_todo(index):
    raise NotImplementedError("This function is not implemented yet.")
 
if __name__ == '__main__':
   
    todos = load_todos()
    # Main loop (same as before)
    while True:
        print("\nOptions:")
        print("1. Add todo")
        print("2. View todos")
        print("3. Complete todo")
        print("4. Delete todo")
        print("5. Exit")


        choice = input("Enter your choice: ")


        if choice == "1":
            task = input("Enter todo task: ")
            add_todo(task)
        elif choice == "2":
            view_todos()
        elif choice == "3":
            index = input("Enter the index of the todo to complete: ")
            complete_todo(index)
        elif choice == "4":
            index = input("Enter the index of the todo to delete: ")
            delete_todo(index)
        elif choice == "5":
            break
        else:
            print("Invalid choice. Please try again.")
