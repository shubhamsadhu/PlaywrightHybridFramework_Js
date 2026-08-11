const {test,expect}=require('@playwright/test')

test("LoginTest",async function({page}){
    // 1. Open EyeOnTask login page 
    await page.goto('https://www.eyeontask.com/login'); 
    
    // 2. Enter username 
    await page.getByPlaceholder('Username').fill('shubh_au'); 
    
    // 3. Click Next button 
    await page.getByRole('button', { name: 'Next' }).click(); 
    
    // 4. Enter password 
    await page.locator('input[name="password"]').fill('123'); 
    
    // 5. Click Login button 
    await page.getByRole('button', { name: 'Login' }).click(); 
    
    // 6. Verify dashboard page is opened 
    await expect(page).toHaveURL(/dashboard/); 
    
    // Optional: Verify dashboard is visible 
    await expect(page.getByRole('button', { name: 'Add Widgets' })
    ).toBeVisible({
        timeout: 30000
    });
})

// test("Add quote",async function({page}){
//     expect(2).toBe(3)
// })

// test("Edit quote",async function({page}){
//     expect(3).toBe(3)
// })
