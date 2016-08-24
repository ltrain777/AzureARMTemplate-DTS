declare namespace arm {

    export interface IAzureDeploymentJsonTemplate {
        schema: string;
        contentVersion: string;
        parameters: any;
        variables: any;
        resources: any;
        outputs: any;
    }

    // Remove or move to app
    export interface IDictionary<T> {
        [key: string]: T;
    }

    export interface IBearerToken {
        access_token: string;
        expires_in: number;
        token_type: string;
    }

    export interface IInvokeResult<T> {
        error: boolean;
        code: number;
        body?: string;
        result?: T;
    }    
}