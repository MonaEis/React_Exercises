import {describe, expect, test} from 'vitest'
import { replaceWithEmoji } from './replaceWithEmoji'

describe("replaceWithEmoji function", () => {

    test("'love' should be '❤️' ", ()=>{
        expect(replaceWithEmoji("love")).toBe("❤️");
    })

    test("'Dogs are great!' should be '🐶 are 🥰!' ", ()=>{
        expect(replaceWithEmoji("Dogs are great!")).toBe("🐶 are 🥰!");
    })

    test("'I love cars!' should be 'I ❤️ 🚗!' ", ()=>{
        expect(replaceWithEmoji("I love cars!")).toBe("I ❤️ 🚗!");
    })

    test("'I go outside' should be 'I go outside' ", ()=>{
        expect(replaceWithEmoji("I go outside")).toBe("I go outside");
    })
    
})