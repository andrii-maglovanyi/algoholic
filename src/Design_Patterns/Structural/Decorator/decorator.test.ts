import { Emoji, Bio, ExcludeProperties, Frozen, WithTax } from "./decorator";

describe("Decorator", () => {
  test("Should add bacteria to yogurt", () => {
    @Bio("Bifidobacterium lactis")
    class Yogurt {
      constructor(public flavor: string, public type?: string) {}
    }

    const yogurt = new Yogurt("Cherry");

    expect(yogurt.flavor).toBe("Cherry");
    expect(yogurt.type).toBe("Bifidobacterium lactis");
  });

  test("Should freeze the class definition", () => {
    class IceCream {}
    expect(Object.isFrozen(IceCream)).toBeFalsy();

    @Frozen
    class FrozenIceCream {}
    expect(Object.isFrozen(FrozenIceCream)).toBeTruthy();
  });

  test("Should exclude property from class method", async () => {
    class User {
      constructor(
        private name: string,
        private age: number,
        private password: string
      ) {}

      @ExcludeProperties(["password", "age"])
      public async getAsyncInfo() {
        return Promise.resolve(this);
      }
    }

    const user = new User("John", 34, "Password1");
    expect(await user.getAsyncInfo()).toEqual({ name: "John" });
  });

  test("Should apply a tax to the value", () => {
    class Price {
      constructor(private amount: number = 0) {}

      @WithTax(0.15)
      get value(): number {
        return this.amount;
      }
    }

    const price = new Price(200);

    expect(price.value).toBe("230.00");
  });

  test("Should add Emoji to class property", () => {
    class Greeter {
      @Emoji("🍨")
      public greeting: string;
      constructor(greeting: string) {
        this.greeting = greeting;
      }
    }

    const greeter = new Greeter("Hello");
    expect(greeter.greeting).toBe("🍨Hello🍨");
  });
});
