#!/bin/sh
# Downloads the Fluent 3D PNGs listed in tools/pics.py into tools/.fluent (jsDelivr mirror of microsoft/fluentui-emoji).
cd "$(dirname "$0")/.." || exit 1
mkdir -p tools/.fluent
uv run --no-project --with pillow python tools/pics.py --list | while IFS='|' read -r word asset; do
  slug=$(echo "$asset" | tr 'A-Z ' 'a-z_')
  f="tools/.fluent/$slug.png"
  [ -s "$f" ] && continue
  enc=$(echo "$asset" | sed 's/ /%20/g')
  curl -sS -f --retry 5 --retry-all-errors --retry-delay 1 -o "$f" "https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/$enc/3D/${slug}_3d.png" || echo "FAIL $asset"
done
