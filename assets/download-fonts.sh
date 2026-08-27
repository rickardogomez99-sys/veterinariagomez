#!/bin/bash

# Crear carpeta de fuentes si no existe
mkdir -p fonts

# Descargar Staatliches (Regular)
curl -L "https://fonts.gstatic.com/s/staatliches/v11/HI_OiY8KO6hCsQSoAPM50gp8jQII.ttf" -o "fonts/Staatliches-Regular.ttf" 2>/dev/null

# Descargar Work Sans (400, 500, 600, 700)
curl -L "https://fonts.gstatic.com/s/worksans/v8/QGY_z_wNahGAdqQ43RhVcIgM.ttf" -o "fonts/WorkSans-Regular.ttf" 2>/dev/null
curl -L "https://fonts.gstatic.com/s/worksans/v8/QGY_z_wNahGAdqQ43RhVcIgM.ttf" -o "fonts/WorkSans-Medium.ttf" 2>/dev/null
curl -L "https://fonts.gstatic.com/s/worksans/v8/QGY_z_wNahGAdqQ43RhVcIgM.ttf" -o "fonts/WorkSans-SemiBold.ttf" 2>/dev/null
curl -L "https://fonts.gstatic.com/s/worksans/v8/QGY_z_wNahGAdqQ43RhVcIgM.ttf" -o "fonts/WorkSans-Bold.ttf" 2>/dev/null

# Descargar JetBrains Mono (400, 500)
curl -L "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfMBBRAW2JWf0ZqZBR-.ttf" -o "fonts/JetBrainsMono-Regular.ttf" 2>/dev/null
curl -L "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfMBBRAW2JWf0ZqZBR-.ttf" -o "fonts/JetBrainsMono-Medium.ttf" 2>/dev/null

echo "✅ Fuentes descargadas"
ls -lh fonts/
