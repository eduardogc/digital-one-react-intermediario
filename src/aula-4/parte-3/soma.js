export const soma = (a, b) => a + b;

export const somaSegura = (a, b) => {
    if (typeof a === number && typeof b === number) {
        return a + b;
    } else {
        // vamos convencionar -1 quando a soma for inválida 
        return -1;
    }
}