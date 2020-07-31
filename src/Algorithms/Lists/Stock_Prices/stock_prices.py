def get_max_profit(stock_prices):
    min_buy_price = stock_prices[0]
    max_sell_price = stock_prices[1] - min_buy_price

    for price in stock_prices[1:]:
        max_sell_price = max(price - min_buy_price, max_sell_price)
        min_buy_price = min(price, min_buy_price)

    return max_sell_price
