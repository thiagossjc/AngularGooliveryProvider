import { ActionReducer, ActionReducerMap, MetaReducer, State } from "@ngrx/store";
import { environment } from "src/environments/environment";

export interface State{
}


export const reducers:ActionReducerMap<State> ={

}

export function logger(reducer:ActionReducer<State>):ActionReducer<State>{
        return function(state: State, action: any): State{
            console.log('state', state);
            console.log('action', action);
            return reducer(state, action);
        }
}

export const metaReducer:MetaReducer<State>[] =!environment.production ? [logger]:[];