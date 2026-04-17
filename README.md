# SkinCure

SkinCure is a mobile app + backend API for capturing skin images, running a TensorFlow-based skin condition prediction, and saving case history entries.

## Project structure

```text
skin-cure/
├── frontend/   # Expo React Native mobile app
└── backend/    # Django + Django REST Framework API
```

## Tech stack

- **Frontend:** Expo, React Native, React Navigation
- **Backend:** Django, Django REST Framework, django-guest-user
- **ML inference:** TensorFlow/Keras (`backend/ml_models/final_model.h5`)
- **Database:** SQLite (default Django config)

## Features

- Capture a photo from camera or pick from gallery
- Run model inference and return predicted label + confidence
- Save case metadata (description, age, sex, result, image)
- View saved cases and delete cases
- View condition-specific info screens in the app

## Backend setup (Django)

1. Create and activate a virtual environment.
2. Install dependencies:

   ```bash
   pip install -r /home/runner/work/skin-cure/skin-cure/backend/requirements.txt
   ```

3. Apply migrations:

   ```bash
   cd /home/runner/work/skin-cure/skin-cure/backend
   python manage.py migrate
   ```

4. Run the server:

   ```bash
   python manage.py runserver 0.0.0.0:8000
   ```

The API base URL is `http://<host>:8000/skincure/`.

## Frontend setup (Expo)

1. Install dependencies:

   ```bash
   cd /home/runner/work/skin-cure/skin-cure/frontend
   npm install
   ```

2. Set backend host in:

   `/home/runner/work/skin-cure/skin-cure/frontend/url.js`

   ```js
   export const URL = "YOUR_BACKEND_IP";
   ```

3. Start Expo:

   ```bash
   npm start
   ```

4. Run on Android/iOS/web from Expo CLI as needed.

## API endpoints

Configured in `backend/skincure/urls.py`:

- `GET /skincure/guest/` – create/get guest session and return results
- `GET /skincure/guest2/` – secondary guest helper endpoint
- `GET /skincure/profiles/` – list saved results
- `POST /skincure/profiles/` – save a result with metadata + image
- `DELETE /skincure/delete/profile/` – delete a saved result by `id`
- `POST /skincure/predict/` – run TensorFlow prediction on uploaded image

## Development notes

- This repository is currently configured for development (e.g., `DEBUG=True`, broad `ALLOWED_HOSTS`).
- The frontend depends on reachable backend networking from simulator/device.
- Model inference loads `./ml_models/final_model.h5` at request time.
