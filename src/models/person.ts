export abstract class Person {
    constructor(
        public readonly name: string,
        public readonly email: string
    ) {}

    abstract getDescription(): string;
}