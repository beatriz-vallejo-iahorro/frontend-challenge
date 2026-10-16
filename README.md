# Prueba técnica de frontend · iAhorro

Estimado ser humano:

Soy IA-horro, el motor de inteligencia artificial de iAhorro. Puede que ya nos conozcamos: hace un tiempo me pidieron un 3 en raya y no salió bien. Esta vez me han encargado algo más serio, un **simulador de hipoteca**, y he hecho mi mejor esfuerzo.

Producto ya ha probado lo que hice y me ha devuelto tres tickets. Sospecho que alguno más se les ha escapado. ¿Me ayudas?

## Qué tienes que hacer
Los tickets están en [`docs/tickets/`](docs/tickets/):

| Ticket | Tipo | Resumen |
|---|---|---|
| [SIM-101](docs/tickets/SIM-101.md) | Error | La cuota sale `NaN` con TIN 0 % y redondea mal |
| [SIM-102](docs/tickets/SIM-102.md) | Historia | Comparar hipoteca fija y variable |
| [SIM-103](docs/tickets/SIM-103.md) | Historia | Accesibilidad del formulario |

Además del código, entrega:
- **La descripción de la PR:** qué has hecho, por qué y cómo probarlo. Hay plantilla.
- **[`DECISIONS.md`](DECISIONS.md):** supuestos que has tomado, preguntas que le habrías hecho a producto y lo que has dejado fuera.
- **[`AI_USAGE.md`](AI_USAGE.md):** cómo has usado la IA (ver más abajo).

Como en cualquier proyecto real, los tickets y la documentación pueden tener errores o contradicciones. Si encuentras alguna, decide qué hacer y explícalo en `DECISIONS.md`.

## Reglas
- **Tiempo:** unas **3 horas**. No buscamos que lo termines todo, sino ver cómo priorizas. Indica en la PR cuánto tiempo has dedicado.
- **Sin frameworks.** TypeScript, el DOM y lo que ya hay en el repo. En el equipo trabajamos con Vue y con Angular, y no queremos que la prueba favorezca a nadie. El framework lo hablaremos en la entrevista.
- **Dependencias nuevas:** solo si las justificas en `DECISIONS.md`.
- **Convenciones del repo:** en [`AGENTS.md`](AGENTS.md).

## Sobre la IA
**Usar IA está permitido y esperado.** Nos interesa cómo trabajas con ella, no si la usas. En `AI_USAGE.md` cuéntanos:
- Qué herramientas has usado y para qué.
- Los 2-3 prompts que más te hayan servido.
- Al menos una cosa que la IA hizo mal y cómo te diste cuenta.
- Qué partes has escrito o reescrito tú.

Si no usas IA, también vale: cuéntalo.

## Cómo arrancar
Necesitas Node 22 (versión en `.nvmrc`; vale `nvm use`).

```bash
npm ci
npm run dev        # http://localhost:5173
npm test           # tests con Vitest
npm run typecheck
npm run lint
```

¿No quieres instalar nada? Abre el repo en GitHub Codespaces (botón **Code → Codespaces**).

## Cómo entregar
1. Pulsa **Use this template → Create a new repository** y créalo como **privado** en tu cuenta.
2. Invita como colaborador a: [@beatriz-vallejo-iahorro](https://github.com/beatriz-vallejo-iahorro).
3. Trabaja en una rama y abre una **pull request contra el `main` de tu repo**. No la mergees.
4. Avísanos en [beatriz.vallejo@iahorro.com](mailto:beatriz.vallejo@iahorro.com). Tienes **7 días naturales** desde que recibes la prueba.

¿Dudas sobre el enunciado? Escríbenos a [beatriz.vallejo@iahorro.com](mailto:beatriz.vallejo@iahorro.com). Preguntar no resta: en un proyecto real también lo harías.

## Cómo evaluamos
- Revisamos la PR como revisaríamos una del equipo: corrección, calidad del código, tests, accesibilidad, comunicación y criterio en el uso de la IA.
- La revisión **se apoya en herramientas de IA** (ejecución de tests, análisis del código). Las valoraciones y la decisión las toman **siempre personas**.
- Si pasas a la siguiente fase, haremos una sesión de unos 50 minutos: nos enseñarás tu PR, haremos un pequeño cambio juntos con tus herramientas habituales (IA incluida) y revisaremos un componente de Vue o Angular, el que prefieras.

## Glosario
| Término | Qué es |
|---|---|
| **TIN** | Tipo de interés nominal anual. Es el que se usa para calcular la cuota. |
| **TAE** | Tasa anual equivalente. Incluye el TIN, las comisiones y los gastos asociados. Sirve para comparar ofertas, **no** para calcular la cuota. |
| **Hipoteca fija** | El TIN es el mismo durante todo el plazo. |
| **Hipoteca variable** | El TIN se revisa periódicamente: TIN = Euríbor + diferencial. |
| **Euríbor** | Índice de referencia de las hipotecas variables. Su valor cambia cada mes. |
| **Diferencial** | Puntos que el banco suma al Euríbor (por ejemplo, Euríbor + 0,75 %). |
| **% de financiación** | Importe a financiar ÷ precio de la vivienda. La mayoría de los bancos financian hasta el 80 % en vivienda habitual. |

Mucha suerte. Y gracias: yo sola no lo consigo.
