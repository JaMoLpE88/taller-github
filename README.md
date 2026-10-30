# Taller de GitHub

Este es el **repositorio de práctica** de la guía completa de GitHub de [jmolo](https://jmolo.es/blog/github-guia-completa/). Un proyecto minúsculo —un taller donde ensayar todo lo que la guía cuenta— para practicar sin miedo: issues, pull requests, Actions, releases.

## Requisitos

Para participar en el taller solo necesita:

- Una cuenta de GitHub.
- Git instalado (ver [la guía de jmolo de Git](https://jmolo.es/blog/git-historial-que-salva/)).
- Ganas de equivocarse en un sitio seguro.

## Estructura

```text
taller-github/
├── README.md        ← tu documnetación de entrada (este archivo)
├── LICENSE          → licencia MIT
├── docs/            → material del taller
└── scripts/         → comprobaciones que usa el CI
```

## Cómo participar

1. Lee la [guía completa de GitHub](https://jmolo.es/blog/github-guia-completa/).
2. Abre un issue o contribute en un issue existente.
3. Propón tus cambios con un pull request — el CI te lo agradecerá.

## Preguntas frecuentes

**¿Puedo romper algo?**
No: és exactamente para lo que está este repo. Crea una rama, ensaya y abandónala si no te convence.

**¿Cómo propongo un cambio?**
Abre un issue primero (para acordar el enfoque) y después un pull request con tu rama. El CI correraá lint y enlaces automáticamente.

**¿El CI falla en mi PR?**
Abre la pestaña Actions y lee el log del job fallido; la guía de jmolo explica paso a paso cómo depurarlo.
