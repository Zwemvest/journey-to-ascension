export function createChildElement(parent: Element, childType: string): HTMLElement {
    const child = document.createElement(childType);
    parent.appendChild(child);
    return child;
}

export function areArraysEqual(array1: Array<unknown>, array2: Array<unknown>): boolean {
    return array1.length === array2.length &&
        array1.every((value, index) => value === array2[index]);
}
