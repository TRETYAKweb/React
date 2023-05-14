export interface IPayloadAction<Payload> {
    type: string;
    payload: Payload;
    error?: boolean;
}
