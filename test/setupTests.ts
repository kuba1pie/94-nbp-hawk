import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { validResponse } from "../__mocks__/validResponse";
import "whatwg-fetch";

export const restHandlers = [
  rest.get(
    "https://api.nbp.pl/api/exchangerates/tables/a/?format=json",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(validResponse));
    }
  ),
];
const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
