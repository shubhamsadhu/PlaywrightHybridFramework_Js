const {test,expect}=require('@playwright/test')

test("LoginTest",async function({page}){
    expect(2).toBe(2)
})

test("Add quote",async function({page}){
    expect(2).toBe(3)
})

test("Edit quote",async function({page}){
    expect(3).toBe(3)
})