class Complaints {
    constructor(){
        this.complaints = [];
    }
    reply(complaint){};
    add(complaint){
        this.complaints.push(complaint);
        return this.reply(complaint);
    };
}

class ServiceComplaints extends Complaints {
    reply({id, customer, description}) {
        return `Service ID - ${ id }: ${ description }. FROM CUSTOMER: ${ customer }`
    }
}
class ProductComplaints extends Complaints {
    reply({id, customer, description}) {
        return `Product ID - ${ id }: ${ description }. FROM CUSTOMER: ${ customer }`
    }
}

class RegistryComplaints{
    registry(type, customer, description){
        let id = Date.now();
        let complaint;

        switch (type) {
            case 'service': {
                complaint = new ServiceComplaints();
                break
            }
            case 'product': {
                complaint = new ProductComplaints();
                break
            }
        }
        return complaint.add({id, customer, description})
    }
}

const registry = new RegistryComplaints();

console.log('PRODUCT: ', registry.registry('product', 'Yura', 'Can\'t login'));
console.log('SERVICE: ', registry.registry('service', 'Alena', 'page admin 404'));