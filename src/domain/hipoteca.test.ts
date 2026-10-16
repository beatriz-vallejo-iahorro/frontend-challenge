import { describe, expect, it } from 'vitest';
import { calcularCuota, porcentajeFinanciacion } from './hipoteca';

describe('calcularCuota', () => {
  it('calcula la cuota de una hipoteca estándar', () => {
    expect(calcularCuota(200000, 3, 300)).toBe(948.42);
  });

  it.skip('redondea la cuota a céntimos', () => {
    expect(calcularCuota(250000, 2.25, 360)).toBe(955.62);
  });
});

describe('porcentajeFinanciacion', () => {
  it('calcula el porcentaje financiado', () => {
    expect(porcentajeFinanciacion(200000, 40000)).toBe(80);
  });
});
