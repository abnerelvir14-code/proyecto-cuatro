import { trackingReducer, trackClick, InitialTrackingState } from './tracking.reducer';

describe('Tracking Reducer Unit Tests', () => {
  it('debe retornar el estado inicial cuando la accion no es conocida', () => {
    const initialState = new InitialTrackingState();
    const action = { type: 'UNKNOWN' };
    const state = trackingReducer(initialState, action);

    expect(state).toBe(initialState);
  });

  it('debe incrementar el contador de un tracking tag de forma inmutable', () => {
    const initialState = { counts: { 'btn-mapa': 1 } };
    const action = trackClick({ tag: 'btn-mapa' });
    const state = trackingReducer(initialState, action);

    expect(state.counts['btn-mapa']).toBe(2);
    expect(state).not.toBe(initialState);
  });

  it('debe registrar un nuevo tracking tag si no existia previamente', () => {
    const initialState = new InitialTrackingState();
    const action = trackClick({ tag: 'card-animada' });
    const state = trackingReducer(initialState, action);

    expect(state.counts['card-animada']).toBe(1);
  });
});
