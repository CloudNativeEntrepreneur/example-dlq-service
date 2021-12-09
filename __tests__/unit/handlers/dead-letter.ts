import { handle } from "../../../src/handlers/dead-letter.js";

jest.spyOn(process, "exit").mockImplementation(() => {
  return undefined as never;
});

describe("dead-letter command handler", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should log then respond to knative with 201", async () => {
    const request = {
      log: {
        info: jest.fn(),
        error: jest.fn(),
      },
    };
    const reply = {
      status: jest.fn(() => ({
        send: jest.fn(),
        json: jest.fn(),
      })),
    };
    const event = {
      source: "test",
      data: {
        the: {
          nested: {
            thing: {
              one: 1,
            },
          },
          two: 2,
        },
      },
      type: "test-command",
    };

    await handle(request, reply, event);
    expect(reply.status).toBeCalledWith(202);
  });
});
