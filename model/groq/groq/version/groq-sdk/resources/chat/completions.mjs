// File generated from our OpenAPI spec by Stainless.
import { APIResource } from 'groq-sdk/resource';
export class Completions extends APIResource {
    create(body, options) {
        return this._client.post('/openai/v1/chat/completions', { body, ...options, stream: body.stream ?? false });
    }
}
(function (Completions) {
})(Completions || (Completions = {}));
//# sourceMappingURL=completions.mjs.map