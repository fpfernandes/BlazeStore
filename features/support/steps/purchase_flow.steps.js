import {Given, When, Then} from '@cucumber/cucumber'
import CartPage from '../pages/CartPage.js'
import HeaderPage from '../pages/HeaderPage.js'
import LoginPage from '../pages/LoginPage.js'
import PlaceOrderPage from '../pages/PlaceOrderPage.js'
import ProductsPage from '../pages/ProductsPage.js'

let cartPage, headerPage, loginPage, placeOrderPage, productsPage

Given('that I am logged into the Product Store website', async () => {
  cartPage = new CartPage(page)
  headerPage = new HeaderPage(page)
  loginPage = new LoginPage(page)
  placeOrderPage = new PlaceOrderPage(page)
  productsPage = new ProductsPage(page)
  await page.goto("https://demoblaze.com/index.html")
  await headerPage.click_login()
  await loginPage.login('Datatest1', 'Test12345678')
  await loginPage.click_login_button()
})

Given('I access the home page and see "Product Store" and "Welcome Datatest1"', async () => {
  await headerPage.verify_initial_page()
  await headerPage.check_user()
})

When('I select the category {string} for the first product', async (category1) => {
  await productsPage.product_per_category(category1)
})

Given('I open the first product page {string}', async (product1) => {
  await productsPage.select_product(product1)
})

Given('I validate that the first displayed product is {string} with price {string}', async (product1, price1) => {
  await productsPage.verify_product_page(product1, price1)
})

Given('I add the first product to the cart', async () => {
  await productsPage.add_to_cart()
})

Given('I select the category {string} for the second product', async (category2) => {
  await headerPage.go_home()
  await productsPage.product_per_category(category2)
})

Given('I open the second product page {string}', async (product2) => {
  await productsPage.select_product(product2) 
})

Given('I validate that the second displayed product is {string} with price {string}', async (product2, price2) => {
  await productsPage.verify_product_page(product2, price2)
})

Given('I add the second product to the cart', async () => {
  await productsPage.add_to_cart()
})

Given('I access the cart page', async () => {
  await headerPage.click_cart()
  await headerPage.check_cart_url()
})

Then('I see the first product {string} with price {string}', async (product1, price1) => {
  await cartPage.check_products(product1, price1)
})

Given('I see the second product {string} with price {string}', async (product2, price2) => {
  await cartPage.check_products(product2, price2)
})

Given('the total purchase amount is {string}', async (total) => {
  await cartPage.check_cart_total(total)
})

When('I click the "Place Order" button and check the page and {string}', async (total) => {
  await cartPage.click_place_order()
  await placeOrderPage.verify_page_total(total)
})

Given('I fill in the customer information:', async function (dataTable) {
  const data = dataTable.rowsHash()
  await placeOrderPage.fill_order_page(
    data.name,
    data.country,
    data.city,
    data.credit_card,
    data.month,
    data.year
  )
})

Given('I confirm the purchase by clicking "Purchase"', async () => {
  await placeOrderPage.click_purchase ()
})

Then('I see the message "Thank you for your purchase!"', async () => {
  await placeOrderPage.purchase_confirmation ()
})
