import {Matcher} from "../../../src/matcher/type/Matcher";
import {between} from "../../../src/ts-mockito";

describe("BetweenMatcher", () => {
    describe("checking if value matches given min and max", () => {
        let testObj: Matcher;

        beforeEach(() => {
            testObj = between(5, 10);
        });

        describe("when given value is lower than min", () => {
            it("returns true", () => {
                // when
                const result = testObj.match(4);
                const notResult = testObj.not().match(4);

                // then
                expect(result).toBeFalsy();
                expect(notResult).toBeTruthy();
            });
        });

        describe("when given value is equal to min ", () => {
            it("returns true", () => {
                // when
                const result = testObj.match(5);
                // const notResult = testObj.not().match(5);

                // then
                expect(result).toBeTruthy();
                // expect(notResult).toBeFalsy();
            });
        });

        describe("when given value is equal grater then min but lower than max", () => {
            it("returns true", () => {
                // when
                const result = testObj.match(7);
                const notResult = testObj.not().match(7);

                // then
                expect(result).toBeTruthy();
                expect(notResult).toBeFalsy();
            });
        });

        describe("when given value is equal to max", () => {
            it("returns true", () => {
                // when
                const result = testObj.match(10);
                const notResult = testObj.not().match(10);

                // then
                expect(result).toBeTruthy();
                expect(notResult).toBeFalsy();
            });
        });

        describe("when given value is greater than max", () => {
            it("returns true", () => {
                // when
                const result = testObj.match(11);
                const notResult = testObj.not().match(11);

                // then
                expect(result).toBeFalsy();
                expect(notResult).toBeTruthy();
            });
        });
    });

    describe("when given min is greater than max", () => {
        it("it throws error", () => {
            // when
            let error = null;
            try {
                const testObj: Matcher = between(10, 9);
            } catch (e) {
                error = e;
            }

            // then
            expect(error).not.toBeNull();
        });
    });
});
