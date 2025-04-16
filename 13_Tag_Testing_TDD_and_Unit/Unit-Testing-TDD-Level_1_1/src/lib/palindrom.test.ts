import {describe, expect, test} from "vitest"
import { checkPalidrome } from "./palindrom";

describe("checkPalidrom function", ()=>{
    test("'level' is true", ()=>{
        expect(checkPalidrome("level")).toBe(true);
    })

    test("'dog' is false", ()=>{
        expect(checkPalidrome("dog")).toBe(false);
    })

    test("'Level' is true", ()=>{
        expect(checkPalidrome("Level")).toBe(true);
    })

    test("'Ein Esel lese nie' is true", ()=>{
        expect(checkPalidrome("Ein Esel lese nie")).toBe(true);
    })

    test("'Ein Esel lese nie.' is true", ()=>{
        expect(checkPalidrome("Ein Esel lese nie.")).toBe(true);
    })
})