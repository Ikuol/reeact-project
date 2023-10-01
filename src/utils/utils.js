export function getRandomValues(values) {
    const randomIndex = Math.floor(Math.random() * values.length);
    return values[randomIndex];
}