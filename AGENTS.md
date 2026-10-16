# Convenciones del repo

Para personas y para agentes de IA.

## Código
- TypeScript estricto. Nada de `any`.
- Sin frameworks ni librerías de UI. Una dependencia nueva solo con justificación en `DECISIONS.md`.
- Lógica de negocio en `src/domain/`: funciones puras, sin acceso al DOM. Interfaz en `src/ui/`.
- Importes en euros con `Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' })`. Nada de concatenar `' €'`.
- Textos de la interfaz en español.

## Contrato público
Estas funciones mantienen su nombre, su fichero y sus parámetros actuales. Se pueden añadir parámetros opcionales al final:
- `calcularCuota(capital, tinAnual, meses)` y `porcentajeFinanciacion(precio, ahorros)` en `src/domain/hipoteca.ts`.
- `montarSimulador(root)` en `src/ui/simulador.ts`.

## Tests
- Vitest. Tests junto al fichero que prueban (`hipoteca.ts` → `hipoteca.test.ts`).
- En tests de interfaz, `@testing-library/dom`: consultar por rol o por label, nunca por clase ni por id.
- Los cálculos llevan tests con casos límite.

## Git
- Conventional Commits: `fix:`, `feat:`, `test:`, `refactor:`, `docs:`, `chore:`.
- Commits pequeños y con sentido.

## Antes de dar algo por terminado
`npm run typecheck`, `npm run lint` y `npm test` en verde.
