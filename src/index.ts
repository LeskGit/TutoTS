

type StringArray = Array<string>;

interface BackPack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

interface User {
    name: string;
    age: number;
    premium: boolean;
}

class UserAccount {

    name: string;
    age: number;
    premium: boolean;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.premium = name.includes("Xiao");
    }

    add(new_user: UserAccount): void {
        console.log("test add UserAccount");
    }

    get(): UserAccount {
        return this;
    }

    toString(): string {
    return `User: ${this.name} is ${this.age} years old and is ${this.premium ? "" : "not "}premium`;
}

}



function main() {
    const user: UserAccount = new UserAccount("XiaoPang", 21);
    
    const test: BackPack<UserAccount> = new UserAccount("test", 1);
    console.log(test.add(user))
    const s_array : StringArray = ["cool", ""];
}

main();