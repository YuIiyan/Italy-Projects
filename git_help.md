# 🧠 Git Command Basics

## 📦 Setup

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 🌱 Start a Project

```bash
git init                     # Initialize a new Git repository
git clone <url>              # Clone an existing repository
```

## 📂 Basic Workflow

```bash
git status                   # Check the current status
git add <file>               # Stage specific file
git add .                    # Stage all changes
git commit -m "message"      # Commit staged changes
git push                     # Push to remote repo
git pull                     # Pull latest changes
```

## 🌿 Branching

```bash
git branch                   # List branches
git branch <branch-name>     # Create a new branch
git checkout <branch-name>   # Switch to a branch
git checkout -b <branch>     # Create & switch to a branch
git merge <branch>           # Merge another branch into current
```

## 🕵️ History & Logs

```bash
git log                      # Show commit history
git log --oneline            # Compact view
git diff                     # View unstaged changes
git diff --staged            # View staged changes
```

## 🔄 Undo Changes

```bash
git checkout -- <file>       # Discard local changes
git reset HEAD <file>        # Unstage a file
git revert <commit>          # Revert a commit (safe)
git reset --hard <commit>    # Reset to commit (dangerous)
```

## 🌐 Remote

```bash
git remote -v                # View remotes
git remote add origin <url> # Add remote origin
git push -u origin <branch>  # Push and set upstream
```

## 🎯 Tags

```bash
git tag                      # List tags
git tag <tag>                # Create tag
git push origin <tag>        # Push tag to remote
```

## 🧹 Cleanup

```bash
git stash                    # Save uncommitted changes
git stash pop                # Reapply stashed changes
git clean -fd                # Remove untracked files/directories
```

> ✅ Tip: Use `git help <command>` for detailed info on any command!
```

Let me know if you want a printable version, cheatsheet style, or tailored for a specific Git workflow like GitFlow or trunk-based.
