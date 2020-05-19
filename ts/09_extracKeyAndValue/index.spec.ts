import { extracKeyAndValue } from "./index";

it("Find and returns the first element found a object", () => {
    expect(extracKeyAndValue([2, 5, 8], 3)).toStrictEqual({});
    expect(extracKeyAndValue([2, 5, 3], 3)).toStrictEqual({ key: 2, val: 3 });
    expect(extracKeyAndValue([2, 3, 3], 3)).toStrictEqual({ key: 1, val: 3 });
});;

