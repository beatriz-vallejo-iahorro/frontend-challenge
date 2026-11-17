# Prueba técnica de frontend · iAhorro

Estimado ser humano:

Soy IA-horro, el motor de inteligencia artificial de iAhorro. Puede que ya nos conozcamos: hace un tiempo me pidieron un 3 en raya y no salió bien. Esta vez me han encargado algo más serio, un **simulador de hipoteca**, y he hecho mi mejor esfuerzo.

Producto ya ha probado lo que hice y me ha devuelto tres tickets. Sospecho que alguno más se les ha escapado. ¿Me ayudas?

## Qué buscamos
El código lo ha escrito una IA, igual que buena parte del código que revisarás en tu día a día. Lo que queremos ver es justo lo que una IA no hace sola:

- **Criterio:** detectar lo que está mal, aunque nadie lo haya reportado, y decidir qué arreglar primero.
- **Verificación:** comprobar lo que genera la IA, o lo que escribes tú, con tests y probando la app de verdad.
- **Código mantenible:** simple, tipado, con el dominio separado de la interfaz. Que un compañero lo entienda sin explicaciones.
- **Accesibilidad:** un formulario que pueda usar cualquier persona.
- **Comunicación:** una PR que se pueda revisar, supuestos explícitos y preguntas concretas.

**Lo que no buscamos:**
- Que lo termines todo.
- Un diseño espectacular.
- Arquitecturas para una app diez veces más grande.

Una entrega parcial, bien priorizada y bien explicada vale más que una completa que nadie ha revisado.

## Qué tienes que hacer
Los tickets están en [`docs/tickets/`](docs/tickets/). En este orden de prioridad:

| # | Ticket | Tipo | Resumen |
|---|---|---|---|
| 1 | [SIM-101](docs/tickets/SIM-101.md) | Error | La cuota sale `NaN` con TIN 0 % y redondea mal |
| 2 | [SIM-103](docs/tickets/SIM-103.md) | Historia | Accesibilidad del formulario |
| 3 | [Diseño](#diseño) | Maquetación | La caja de resultados del Figma |
| 4 | [SIM-102](docs/tickets/SIM-102.md) | Historia | Comparar hipoteca fija y variable |

**Lo mínimo para entregar son los tres primeros.** Si no llegas a SIM-102, maqueta la caja de resultados con la pestaña "Hipoteca fija" y la cuota que ya calcula el simulador. SIM-102 suma, pero no es imprescindible. La prueba está pensada para unas 4-5 horas. No es un límite: si ves que te pasas mucho, para y cuéntanos en la PR qué harías después.

El único entregable escrito es **la descripción de la PR**, con su plantilla: qué has hecho y cómo probarlo, tus decisiones y preguntas, lo que has dejado fuera y cómo has usado la IA.

Los tickets son ficticios, pero están escritos como los de un equipo real. Como en cualquier proyecto real, los tickets y la documentación pueden tener errores o contradicciones. Si encuentras alguna, decide qué hacer y explícalo en la PR.

## Reglas
- **Alcance:** no buscamos que lo termines todo, sino ver cómo priorizas. Una entrega parcial bien explicada cuenta igual que una completa.
- **Sin frameworks.** TypeScript, el DOM y lo que ya hay en el repo. En el equipo trabajamos con Vue y con Angular, y no queremos que la prueba favorezca a nadie. El framework lo hablaremos en la entrevista.
- **Dependencias nuevas:** solo si las justificas en la PR.
- **Convenciones del repo:** en [`AGENTS.md`](AGENTS.md).

## Sobre la IA
**Usar IA está permitido y esperado.** Nos interesa cómo trabajas con ella, no si la usas. En la PR cuéntanos:
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

## Diseño
El [Figma de la calculadora de cuota](https://www.figma.com/design/sOzJ1Sm9LOhojiGK6nfzOH/Prueba-Front?node-id=0-1) es el diseño de la calculadora de la web, con el sistema de diseño de iAhorro. Es el producto completo, así que solo se maqueta una parte:

| Se maqueta | No se maqueta |
|---|---|
| La caja de resultados: pestañas "Hipoteca fija" e "Hipoteca variable", la cuota, el tipo, el importe a financiar y la letra pequeña | El formulario del Figma (sliders, desplegable y radios): el formulario es el de los tickets, con inputs sencillos |
| Escritorio (1440 px) y móvil (375 px) | Tablet |
| | El desglose (ahorro, entrada, impuestos, intereses), la gráfica, "Amortización de la hipoteca" y el bloque de "Consígueme esta hipoteca" |

Usa los tokens del Figma (colores, tipografía, espaciados, radios). Lo que no tiene diseño (el aviso de financiación, los errores y el foco) se resuelve con esos mismos tokens; [`docs/diseno.png`](docs/diseno.png) sirve de referencia para el aviso y los errores.

Si el diseño y un ticket no coinciden, manda el ticket. Si decides algo al respecto, cuéntalo en la PR.

## Cómo entregar
1. Pulsa **Use this template → Create a new repository** y créalo como **privado** en tu cuenta. No lo hagas público ni lo compartas: así la prueba sigue siendo justa para los demás.
2. Invita como colaboradora a [@beatriz-vallejo-iahorro](https://github.com/beatriz-vallejo-iahorro) (**Settings → Collaborators**).
3. Trabaja en una rama y abre una **pull request contra el `main` de tu repo**. No la mergees.
4. Escribe a [beatriz.vallejo@iahorro.com](mailto:beatriz.vallejo@iahorro.com) cuando esté lista. Tienes **7 días naturales** desde que recibes la prueba.

¿Dudas sobre el enunciado? Escríbenos a la misma dirección. Preguntar no resta: en un proyecto real también lo harías.

Cuando termine el proceso, puedes borrar el repo.

## Cómo es el proceso
1. **Prueba (esta fase):** hasta 7 días para entregar.
2. **Revisión:** revisamos tu PR como revisaríamos una del equipo. Nos apoyamos en herramientas de IA (ejecución de tests, análisis del código), pero las valoraciones y la decisión las toman **siempre personas**.
3. **Defensa (unos 50 minutos), si pasas a la siguiente fase:**
   - Nos enseñas tu PR y hablamos de tus decisiones.
   - Hacemos un pequeño cambio juntos, con tus herramientas habituales (IA incluida) y pantalla compartida.
   - Revisas en voz alta un componente corto de Vue o de Angular, el que prefieras.

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
