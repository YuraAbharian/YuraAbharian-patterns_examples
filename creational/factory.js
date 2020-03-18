class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50
    }
}

class StandardMembership {
    constructor(name) {
        this.name = name;
        this.cost = 100
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership,
    };

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple
        const member = new Membership(name);
        member.type = type;
        member.define = function () {
            console.log(`${this.name} (${this.type}): ${this.cost}`)
        };

        return member;
    }
}

const Factory = new MemberFactory();
const members = [Factory.create('Yura', 'standard'), Factory.create('Alena', 'simple'), Factory.create('Adelina', 'premium')];

console.log(members.forEach(el => el.define()));