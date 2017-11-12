export function increment(data) {
    return { type: 'INCREMENT', preload: data };
}

export function decrement(data) {
    return { type: 'DECREMENT', preload: data };
}