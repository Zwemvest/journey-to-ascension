export function joinWithCommasAndAnd(strings: string[]): string {
    if (strings.length === 0) return "";
    if (strings.length === 1) return strings[0] as string;
    if (strings.length === 2) return `${strings[0]} and ${strings[1]}`;

    const allButLast = strings.slice(0, -1).join(", ");
    const last = strings[strings.length - 1];
    return `${allButLast}, and ${last}`;
}

export function formatNumber(n: number, allow_decimals: boolean = true): string {
    if (n < 0) {
        console.error("Tried to format negative number");
        return n + "";
    }

    if (allow_decimals && n < 10) {
        if (n < 10) {
            return n.toFixed(2);
        } else if (n < 100) {
            return n.toFixed(1);
        }
    }

    if (n < 10000) {
        return n.toFixed(0);
    }

    const postfixes = ["k", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc"];
    let postfix_index = -1;

    while (n > 1000 && (postfix_index + 1) < postfixes.length) {
        n = n / 1000;
        postfix_index++;
    }

    if (n < 10) {
        return n.toFixed(2) + postfixes[postfix_index];
    } else if (n < 100) {
        return n.toFixed(1) + postfixes[postfix_index];
    } else {
        return n.toFixed(0) + postfixes[postfix_index];
    }
}
