import AsyncComp from "../components/asyncdemo";

describe("async dem0",()=>{
    test("test 1",()=>{
       return AsyncComp().then(data=>{
        expect(data).toBe("Hello User")
       })
    })
})