#!/bin/sh
set -eu

ENV_FILE="/app/public/env-config.js"

cat > "$ENV_FILE" <<EOF
window._env_ = {
  NEXT_PUBLIC_API_BASE_URL: "${NEXT_PUBLIC_API_BASE_URL:-}",
  NEXT_PUBLIC_API_BASE: "${NEXT_PUBLIC_API_BASE:-}"
};
EOF

exec "$@"
