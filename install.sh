#!/usr/bin/env bash
set -e

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
FRONTEND_DIR="$ROOT_DIR/frontend"

echo "== 1/8: Ensuring PHP, Composer, and Node are available =="
command -v php >/dev/null 2>&1 || { echo "PHP is required. Please install PHP 8.3+ and retry."; exit 1; }
command -v composer >/dev/null 2>&1 || { echo "Composer is required. Please install Composer and retry."; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "npm is required. Please install Node.js/npm and retry."; exit 1; }

echo "== 2/8: Backend composer install =="
cd "$BACKEND_DIR"
composer install --no-interaction --prefer-dist

echo "== 3/8: Backend environment setup =="
if [ ! -f .env ]; then
  cp .env.example .env
fi
# Prefer SQLite for installer in CI/sandbox environments
if grep -q '^DB_CONNECTION=' .env; then
  sed -i 's/^DB_CONNECTION=.*/DB_CONNECTION=sqlite/' .env
else
  echo 'DB_CONNECTION=sqlite' >> .env
fi
if grep -q '^DB_DATABASE=' .env; then
  sed -i 's#^DB_DATABASE=.*#DB_DATABASE=database/database.sqlite#' .env
else
  echo 'DB_DATABASE=database/database.sqlite' >> .env
fi
mkdir -p database && touch database/database.sqlite
php artisan key:generate --force
php artisan storage:link || true

echo "== 4/8: Database migrate fresh + seed =="
php artisan migrate:fresh --seed --force

echo "== 5/8: Show routes =="
php artisan route:list | sed -n '1,200p'

echo "== 6/8: Frontend install + build =="
cd "$ROOT_DIR"
npm install --no-audit --no-fund
npm --workspace frontend run build

echo "== 7/8: Demo credentials =="
DEMO_FILE="$BACKEND_DIR/storage/app/private/demo-credentials.txt"
if [ -f "$DEMO_FILE" ]; then
  echo "-- Contents of $DEMO_FILE --"
  cat "$DEMO_FILE"
else
  echo "Demo credentials file not found: $DEMO_FILE"
fi

echo "== 8/8: Done =="
echo "Installation complete. Backend ready with seeded data and demo users. Frontend built."
