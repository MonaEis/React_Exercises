import {describe, test, expect} from 'vitest'
import { factorial } from './factorial'

describe("factorial function", () => {
    test("factorial of 1 is 1", ()=>{
        expect(factorial(1)).toBe(1)
    })

    test("factorial of 0 is 1", ()=>{
        expect(factorial(0)).toBe(1)
    })

    test("factorial of 2 is 2", ()=>{
        expect(factorial(2)).toBe(2)
    })

    test("factorial of 3 is 6", ()=>{
        expect(factorial(3)).toBe(6)
    })

    test("factorial of 11 is 39916800", ()=>{
        expect(factorial(11)).toBe(39916800)
    })
    
})