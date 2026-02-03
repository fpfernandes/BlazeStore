Feature: Purchase flow in Product Store
  Perform complete purchase flow of two products

  Feature: Purchase flow in Product Store
  Perform complete purchase flow of two products

  Scenario Outline: Successful purchase
    Given that I am logged into the Product Store website
    And I access the home page and see "Product Store" and "Welcome Datatest1"

    When I select the category "<category1>" for the first product
    And I open the first product page "<product1>"
    And I validate that the first displayed product is "<product1>" with price "<price1>"
    And I add the first product to the cart

    And I select the category "<category2>" for the second product
    And I open the second product page "<product2>"
    And I validate that the second displayed product is "<product2>" with price "<price2>"
    And I add the second product to the cart

    And I access the cart page
    Then I see the first product "<product1>" with price "<price1>"
    And I see the second product "<product2>" with price "<price2>"
    And the total purchase amount is "<total>"

    When I click the "Place Order" button and check the page and "<total>"
    And I fill in the customer information:
      | name        | John          |
      | country     | Brazil        |
      | city        | São Paulo     |
      | credit_card | 1234567890    |
      | month       | 12            |
      | year        | 2025          |

    And I confirm the purchase by clicking "Purchase"
    Then I see the message "Thank you for your purchase!"

    Examples:
    | category1 | product1         | price1 | category2 | product2    | price2 | total |
    | Laptops   | Sony vaio i5     | 790    | Phones    | Nexus 6     | 650    | 1440  |
    | Monitors  | Apple monitor 24 | 400    | Laptops   | MacBook air | 700    | 1100  |

