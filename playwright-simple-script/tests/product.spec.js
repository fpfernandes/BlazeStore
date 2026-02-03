// Simple Script to test product search and add to cart functionality

const { test, expect } = require('@playwright/test')

test('Product search', async ({page}) => {

    // Access and verify home page
    await page.goto('/')
    await expect(page).toHaveURL('/')
    await expect(page.locator('#nava')).toHaveText('PRODUCT STORE')

    // Perform login
    await page.locator('#login2').click()
    await page.fill('[id="loginusername"]', 'Datatest1' )
    await page.fill('[id="loginpassword"]', 'Test12345678' )
    const login_button = page.getByRole('button', {name: 'Log in'})
    await login_button.click()
    await expect(page.locator('#nameofuser')).toHaveText('Welcome Datatest1')

    // Access product by category
    const monitor = page.getByRole('Link', { name: 'Monitors'})
    await monitor.click()
    const product = page.getByRole('link', { name: 'Apple monitor 24'})
    await product.click()

    // Verify product page and add to cart
    await expect(page.locator('.name')).toHaveText('Apple monitor 24')
    await expect(page.locator('.price-container')).toHaveText('$400 *includes tax')
    const add_to_cart = page.getByRole('link', { name: 'Add to cart'})
    await add_to_cart.click()

    // Verify cart
    await page.locator('#cartur').click()
    await expect(page).toHaveURL('/cart.html')
    await expect(page.getByText('Products')).toBeVisible()
    await expect(page.getByText('Apple monitor 24')).toBeVisible()
    await expect(page.locator('td', { hasText: '400' })).toBeVisible()

    // Wait for 1 second
    await page.waitForTimeout(1000)

})
