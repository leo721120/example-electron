import { nanoid } from 'nanoid'
import { ulid } from 'ulid'

declare global {
    interface StringConstructor {
        nanoid(): string;
        ulid(): string;
    }
    interface String {
        number(): number | null;
    }
}
String.nanoid = function () {
    return nanoid();
};
String.ulid = function () {
    return ulid();
}
String.prototype.number = function () {
    const num = Number(this);
    return isNaN(num) ? null : num;
};