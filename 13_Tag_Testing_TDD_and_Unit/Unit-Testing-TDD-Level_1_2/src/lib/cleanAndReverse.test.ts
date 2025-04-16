import {describe, expect, test} from 'vitest'
import { cleanAndReverseString } from './cleanAndReverse'

describe("cleanAndReverseString function", ()=>{
    test("'hello' should be reversed to 'olleh'", () => {
        expect(cleanAndReverseString("hello")).toBe("olleh");
    })

    test("'h?el&o' should be reversed to 'oleh'", () => {
        expect(cleanAndReverseString("h?el&o")).toBe("oleh");
    })


    test("'hello3' should be reversed to '3olleh'", () => {
        expect(cleanAndReverseString("hello3")).toBe("3olleh");
    })   

    test("'hello 3' should be reversed to '3 olleh'", () => {
        expect(cleanAndReverseString("hello 3")).toBe("3 olleh");
    })   

})