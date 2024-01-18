interface QueueIntf{
    insert(ele):number;
    remove():boolean;
}

interface DequeIntf extends QueueIntf{
    insertFront(ele):number;
    removeBack():boolean;
}


class Queue implements DequeIntf{
    insertFront(ele: any): number {
        throw new Error("Method not implemented.");
    }
    removeBack(): boolean {
        throw new Error("Method not implemented.");
    }
    insert(ele: any): number {
        throw new Error("Method not implemented.");
    }
    remove(): boolean {
        throw new Error("Method not implemented.");
    }
    
}