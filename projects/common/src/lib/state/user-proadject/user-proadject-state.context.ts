import { Injectable, Injector } from '@angular/core';
import { StateContext } from '@lcu/common';
import { UserProadjectState } from './user-proadject.state';

@Injectable({
    providedIn: 'root'
})
export class LcuManagementStateContext extends StateContext<UserProadjectState> {

    // Constructors
    constructor(protected injector: Injector) {
        super(injector);
    }

    
    // API Methods
    // public GetLcuById(id: number): void {
    //     this.Execute({
    //         Arguments: {
    //             LcuId: id
    //         },
    //         Type: 'GetLcuById'
    //     });
    // }

    //  Helpers
    protected defaultValue() {
        return { Loading: true } as UserProadjectState;
    }
    
    protected loadStateKey(): string {
        return 'main';
    }

    protected loadStateName(): string {
        return 'lcu';
    }
}
