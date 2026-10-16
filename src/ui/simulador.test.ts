import { getByRole } from '@testing-library/dom';
import { afterEach, describe, expect, it } from 'vitest';
import { montarSimulador } from './simulador';

describe('montarSimulador', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('pinta el título del simulador', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    montarSimulador(root);

    expect(getByRole(root, 'heading', { name: 'Simulador de hipoteca' })).toBeTruthy();
  });
});
