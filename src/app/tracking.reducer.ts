import { createAction, props, createReducer, on } from '@ngrx/store';

export interface TrackingState {
  counts: { [tag: string]: number };
}

export class InitialTrackingState implements TrackingState {
  counts: { [tag: string]: number } = {};
}

export const trackClick = createAction(
  '[Tracking] Track Click',
  props<{ tag: string }>()
);

export const trackingReducer = createReducer(
  new InitialTrackingState(),
  on(trackClick, (state, { tag }) => {
    const currentCount = state.counts[tag] || 0;
    return {
      ...state,
      counts: {
        ...state.counts,
        [tag]: currentCount + 1
      }
    };
  })
);
