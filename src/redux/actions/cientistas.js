export const FETCH_CIENTISTAS_PENDING = 'FETCH_CIENTISTAS_PENDING';
export const FETCH_CIENTISTAS_SUCCESS = 'FETCH_CIENTISTAS_SUCCESS';
export const FETCH_CIENTISTAS_ERROR = 'FETCH_CIENTISTAS_ERROR';

export function fetchCientistasPending() {
    return {
        type: FETCH_CIENTISTAS_PENDING
    }
}

export function fetchCientistasSuccess(cientistas) {
    return {
        type: FETCH_CIENTISTAS_SUCCESS,
        cientistas: cientistas
    }
}

export function fetchCientistasError(error) {
    return {
        type: FETCH_CIENTISTAS_ERROR,
        error: error
    }
}