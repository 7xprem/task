# TaskFlow — Flask Task Manager

A full-featured task management web application built with Python Flask, SQLite, and a custom dark-mode UI.

---

## Features

- **CRUD for Tasks** — Create, view, edit, delete tasks with title, description, priority, status, due date, and category
- **CRUD for Categories** — Color-coded categories with task counts
- **Dashboard** — Live stats (total, pending, in-progress, done, overdue) + Due Soon panel
- **Filtering** — Filter tasks by keyword, priority, status, category
- **Sorting** — Sort by newest, oldest, due date, or priority
- **Toggle Complete** — One-click toggle via AJAX (no page reload)
- **Flash Messages** — Auto-dismiss success/error notifications
- **REST API** — `/api/stats` JSON endpoint
- **Responsive UI** — Sidebar layout, dark theme, custom fonts

---

## Project Structure

```
taskflow/
├── app.py                  # Flask app, models, routes
├── taskmanager.db          # SQLite database (auto-created)
├── templates/
│   ├── base.html           # Shared layout (sidebar, topbar, flash)
│   ├── index.html          # Dashboard
│   ├── tasks.html          # Tasks list with filters
│   ├── task_form.html      # Create / Edit task form
│   ├── task_detail.html    # Task detail view
│   ├── categories.html     # Categories grid
│   └── category_form.html  # Create / Edit category form
└── static/
    ├── css/
    │   └── style.css       # Full UI styles
    └── js/
        └── app.js          # Toggle-complete, flash auto-dismiss
```

---

## Setup & Run

### 1. Install dependencies

```bash
pip install flask flask-sqlalchemy
```

### 2. Run the app

```bash
python app.py
```

### 3. Open in browser

```
http://localhost:5000
```

The database and sample data are created automatically on first run.

---

## Database Models

### Category
| Column     | Type    | Notes               |
|------------|---------|---------------------|
| id         | Integer | Primary key         |
| name       | String  | Unique, required    |
| color      | String  | Hex color code      |
| created_at | DateTime| Auto set            |

### Task
| Column      | Type    | Notes                          |
|-------------|---------|--------------------------------|
| id          | Integer | Primary key                    |
| title       | String  | Required                       |
| description | Text    | Optional                       |
| priority    | String  | low / medium / high            |
| status      | String  | pending / in_progress / done   |
| due_date    | Date    | Optional                       |
| category_id | Integer | FK → categories.id             |
| created_at  | DateTime| Auto set                       |
| updated_at  | DateTime| Auto updated                   |

---

## API

| Endpoint    | Method | Description          |
|-------------|--------|----------------------|
| /api/stats  | GET    | Returns task counts as JSON |

**Sample response:**
```json
{
  "total": 10,
  "pending": 4,
  "in_progress": 3,
  "done": 3
}
```

---

## Tech Stack

| Layer    | Technology          |
|----------|---------------------|
| Backend  | Python 3, Flask     |
| ORM      | Flask-SQLAlchemy    |
| Database | SQLite              |
| Frontend | HTML, CSS, Vanilla JS |
| Fonts    | Syne, DM Sans (Google Fonts) |

---

## Tools & Platforms

- **Python Flask** — Web framework
- **SQLite** — Embedded relational database
- **HTML / CSS** — Custom dark-mode UI (no external CSS framework)
- **Jinja2** — Template engine (built into Flask)
